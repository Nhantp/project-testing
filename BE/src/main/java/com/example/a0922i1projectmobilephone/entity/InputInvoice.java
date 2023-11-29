package com.example.a0922i1projectmobilephone.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;
@Entity
@Table(name = "input_invoice")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class InputInvoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer inputInvoiceId;
    @Column(name = "input_invoice_date")
    private Date inputInvoiceDate;
    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;
    @OneToMany(mappedBy = "inputInvoice",fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JsonBackReference
    private Set<InputInvoiceDetail> inputInvoiceDetail;
}
