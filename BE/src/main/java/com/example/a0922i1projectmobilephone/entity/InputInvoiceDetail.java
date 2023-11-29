package com.example.a0922i1projectmobilephone.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "input_invoice_detail")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class InputInvoiceDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer inputInvoiceDetailId;
    @Column(name = "input_invoice_cost")
    @JsonProperty("inputInvoiceCost")
    private double inputInvoiceCost;
    @Column(name = "amount")
    @JsonProperty("amount")
    private int amount;
  
    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "product_id", referencedColumnName = "productId")
    private Product product;
  
  
    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "input_invoice_id", referencedColumnName = "inputInvoiceId")
    private InputInvoice inputInvoice;

}
