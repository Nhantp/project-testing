package com.example.a0922i1projectmobilephone.dto.request;

import com.example.a0922i1projectmobilephone.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.Set;
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class SignUpForm {
    @NotBlank
    private String nameEmployee;
    @NotBlank
    @DateTimeFormat(pattern = "yyyy/dd/MM")
    private Date birthdayEmployee;
    @NotBlank
    private String addressEmployee;
    @NotBlank
    private String numberPhoneEmployee;
    @NotBlank
    private String positionEmployee;

    private User user;
    @NotBlank
    private Set<String> role;

}

