package com.example.a0922i1projectmobilephone.validate;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface ValidateFormatProductId {
    String regex() default "\\d+"; // Thiết lập biểu thức chính quy mặc định, ở đây là dạng số nguyên.
    String message() default "Invalid ProductId"; // Thiết lập thông báo lỗi mặc định.
}