package com.example.a0922i1projectmobilephone.repository.input_invoice;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.Date;

@Repository
@Transactional
public class InputInvoiceRepoImpl {
    @PersistenceContext
    private EntityManager em;


    public int addNewInputInvoice(Date currentDate, Integer supplierId) {
       boolean isCreate = false;
        if (
                em.createNativeQuery("INSERT INTO input_invoice(input_invoice_date, supplier_id) VALUES(?1, ?2)")
                        .setParameter(1, currentDate)
                        .setParameter(2, supplierId)
                        .executeUpdate() > 0
        ) {
            isCreate = true;
        }
        if (isCreate){

            return getLastInsert();
        }
        return 0;
    }

    int getLastInsert() {
        return (int) em.createNativeQuery("SELECT MAX(input_invoice_id) from input_invoice").getSingleResult();

    }
}
