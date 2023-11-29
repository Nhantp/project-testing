package com.example.a0922i1projectmobilephone.service.loginImpl;

import com.example.a0922i1projectmobilephone.entity.Employee;
import com.example.a0922i1projectmobilephone.repository.login_repo.IEmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements IEmployeeService {
    @Autowired
    IEmployeeRepository employeeRepository;

    public void saveEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public Employee findByNameEmployee(String nameEmployee) {
        return employeeRepository.findByNameEmployee(nameEmployee);
    }

    @Override
    public Employee findByUser_Username(String username) {
        return employeeRepository.findByUser_Username(username);
    }

}
