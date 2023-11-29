package com.example.a0922i1projectmobilephone.service.output_invoice;

import com.example.a0922i1projectmobilephone.dto.managerPurchaseHistory.DetailHistory;
import com.example.a0922i1projectmobilephone.dto.output_invoice.OutputInvoiceDTO;
import com.example.a0922i1projectmobilephone.dto.managerPurchaseHistory.ManagerPurchaseHistory;
import com.example.a0922i1projectmobilephone.dto.output_invoice.ProductDTO;
import com.example.a0922i1projectmobilephone.entity.Product;
import org.springframework.data.domain.Page;

import java.util.List;

public interface OutputInvoiceService {
    /**
     * NhanTP
     * Create Output Invoice
     */
    void saveOutputInvoice(OutputInvoiceDTO request);

    Integer getQuantity(Integer productId);


    long countById(String fromDay, String toDay, Integer id);

    long countAll(String fromDay, String toDay);

    long calculateRevenueByProductId(String fromDate, String toDate, Integer productId);

    long calculateRevenue(String fromDate, String toDate);



    //thuận
    Page<ManagerPurchaseHistory> getAll(int pageNo, int pageSize);

    Page<ManagerPurchaseHistory> sortByTotalPriceDESC(int pageNo, int pageSize);
    Page<ManagerPurchaseHistory> sortByTotalPriceASC(int pageNo, int pageSize);

    Page<ManagerPurchaseHistory> sortByCustomerNameDESC(int pageNo, int pageSize);
    Page<ManagerPurchaseHistory> sortByCustomerNameASC(int pageNo, int pageSize);

    Page<ManagerPurchaseHistory> sortByProductNameDESC(int pageNo, int pageSize);
    Page<ManagerPurchaseHistory> sortByProductNameASC(int pageNo, int pageSize);

    Page<ManagerPurchaseHistory> sortByDateOutputInvoiceDESC(int pageNo, int pageSize);
    Page<ManagerPurchaseHistory> sortByDateOutputInvoiceASC(int pageNo, int pageSize);

    Page<ManagerPurchaseHistory> sortByQuantityDESC(int pageNo, int pageSize);
    Page<ManagerPurchaseHistory> sortByQuantityASC(int pageNo, int pageSize);
    List<DetailHistory> findById(int id);
}
