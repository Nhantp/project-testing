package com.example.a0922i1projectmobilephone.controller;
import com.example.a0922i1projectmobilephone.dto.input_invoice.InputInvoiceDto;
import com.example.a0922i1projectmobilephone.dto.input_invoice.ProductInputDto;
import com.example.a0922i1projectmobilephone.entity.InputInvoiceDetail;
import com.example.a0922i1projectmobilephone.service.input_invoice.InputInvoiceDetailService;
import com.example.a0922i1projectmobilephone.service.input_invoice.InputInvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.*;
@RestController
@RequestMapping("/input-invoice")
@CrossOrigin(origins = "http://localhost:4200")
public class InputInvoiceController {
    @Autowired
    private InputInvoiceDetailService inputInvoiceDetailService;
    @Autowired
    private InputInvoiceService inputInvoiceService;
    @GetMapping("/list")
    public ResponseEntity<Page<InputInvoiceDetail>> getAllInputInvoiceDetail(
            @RequestParam(required = false) String supplierName,
            @RequestParam(required = false) String productName,
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate,
            @RequestParam(defaultValue = "0") int pageNo,
            @RequestParam(defaultValue = "8") int pageSize
    ){
        Page<InputInvoiceDetail> inputInvoiceDetails = null;
        if (supplierName.isEmpty()&&productName.isEmpty()&&startDate.isEmpty()&&endDate.isEmpty()) {
            inputInvoiceDetails = this.inputInvoiceDetailService.getInputInvoiceDetail(pageNo, pageSize);
        } else {
            inputInvoiceDetails = this.inputInvoiceDetailService.search(supplierName, productName,startDate,endDate,pageNo,pageSize);
        }
        return new ResponseEntity<>(inputInvoiceDetails, HttpStatus.OK);
    }
    @PostMapping("/new-input-invoice")
    public ResponseEntity<HttpStatus> addNewInputInvoice(
            @RequestBody InputInvoiceDto dto
    ){
        System.out.println("Đã vào method");
        this.inputInvoiceService.addNewInputInvoice(dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PostMapping("/validate")
    public ResponseEntity<Map<String, String>> validateForm(
            @Valid @RequestBody ProductInputDto dto,
            BindingResult bindingResult
    ){
        System.out.println("Đã vào method");
        Map<String, String> errors = new HashMap<>();
        if (bindingResult.hasErrors()){
            bindingResult.getFieldErrors().forEach(
                    error -> {
                        errors.put(error.getField(), error.getDefaultMessage());
                    }
            );
            return ResponseEntity.badRequest().body(errors);
        }
        return ResponseEntity.ok(Collections.emptyMap());
    }
}