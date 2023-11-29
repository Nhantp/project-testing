package com.example.a0922i1projectmobilephone.repository.customer_repo;

import com.example.a0922i1projectmobilephone.dto.output_invoice.CustomerResponseDTO;
import com.example.a0922i1projectmobilephone.entity.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import javax.transaction.Transactional;

@Transactional
@Repository
public interface IRepositoryCustomer extends JpaRepository<Customer, Integer> {

    @Query(value = "select customer_id, customer_phone, customer_name , customer_address, customer_age, customer_email " +
            " from customer " +
            "WHERE\n" +
            "    (\n" +
            "        (:option = 'name' AND customer_name LIKE %:search%) OR\n" +
            "        (:option = 'age' AND customer_age  = :search) OR\n" +
            "        (:option = 'address' AND customer_address LIKE %:search%)\n" +
            "    )\n" +
            "    OR :isAll = 1" +
            "    OR customer_phone LIKE %:numberPhone%\n", nativeQuery = true)
    Page<Customer> searchCustomer(Pageable pageable, @Param("option") String option,
                                  @Param("search") String search,
                                  @Param("numberPhone") String numberPhone,
                                  @Param("isAll") int isAll);
    @Query(value = "select * from customer  where customer_id = ?1", nativeQuery = true)
    Customer findById(int id);
    /**
     * NhanTP
     * Create Customer are not in the list
     */
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO customer(customer_name, customer_phone, customer_address, customer_email) VALUES (:customerName, :phoneNumber, :address, :email)", nativeQuery = true)
    void saveCustomer(@Param("customerName") String customerName, @Param("phoneNumber") String phoneNumber, @Param("address") String address, @Param("email") String email);
    /**
     * NhanTP
     * Find by id Customer
     */
    @Query("SELECT c.customerId AS customer_id, c.customerName AS customer_name, c.customerPhone AS customer_phone, c.customerAddress AS customer_address, c.customerEmail AS customer_email FROM Customer c WHERE c.customerId = :customerId")
    CustomerResponseDTO findCustomerById(@Param("customerId") Integer customerId);
    /**
     * NhanTP
     * Get last id Customer
     */
    @Query(value = "SELECT MAX(customer_id) FROM customer", nativeQuery = true)
    Integer getLastCustomerId();

}
