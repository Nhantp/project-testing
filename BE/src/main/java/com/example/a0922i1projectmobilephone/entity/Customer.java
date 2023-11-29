package com.example.a0922i1projectmobilephone.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;
    @Column(name = "customer_name")
    private String customerName;
    @Column(name = "customer_phone")
    private String customerPhone;
    @Column(name = "customer_address")
    private String customerAddress;
    @Column(name = "customer_age", nullable = true)
    private Integer customerAge;
    @Column(name = "customer_email")
    private String customerEmail;
    @OneToMany(mappedBy = "customer" ,fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private Set<OutputInvoice> outputInvoice;

}
