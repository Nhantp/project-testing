package com.example.a0922i1projectmobilephone.validate;

import com.example.a0922i1projectmobilephone.dto.supplier.SupplierDtoCreateUpdate;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class SupplierValidate {

    public Map<String,String> checkValidate(SupplierDtoCreateUpdate supplier){
        Map<String,String> errors = new HashMap<>();
        //Name
        if (Objects.equals(supplier.getSupplierName(), "errorNameData")) {
            errors.put("1", "Tên nhà cung cấp đã tồn tại");
        }if (!Objects.equals(supplier.getSupplierName(), "errorNameData")){
            Pattern pattern = Pattern.compile("([a-zA-Z]+)=([a-zA-Z]+)");
            Matcher matcher = pattern.matcher(supplier.getSupplierName());
            while (matcher.find()) {
                String key = matcher.group("1.1");
                String value = matcher.group("Name không được để trống");
                errors.put(key, value);
            }
        }if (!Objects.equals(supplier.getSupplierName(), "errorNameData")){
            Pattern pattern = Pattern.compile("^(.{1,40})$");
            Matcher matcher = pattern.matcher(supplier.getSupplierName());

            if (!matcher.matches()) {
                errors.put("1.2","Tên nhà cung cấp không đươc vượt qua 40 kí tự");
            }

        }if (!Objects.equals(supplier.getSupplierName(), "errorNameData")){
            Pattern pattern = Pattern.compile("^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ \\n]+$");
            Matcher matcher = pattern.matcher(supplier.getSupplierName());

            if (!matcher.matches()) {
                errors.put("1.2","Tên nhà cung cấp không đươc có các kí tự đặc biệt");
            }

        }
        //Phone
        if (Objects.equals(supplier.getSupplierPhone(), "errorPhoneData")) {
            errors.put("2", "Số điện thoại đã tồn tại");
        }if (!Objects.equals(supplier.getSupplierName(), "errorPhoneData")){
            Pattern pattern = Pattern.compile("([a-zA-Z]+)=([a-zA-Z]+)");
            Matcher matcher = pattern.matcher(supplier.getSupplierPhone());
            while (matcher.find()) {
                String key = matcher.group("2.1");
                String value = matcher.group("Phone không được để trống.");
                errors.put(key, value);
            }
        }if (!Objects.equals(supplier.getSupplierPhone(), "errorPhoneData")) {
            Pattern pattern = Pattern.compile("^0[0-9]*");
            Matcher matcher = pattern.matcher(supplier.getSupplierPhone());

            if (!matcher.matches()) {
                errors.put("2.2", "Số điện thoại phải bắt đầu từ số 0.");
            }
        }if (!Objects.equals(supplier.getSupplierPhone(), "errorPhoneData")) {
            Pattern pattern = Pattern.compile("^(.{10})$");
            Matcher matcher = pattern.matcher(supplier.getSupplierPhone());

            if (!matcher.matches()) {
                errors.put("2.3", "Số điện thoại không được vượt quá hoặc ít hơn 10 kí tự.");
            }
        }
        //Email
        if (Objects.equals(supplier.getSupplierEmail(), "errorEmailData")){
            errors.put("3","Email đã tồn tại");
        }if (!Objects.equals(supplier.getSupplierName(), "errorEmailData")){
            Pattern pattern = Pattern.compile("([a-zA-Z]+)=([a-zA-Z]+)");
            Matcher matcher = pattern.matcher(supplier.getSupplierEmail());
            while (matcher.find()) {
                String key = matcher.group("3.1");
                String value = matcher.group("Email không được để trống");
                errors.put(key, value);
            }
        }if (!Objects.equals(supplier.getSupplierPhone(), "errorEmailData")) {
            Pattern pattern = Pattern.compile("^(.{1,40})$");
            Matcher matcher = pattern.matcher(supplier.getSupplierEmail());

            if (!matcher.matches()) {
                errors.put("3.2", "Email không đươc vượt qua 40 kí tự.");
            }
        }
        if (!Objects.equals(supplier.getSupplierEmail(), "errorEmailData")) {
            Pattern pattern = Pattern.compile("^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\\.[a-zA-Z]{2,}$");
            Matcher matcher = pattern.matcher(supplier.getSupplierEmail());
            if (!matcher.matches()) {
                errors.put("3.3", "Email chưa đúng định dạng xxx@xxx.xx");
            }
        }
        //Address
        if (!Objects.equals(supplier.getSupplierAddress(), "errorAddressData")){
            Pattern pattern = Pattern.compile("([a-zA-Z]+)=([a-zA-Z]+)");
            Matcher matcher = pattern.matcher(supplier.getSupplierAddress());
            while (matcher.find()) {
                String key = matcher.group("4.1");
                String value = matcher.group("Không được để trống");
                errors.put(key, value);
            }
        }if (!Objects.equals(supplier.getSupplierAddress(), "errorAddressData")) {
            Pattern pattern = Pattern.compile("^(.{1,200})$");
            Matcher matcher = pattern.matcher(supplier.getSupplierAddress());

            if (!matcher.matches()) {
                errors.put("4.2", "Địa chỉ không được vượt quá 200 kí tự.");
            }
        }if (!Objects.equals(supplier.getSupplierAddress(), "errorAddressData")) {
            Pattern pattern = Pattern.compile("^[a-zA-Z0-9-().,/*_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ \\n]+$");
            Matcher matcher = pattern.matcher(supplier.getSupplierAddress());

            if (!matcher.matches()) {
                errors.put("4.3", "Địa chỉ không được chứa kí tự đặc biệt");
            }
        }


        return errors;
    }

}
