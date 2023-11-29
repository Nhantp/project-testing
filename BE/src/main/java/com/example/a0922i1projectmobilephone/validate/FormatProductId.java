package com.example.a0922i1projectmobilephone.validate;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class FormatProductId implements ConstraintValidator<ValidateFormatProductId, Integer> {
    private String regex;

    @Override
    public void initialize(ValidateFormatProductId annotation) {
        regex = annotation.regex();
    }

    @Override
    public boolean isValid(Integer value, ConstraintValidatorContext context) {
        if (value == null) {
            return true; // Giá trị null được coi là hợp lệ (tùy chọn).
        }
        return String.valueOf(value).matches(regex);
    }
}