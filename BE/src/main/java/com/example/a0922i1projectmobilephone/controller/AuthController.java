package com.example.a0922i1projectmobilephone.controller;


import com.example.a0922i1projectmobilephone.dto.reponse.JwtResponse;
import com.example.a0922i1projectmobilephone.dto.reponse.ReponseMessage;
import com.example.a0922i1projectmobilephone.dto.request.ChangePassword;
import com.example.a0922i1projectmobilephone.dto.request.SignInForm;
import com.example.a0922i1projectmobilephone.dto.request.SignUpForm;
import com.example.a0922i1projectmobilephone.entity.Employee;
import com.example.a0922i1projectmobilephone.entity.Role;
import com.example.a0922i1projectmobilephone.entity.RoleName;
import com.example.a0922i1projectmobilephone.entity.User;
import com.example.a0922i1projectmobilephone.security.jwt.JwtProvider;
import com.example.a0922i1projectmobilephone.security.userprincal.UserPrinciple;
import com.example.a0922i1projectmobilephone.service.loginImpl.EmployeeServiceImpl;
import com.example.a0922i1projectmobilephone.service.loginImpl.RoleServiceImpl;
import com.example.a0922i1projectmobilephone.service.loginImpl.UserServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

@RequestMapping("/api/auth")
@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class AuthController {
    @Autowired
    UserServiceImpl userService;
    @Autowired
    RoleServiceImpl roleService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    EmployeeServiceImpl employeeService;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtProvider jwtProvider;


    @PostMapping("/signUp")
    public ResponseEntity<?> register(@RequestBody SignUpForm signUpForm) {
        if (userService.existsByUsername(signUpForm.getUser().getUsername())) {
            return new ResponseEntity<>(new ReponseMessage("user đã tồn tại"), HttpStatus.OK);
        }
        if (userService.existsByEmail(signUpForm.getUser().getEmail())) {
            return new ResponseEntity<>(new ReponseMessage("email đã tồn tại"), HttpStatus.OK);
        }
        //Xử lý Role
        Set<String> strRoles = signUpForm.getRole();
        Set<Role> roles = new HashSet<>();
        Iterator<String> iterator = strRoles.iterator();
        if (iterator.hasNext()) {
            String firstRole = iterator.next();
            if (!firstRole.isEmpty()) {
                switch (firstRole.toUpperCase()) {
                    case "ADMIN":
                        Role adminRole = roleService.findByRoleName(RoleName.ADMIN.toString());
                        roles.add(adminRole);
                        break;
                    case "BUSINESS":
                        Role businessRole = roleService.findByRoleName(RoleName.BUSINESS.toString());
                        roles.add(businessRole);
                        break;
                    case "STORAGE":
                        Role storageRole = roleService.findByRoleName(RoleName.STORAGE.toString());
                        roles.add(storageRole);
                        break;
                    case "SALE":
                        Role saleRole = roleService.findByRoleName(RoleName.SALE.toString());
                        roles.add(saleRole);
                        break;
                }
            }
        }
        Employee employee = new Employee(
                signUpForm.getNameEmployee(),
                signUpForm.getAddressEmployee(),
                signUpForm.getBirthdayEmployee(),
                signUpForm.getPositionEmployee(),
                signUpForm.getUser().getUsername(),
                signUpForm.getUser().getEmail(),
                signUpForm.getUser().getAvatar(),
                passwordEncoder.encode(signUpForm.getUser().getPassword())
        );
        BeanUtils.copyProperties(signUpForm, employee);
        employee.getUser().setPassword(passwordEncoder.encode(signUpForm.getUser().getPassword()));
        employee.getUser().setRole(roles);
        employeeService.saveEmployee(employee);
        return new ResponseEntity<>(new ReponseMessage("Tạo account thành công!!!"), HttpStatus.OK);
    }


    @PostMapping("/signIn")
    public ResponseEntity<?> login(@RequestBody SignInForm signInForm) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(signInForm.getUsername(), signInForm.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String token = jwtProvider.createToken(authentication);
            UserPrinciple UserPrinciple = (UserPrinciple) SecurityContextHolder.getContext()
                    .getAuthentication()
                    .getPrincipal();
            return ResponseEntity.ok(
                    new JwtResponse(
                            token,
                            UserPrinciple.getUsername(),
                            UserPrinciple.getAuthorities()
                    )
            );
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Sai tên người dùng hoặc mật khẩu");
        }
    }


    @PostMapping("/checkCurrentPassword")
    public ResponseEntity<?> changePassword(@RequestBody ChangePassword changePassword) {
        // Kiểm tra tài khoản có tồn tại hay không
            User user = userService.findByUsername(changePassword.getUsername());
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Tài khoản không tồn tại");
        }
        if (BCrypt.checkpw(changePassword.getPresentPassword(), user.getPassword())) {
            System.out.println("It matches");
            String newPassword = passwordEncoder.encode(changePassword.getConfirmPassword());
            user.setPassword(newPassword);
            userService.save(user);
            return new ResponseEntity<>(new ChangePassword(
                    changePassword.getUsername(), "", ""), HttpStatus.OK);
        } else {
            System.out.println("It does not match");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Mật khẩu hiện tại không đúng");

        }
    }

    @GetMapping("/checkExistingUsername")
    public boolean checkExistingUsername(@RequestParam String username) {
        return userService.existsByUsername(username);
    }

    @GetMapping("/checkExistingEmail")
    public boolean checkExistingEmail(@RequestParam String email) {
        return userService.existsByEmail(email);
    }


    @GetMapping("/inforEmployee")
    public ResponseEntity<Employee> getEmployeeForLoggedInUser(@RequestParam String username) {
        // Dựa vào username, truy vấn thông tin người dùng từ cơ sở dữ liệu
        Employee employee = employeeService.findByUser_Username(username);
        // Trả về thông tin người dùng
        return ResponseEntity.ok(employee);
    }
}
