package com.example.a0922i1projectmobilephone.controller;
import com.example.a0922i1projectmobilephone.entity.Customer;
import com.example.a0922i1projectmobilephone.service.customer_service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*",maxAge = 3600)
public class CustomerController {
    @Autowired
    private ICustomerService customerService;

    @RequestMapping(path = "/customer", method = RequestMethod.GET)
    public ResponseEntity<?> getAllCustomer(@RequestParam(defaultValue = "0") int page,
                                            @RequestParam(required = false) String option,
                                            @RequestParam(required = false) String search,
                                            @RequestParam(required = false) String numberPhone) {
        Page<Customer> customers = customerService.listCustomers(page, option, search, numberPhone);
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @RequestMapping(path = "/customer/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> findByIdCustomer(@PathVariable (required = false) int id){
        Customer customer = customerService.findById(id);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

}
