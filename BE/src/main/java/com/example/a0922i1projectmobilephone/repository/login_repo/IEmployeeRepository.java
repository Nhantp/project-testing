package com.example.a0922i1projectmobilephone.repository.login_repo;

import com.example.a0922i1projectmobilephone.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IEmployeeRepository extends JpaRepository<Employee, Integer> {

    @Query(value = "SELECT e.nameEmployee  FROM Employee e WHERE e.nameEmployee = :nameEmployee", nativeQuery = true)
    Employee findByNameEmployee(@Param("nameEmployee") String nameEmployee);

    @Query(value = "SELECT * FROM Employee e join user u on u.user_id = e.user_id WHERE u.user_name = :username",nativeQuery = true)
    Employee findByUser_Username(@Param("username") String username);


}
