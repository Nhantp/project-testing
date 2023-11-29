package com.example.a0922i1projectmobilephone.service.loginImpl;

import com.example.a0922i1projectmobilephone.entity.Provider;
import com.example.a0922i1projectmobilephone.entity.User;
import com.example.a0922i1projectmobilephone.repository.login_repo.IUserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {
    final IUserRepository userRepository;

    public UserServiceImpl(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User findByUsername(String name) {
        return userRepository.findByUsername(name);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public Boolean existsByUsername(String userName) {
        return userRepository.existsByUsername(userName);
    }

    @Override
    public Boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public boolean checkCurrentPassword(String username, String presentPassword) {
        return userRepository.checkCurrentPassword(username, presentPassword);
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public void changePassword(String username, String newPass) {
        userRepository.changePassword(username,newPass);
    }

    public void processOAuthPostLogin(String username) {
        User existUser = userRepository.findByUsername(username);
        if (existUser == null) {
            User newUser = new User();
            newUser.setUsername(username);
            newUser.setProvider(Provider.GOOGLE);
            userRepository.save(newUser);
        }
    }
}
