package com.example.a0922i1projectmobilephone.service.customer_service;
import com.example.a0922i1projectmobilephone.entity.Customer;
import com.example.a0922i1projectmobilephone.repository.customer_repo.IRepositoryCustomer;
import com.example.a0922i1projectmobilephone.utils.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;



@Service
public class CustomerServiceImpl implements ICustomerService {
    private final IRepositoryCustomer iRepositoryCustomer;

    public CustomerServiceImpl(IRepositoryCustomer iRepositoryCustomer) {
        this.iRepositoryCustomer = iRepositoryCustomer;
    }

    @Override
    public void save(Customer customer) {
        iRepositoryCustomer.save(customer);
    }

    @Override
    public Customer findById(int id) {
        return iRepositoryCustomer.findById(id);
    }


    @Override
    public Page<Customer> listCustomers(int page, String option, String search, String numberPhone) {
        int isAll = 0;

        if (StringUtils.isEmpty(option) && StringUtils.isEmpty(numberPhone) ) {
            isAll = 1;

        }
        if(StringUtils.isEmpty(numberPhone)){
            numberPhone = null;
        }
        return iRepositoryCustomer.searchCustomer(Pageable.ofSize(8).withPage(page), option, search, numberPhone, isAll);
    }


}

