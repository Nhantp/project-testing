package com.example.a0922i1projectmobilephone.repository.input_invoice;

import com.example.a0922i1projectmobilephone.dto.input_invoice.ProductInputDto;
import com.example.a0922i1projectmobilephone.entity.InputInvoiceDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import javax.transaction.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
@Transactional
public class InputInvoiceDetailRepoImpl {
    @PersistenceContext
    private EntityManager em;

    public Page<InputInvoiceDetail> search(String supplierName, String productName, String startDate, String endDate, Pageable pageable) {
        SimpleDateFormat pattern = new SimpleDateFormat("yyyy-MM-dd");


        String sql_search = "SELECT iid" +
                " FROM InputInvoiceDetail iid" +
                " WHERE 1=1";
        if (!supplierName.isEmpty()){
            sql_search += " AND iid.inputInvoice.supplier.supplierName LIKE :supplierName";
        }
        if (!productName.isEmpty()){
            sql_search += " AND iid.product.productName LIKE :productName";
        }

        Date startDateConverted = null;
        if (!startDate.isEmpty()){
            try {
                startDateConverted = pattern.parse(startDate);
//                startDate = pattern.format(startDateConverted);


            } catch (ParseException e) {
                throw new RuntimeException(e);
            }
            sql_search += " AND iid.inputInvoice.inputInvoiceDate >= :startDate";
        }

        Date endDateConverted = null;
        if (!endDate.isEmpty()){
            try {
                endDateConverted = pattern.parse(endDate);
//                endDate = pattern.format(endDateConverted);
            } catch (ParseException e) {
                throw new RuntimeException(e);
            }
            sql_search += " AND iid.inputInvoice.inputInvoiceDate <= :endDate";
        }
        sql_search += " ORDER BY iid.inputInvoice.inputInvoiceDate desc";
        Query query = em.createQuery(sql_search);
        if (!supplierName.isEmpty()) {
            query.setParameter("supplierName", "%" + supplierName + "%");
        }
        if (!productName.isEmpty()) {
            query.setParameter("productName", "%" + productName + "%");
        }
        if (!startDate.isEmpty()) {
            query.setParameter("startDate",startDateConverted);
        }
        if (!endDate.isEmpty()) {
            query.setParameter("endDate", endDateConverted);
        }

        List<InputInvoiceDetail> resultList = query.getResultList();
        int start = (int) pageable.getOffset();
        int end = Math.min((start + pageable.getPageSize()), resultList.size());
        Page<InputInvoiceDetail> page = new PageImpl<>(resultList.subList(start, end), pageable, resultList.size());
        return page;
    }

    public int addInputInvoiceDetail(ProductInputDto dto, int inputInvoiceId){
        em.createNativeQuery("insert into input_invoice_detail(amount, input_invoice_cost,input_invoice_id,product_id)" +
                        "values (?1, ?2, ?3, ?4)")
                .setParameter(1, dto.getQuantity())
                .setParameter(2, dto.getCostPrice())
                .setParameter(3, inputInvoiceId)
                .setParameter(4, dto.getProductId())
                .executeUpdate();
        return 0;
    }

}
