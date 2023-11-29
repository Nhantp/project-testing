package com.example.a0922i1projectmobilephone.repository.input_invoice;

import com.example.a0922i1projectmobilephone.entity.InputInvoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface InputInvoiceRepository extends JpaRepository<InputInvoice, Integer> {

}
