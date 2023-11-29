package com.example.a0922i1projectmobilephone.service.input_invoice;

import com.example.a0922i1projectmobilephone.dto.input_invoice.ProductInputDto;
import com.example.a0922i1projectmobilephone.entity.InputInvoiceDetail;
import com.example.a0922i1projectmobilephone.repository.input_invoice.InputInvoiceDetailRepoImpl;
import com.example.a0922i1projectmobilephone.repository.input_invoice.InputInvoiceDetailRepository;
import com.example.a0922i1projectmobilephone.repository.input_invoice.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class InputInvoiceDetailServiceImpl implements InputInvoiceDetailService {

    @Autowired
    private InputInvoiceDetailRepository inputInvoiceDetailRepository;
    @Autowired
    private InputInvoiceDetailRepoImpl inputInvoiceDetailRepo;
    @Autowired
    private ProductRepo productRepo;

    @Override
    public Page<InputInvoiceDetail> getInputInvoiceDetail(int pageNo, int pageSize) {
        return inputInvoiceDetailRepository.getInputInvoiceDetail(Pageable.ofSize(pageSize).withPage(pageNo));
    }


    @Override
    public Page<InputInvoiceDetail> search(String supplierName, String productName, String startDate, String endDate, int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return this.inputInvoiceDetailRepo.search(supplierName, productName, startDate, endDate, pageable);

    }

    @Override
    public void addInputInvoiceDetail(ProductInputDto[] dto, int inputInvoiceId, int supplierId) {
        System.out.println("InputInvoice ID: " + inputInvoiceId);

        for (ProductInputDto p: dto){
            if (p.getProductId() == null){
                int productId = productRepo.addNewProduct(p,supplierId);
                p.setProductId(productId);
                this.inputInvoiceDetailRepo.addInputInvoiceDetail(p, inputInvoiceId);
            }else {
                this.inputInvoiceDetailRepo.addInputInvoiceDetail(p, inputInvoiceId);
                this.productRepo.adjustQuantityAndCost(p);
            }
        }
    }
}
