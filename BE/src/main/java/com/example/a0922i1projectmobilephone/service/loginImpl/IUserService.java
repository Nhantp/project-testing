package com.example.a0922i1projectmobilephone.service.loginImpl;

import com.example.a0922i1projectmobilephone.entity.User;

public interface IUserService {
    User findByUsername(String name);

    User findByEmail(String email);

    Boolean existsByUsername(String userName);

    Boolean existsByEmail(String email);

    boolean checkCurrentPassword(String username, String presentPassword);

    User save(User user);

    void changePassword(String username, String newPass);
}
