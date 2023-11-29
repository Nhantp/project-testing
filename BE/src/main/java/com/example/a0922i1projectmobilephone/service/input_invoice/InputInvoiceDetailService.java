package com.example.a0922i1projectmobilephone.service.input_invoice;

import com.example.a0922i1projectmobilephone.dto.input_invoice.ProductInputDto;
import com.example.a0922i1projectmobilephone.entity.InputInvoiceDetail;
import org.springframework.data.domain.Page;

public interface InputInvoiceDetailService {
    Page<InputInvoiceDetail> getInputInvoiceDetail(int pageNo, int pageSize);
    Page<InputInvoiceDetail> search(String supplierName, String productName, String startDate, String endDate, int pageNo, int pageSize);
void addInputInvoiceDetail(ProductInputDto[] dto, int inputInvoiceId, int supplierId);

}
