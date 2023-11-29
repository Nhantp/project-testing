package com.example.a0922i1projectmobilephone.service.loginImpl;

import com.example.a0922i1projectmobilephone.entity.Role;
import com.example.a0922i1projectmobilephone.repository.login_repo.IRoleRepository;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements IRoleService {
    final IRoleRepository roleRepository;

    public RoleServiceImpl(IRoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Role findByRoleName(String roleName) {
        return roleRepository.findByRoleName(roleName);
    }
}
