package com.example.a0922i1projectmobilephone.controller;

import com.example.a0922i1projectmobilephone.config.VNPayService;
import com.example.a0922i1projectmobilephone.dto.output_invoice.VNPayDTO;
import com.example.a0922i1projectmobilephone.dto.output_invoice.VNPayResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class VNPayController {
    @Autowired
    private VNPayService vnPayService;
@PostMapping("/submitOrder")
public ResponseEntity<Map<String, String>> submitOrder(@RequestParam("amount") long orderTotal,
                                                       @RequestParam("orderInfo") String orderInfo) {
    String baseUrl = "";
    String vnpayUrl = vnPayService.createOrder(orderTotal, orderInfo, baseUrl);
    Map<String, String> response = new HashMap<>();
    response.put("vnpayUrl", vnpayUrl);
    return ResponseEntity.ok(response);
}


    @GetMapping("/vnpay-payment")
    public ResponseEntity<?> VNPay(HttpServletRequest request) {
        VNPayDTO vnPayDTO = new VNPayDTO();
        int paymentStatus = vnPayService.orderReturn(request);

        vnPayDTO.setOrderInfo(request.getParameter("vnp_OrderInfo"));
        vnPayDTO.setPaymentTime(request.getParameter("vnp_PayDate"));
        vnPayDTO.setTransactionId(request.getParameter("vnp_TransactionNo"));
        vnPayDTO.setTotalPrice(request.getParameter("vnp_Amount"));

        VNPayResponse vnPayResponse = new VNPayResponse();
        vnPayResponse.setVnPayDTO(vnPayDTO);
        vnPayResponse.setPaymentStatus(paymentStatus);

        return new ResponseEntity<>(vnPayResponse, HttpStatus.OK);
    }
}
