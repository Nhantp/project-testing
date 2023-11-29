package com.example.a0922i1projectmobilephone.dto.report;
import com.example.a0922i1projectmobilephone.validate.ValidateFormat;
import com.example.a0922i1projectmobilephone.validate.ValidateFormatProductId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import javax.validation.constraints.NotNull;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReportDTO {
    @NotNull
    @ValidateFormat
    private String fromDate;
    @NotNull
    @ValidateFormat
    private String toDate;
    @NotNull
    private String reportType;
    @ValidateFormatProductId
    private Integer productId;

}
