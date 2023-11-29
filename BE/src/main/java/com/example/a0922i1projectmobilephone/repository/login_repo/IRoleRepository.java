package com.example.a0922i1projectmobilephone.repository.login_repo;

import com.example.a0922i1projectmobilephone.entity.Role;
import com.example.a0922i1projectmobilephone.entity.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IRoleRepository extends JpaRepository<Role, Integer> {
    @Query(value = "SELECT r.role_id,r.role_name FROM role r WHERE r.role_name = :roleName", nativeQuery = true)
    Role findByRoleName(@Param("roleName") String roleName);
}
