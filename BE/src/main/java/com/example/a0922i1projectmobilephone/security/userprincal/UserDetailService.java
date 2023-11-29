package com.example.a0922i1projectmobilephone.security.userprincal;

import com.example.a0922i1projectmobilephone.entity.User;
import com.example.a0922i1projectmobilephone.repository.login_repo.IUserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserDetailService implements UserDetailsService {
    final IUserRepository userRepository;

    public UserDetailService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("Không tìm thấy username " + username + "trong data");
        }
        return UserPrinciple.build(user);
    }
}
