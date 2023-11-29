package com.example.a0922i1projectmobilephone.repository.output_invoice;

import com.example.a0922i1projectmobilephone.entity.OutputInvoiceDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OutputInvoiceDetailRepository extends JpaRepository<OutputInvoiceDetail, Long> {
    @Modifying
    @Query(value = "INSERT INTO output_invoice_detail (quantity, sub_total, output_invoice_id, product_id) VALUES (?, ?, ?, ?);", nativeQuery = true)
    void saveOutputInvoiceDetail(Integer quantity, Integer subTotal, Integer invoiceId, Integer productId);
}
