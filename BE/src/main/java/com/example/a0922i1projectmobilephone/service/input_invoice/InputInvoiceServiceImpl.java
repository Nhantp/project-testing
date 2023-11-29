package com.example.a0922i1projectmobilephone.service.input_invoice;

import com.example.a0922i1projectmobilephone.dto.input_invoice.InputInvoiceDto;
import com.example.a0922i1projectmobilephone.repository.input_invoice.InputInvoiceRepoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Date;
@Service
public class InputInvoiceServiceImpl implements InputInvoiceService {
    @Autowired
    private InputInvoiceRepoImpl inputInvoiceRepoImpl;

   @Autowired
   private InputInvoiceDetailService inputInvoiceDetailService;
    @Override
    public int addNewInputInvoice(InputInvoiceDto dto) {
        Date currentDate = new Date();
        int inputInvoiceId = this.inputInvoiceRepoImpl.addNewInputInvoice(currentDate, dto.getSupplier().getSupplierId());
        if (inputInvoiceId != 0){
            inputInvoiceDetailService.addInputInvoiceDetail(dto.getProductInputDto(), inputInvoiceId,dto.getSupplier().getSupplierId());
        }
        return 0;
    }
}
