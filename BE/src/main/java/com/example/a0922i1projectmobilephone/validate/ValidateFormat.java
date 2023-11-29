package com.example.a0922i1projectmobilephone.validate;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.FIELD})
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy =FormatDate.class)
public @interface ValidateFormat {
    String message() default
            "Không đúng format";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

