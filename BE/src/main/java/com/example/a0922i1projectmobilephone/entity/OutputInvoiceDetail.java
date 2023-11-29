package com.example.a0922i1projectmobilephone.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OutputInvoiceDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer outputInvoiceDetailId;
    @Column(name = "quantity")
    private int quantity;
    @Column(name = "sub_total")
    private int subTotal;
    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "product_id", referencedColumnName = "productId")
    private Product product;
    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "output_invoice_id", referencedColumnName = "outputInvoiceId")
    private OutputInvoice outputInvoice;
}
