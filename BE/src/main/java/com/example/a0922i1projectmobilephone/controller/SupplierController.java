package com.example.a0922i1projectmobilephone.controller;

import com.example.a0922i1projectmobilephone.dto.supplier.SupplierDtoCreateUpdate;
import com.example.a0922i1projectmobilephone.entity.Supplier;
import com.example.a0922i1projectmobilephone.service.supplierService.list.IListSupplierService;
import com.example.a0922i1projectmobilephone.validate.SupplierValidate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;

import com.example.a0922i1projectmobilephone.service.supplierService.create.ICreateSupplierService;
import com.example.a0922i1projectmobilephone.service.supplierService.update.IUpdateSupplierService;


import java.util.Map;

import java.util.Objects;
import java.util.Optional;


@RestController
@RequestMapping("/api/suppliers")
public class SupplierController {
    @Autowired
    IListSupplierService supplierService;
    @Autowired
    ICreateSupplierService createSupplierService;
    @Autowired
    IUpdateSupplierService updateSupplierService;
    @Autowired
    SupplierValidate supplierValidate;

    @GetMapping("/paged")
    public ResponseEntity<Page<Supplier>> getAllSupplier(
            @RequestParam(defaultValue = "1") int pageNo,
            @RequestParam(defaultValue = "8") int pageSize) {
        Page<Supplier> page = supplierService.findAll(pageNo, pageSize);
        return new ResponseEntity<>(page, HttpStatus.OK);
    }


//    @GetMapping("/sort/id")
//    public ResponseEntity<Page<Supplier>> sortByIdSupplier(
//            @RequestParam(defaultValue = "1") int pageNo,
//            @RequestParam(defaultValue = "8") int pageSize,
//            @RequestParam int flag) {
//        Page<Supplier> page = supplierService.sortBySupplierId(flag,pageNo, pageSize);
//        return new ResponseEntity<>(page, HttpStatus.OK);
//    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteSupplier(@PathVariable Integer id) {
        if (!supplierService.existsById(id)) {
            return new ResponseEntity<>("Nhà cung cấp không tồn tại", HttpStatus.NOT_FOUND);
        }
        supplierService.deleteById(id);
        return new ResponseEntity<>("Đã xóa nhà cung cấp thành công", HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Supplier>> searchSupplier(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String address,
            @RequestParam(required = false) String phone,
            @RequestParam(defaultValue = "1") int pageNo,
            @RequestParam(defaultValue = "8") int pageSize) {
        Page<Supplier> page = supplierService.searchSuppliers(name, address, phone, pageNo, pageSize);
        return new ResponseEntity<>(page, HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Page<Supplier>> searchSupplier(
            Model model,
            @RequestParam(value = "name", required = false) Optional<String> nameParam,
            @RequestParam(value = "address", required = false) Optional<String> addressParam,
            @RequestParam(value = "phone", required = false) Optional<String> phoneParam,
            @RequestParam(value = "pageNo", required = false) Optional<Integer> page,
            @RequestParam(value = "pageSize", required = false) Optional<Integer> size,
            @RequestParam(value = "sort", required = false) Optional<String> sort,
            @RequestParam(value = "direction", required = false) Optional<Boolean> direction) {
        Integer currentPage = page.orElse(1);
        Integer pageSize = size.orElse(8);
        String name = nameParam.orElse(null);
        String address = addressParam.orElse(null);
        String phone = phoneParam.orElse(null);
        name = "".equals(name) ? null : name;
        address = "".equals(address) ? null : address;
        phone = "".equals(phone) ? null : phone;
        String sortField = sort.orElse("supplier_id");
        sortField = "".equals(sortField) ? "supplier_id" : sortField;
        Boolean directionSort = direction.orElse(false);
        model.addAttribute("currentPage", currentPage);
        Page<Supplier> suppliers;
        if (directionSort) {
            suppliers = supplierService.getSuppliers(name,address,phone, PageRequest.of(currentPage - 1, pageSize, Sort.by(sortField).ascending()));
        } else {
            suppliers = supplierService.getSuppliers(name,address,phone, PageRequest.of(currentPage - 1, pageSize, Sort.by(sortField).descending()));
        }
        if (suppliers.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(suppliers, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> addSupplier(
            @RequestBody SupplierDtoCreateUpdate supplier
    ){
        if (Objects.equals(supplier.getSupplierName(), "")
                || Objects.equals(supplier.getSupplierPhone(), "")
                || Objects.equals(supplier.getSupplierEmail(), "")
                || Objects.equals(supplier.getSupplierAddress(), "")){
            return new ResponseEntity<>(supplier, HttpStatus.BAD_REQUEST);

        }
        Map<String, String> errordata = supplierValidate.checkValidate(createSupplierService.checkData(supplier));
        if (!errordata.isEmpty()){
            return new ResponseEntity<>(errordata, HttpStatus.BAD_REQUEST);
        }else {
            createSupplierService.addNewSupplier(supplier);
            return new ResponseEntity<>(supplier, HttpStatus.CREATED);
        }

    }
    @GetMapping ("/edit/{supplier_id}")
    public ResponseEntity<Supplier> editSupplier(
            @PathVariable int supplier_id){
        Supplier supplier = updateSupplierService.findById(supplier_id);
        return new ResponseEntity<>(supplier, HttpStatus.OK);
    }
    @PostMapping("/update")
    public ResponseEntity<?> updateSuppier(
            @Validated @RequestBody SupplierDtoCreateUpdate supplier,
            BindingResult bindingResult
    ){
        if (Objects.equals(supplier.getSupplierName(), "")
                || Objects.equals(supplier.getSupplierPhone(), "")
                || Objects.equals(supplier.getSupplierEmail(), "")
                || Objects.equals(supplier.getSupplierAddress(), "")){
            return new ResponseEntity<>(supplier, HttpStatus.BAD_REQUEST);

        }
        Map<String, String> errordata = supplierValidate.checkValidate(updateSupplierService.checkData(supplier));
        if (!errordata.isEmpty()){
            return new ResponseEntity<>(errordata, HttpStatus.BAD_REQUEST);
        }else {
            updateSupplierService.updateSupplier(supplier);
            return new ResponseEntity<>(supplier, HttpStatus.CREATED);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Supplier> findById(@PathVariable Integer id){
        return new ResponseEntity<>(this.supplierService.findById(id).get(), HttpStatus.OK);
    }

}
