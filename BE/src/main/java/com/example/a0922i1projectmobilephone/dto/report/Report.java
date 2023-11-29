package com.example.a0922i1projectmobilephone.dto.report;
import java.util.Date;
public interface Report {

        Integer getProduct_id();

        String getName_product();
        Integer getCost_product();

        Date getDate_output_invoice();
        Integer getSelling_price_product();

}
