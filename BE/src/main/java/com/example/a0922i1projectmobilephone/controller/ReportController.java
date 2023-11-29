package com.example.a0922i1projectmobilephone.controller;
import com.example.a0922i1projectmobilephone.dto.report.ReportDTO;
import com.example.a0922i1projectmobilephone.service.output_invoice.OutputInvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*",maxAge = 3600)
public class ReportController {
    @Autowired
    private OutputInvoiceService outPutInvoiceService;
    @PostMapping("/report")
    public ResponseEntity<?> find(@RequestBody ReportDTO reportDTO) {
        Map<String, Long> result = new HashMap<>();
        String fromDate = reportDTO.getFromDate();
        String toDate = reportDTO.getToDate();
        String reportType = reportDTO.getReportType();
        Integer productId = reportDTO.getProductId();
        if ("All".equals(reportType)) {
            long totalInvoice = outPutInvoiceService.countAll(fromDate, toDate);
            long totalRevenue = outPutInvoiceService.calculateRevenue(fromDate, toDate);
            result.put("totalInvoice", totalInvoice);
            result.put("totalRevenue", totalRevenue);
        } else if ("MaSp".equals(reportType)) {
            long totalInvoice = outPutInvoiceService.countById(fromDate, toDate, productId);
            long totalRevenue = outPutInvoiceService.calculateRevenueByProductId(fromDate, toDate, productId);
            result.put("totalInvoice", totalInvoice);
            result.put("totalRevenue", totalRevenue);
        }
         return ResponseEntity.ok(result);
    }
}
