package com.example.a0922i1projectmobilephone.validate;

    import javax.validation.ConstraintValidator;

import javax.validation.ConstraintValidatorContext;

public class FormatDate implements ConstraintValidator<ValidateFormat,String> {
    @Override
    public void initialize(ValidateFormat constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return value.matches("\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])");
    }
}
