package com.example.a0922i1projectmobilephone.controller;

import com.example.a0922i1projectmobilephone.dto.managerPurchaseHistory.DetailHistory;
import com.example.a0922i1projectmobilephone.dto.output_invoice.OutputInvoiceDTO;
import com.example.a0922i1projectmobilephone.dto.managerPurchaseHistory.ManagerPurchaseHistory;
import com.example.a0922i1projectmobilephone.dto.output_invoice.ProductDTO;
import com.example.a0922i1projectmobilephone.entity.Product;
import com.example.a0922i1projectmobilephone.service.output_invoice.OutputInvoiceServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class OutputInvoiceController {
    @Autowired
    private OutputInvoiceServiceImp outputInvoiceService;

    @GetMapping("/managerPurchaseHistory")
    public ResponseEntity<Page<ManagerPurchaseHistory>> getAll(
            @RequestParam(defaultValue = "1") int pageNo,
            @RequestParam(defaultValue = "8") int pageSize,
            @RequestParam(required = false) String sort) {
        Page<ManagerPurchaseHistory> page;
        switch (sort) {
            case "customerNameASC":
                page = outputInvoiceService.sortByCustomerNameASC(pageNo, pageSize);
                return new ResponseEntity<>(page, HttpStatus.OK);
            case "customerDESC":
                page = outputInvoiceService.sortByCustomerNameDESC(pageNo, pageSize);
                return new ResponseEntity<>(page, HttpStatus.OK);
            case "productNameDESC":
                page = outputInvoiceService.sortByProductNameDESC(pageNo, pageSize);
                return new ResponseEntity<>(page, HttpStatus.OK);
            case "totalPriceDESC":
                page = outputInvoiceService.sortByTotalPriceDESC(pageNo, pageSize);
                return new ResponseEntity<>(page, HttpStatus.OK);
            case "timeDESC":
                page = outputInvoiceService.sortByDateOutputInvoiceDESC(pageNo, pageSize);
                return new ResponseEntity<>(page, HttpStatus.OK);
            case "timeASC":
                page = outputInvoiceService.sortByDateOutputInvoiceASC(pageNo, pageSize);
                return new ResponseEntity<>(page, HttpStatus.OK);
            case "totalPriceASC":
                page = outputInvoiceService.sortByTotalPriceASC(pageNo, pageSize);
                return new ResponseEntity<>(page, HttpStatus.OK);
            case "productNameASC":
                page = outputInvoiceService.sortByProductNameASC(pageNo, pageSize);
                return new ResponseEntity<>(page, HttpStatus.OK);
            default:
                page = outputInvoiceService.getAll(pageNo, pageSize);
                return new ResponseEntity<>(page, HttpStatus.OK);
        }
    }

    @GetMapping("/managerPurchaseHistory/{id}")
    public List<DetailHistory> detailHistoryList(@PathVariable() int id) {
        return outputInvoiceService.findById(id);
    }

    @PostMapping("/payment")
    public ResponseEntity<?> payment(@RequestBody OutputInvoiceDTO request) {
        outputInvoiceService.saveOutputInvoice(request);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/getQuantity")
    public Integer getQuantity(@RequestParam Integer productId){
        return outputInvoiceService.getQuantity(productId);
    }
}


