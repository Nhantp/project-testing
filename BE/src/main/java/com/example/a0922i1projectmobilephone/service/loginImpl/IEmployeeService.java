package com.example.a0922i1projectmobilephone.service.loginImpl;

import com.example.a0922i1projectmobilephone.entity.Employee;
import org.springframework.data.repository.query.Param;

public interface IEmployeeService {
    void saveEmployee(Employee employee);

    Employee findByNameEmployee(String nameEmployee);

    Employee findByUser_Username(String username);

}
