package com.example.a0922i1projectmobilephone.repository.login_repo;

import com.example.a0922i1projectmobilephone.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IUserRepository extends JpaRepository<User, Integer> {
    @Query(value = "SELECT * FROM User u WHERE u.user_name = :username", nativeQuery = true)
    User findByUsername(@Param("username") String username);

    @Query(value = "SELECT * FROM User u WHERE u.email = :email", nativeQuery = true)
    User findByEmail(@Param("email") String email);

    @Query(value = "SELECT CASE WHEN COUNT(u) > 0 THEN true ELSE false END FROM User u WHERE u.username = :username")
    boolean existsByUsername(@Param("username") String username);

    @Query(value = "SELECT CASE WHEN COUNT(u) > 0 THEN true ELSE false END FROM User u WHERE u.email = :email")
    boolean existsByEmail(@Param("email") String email);

    @Query(value = "SELECT CASE WHEN u.password = :presentPassword AND u.username = :username THEN true ELSE false END FROM User u")
    boolean checkCurrentPassword(@Param("username") String username, @Param("presentPassword") String presentPassword);


    User save(User user);

    @Transactional
    @Modifying
    @Query(value = "UPDATE User u SET u.password = :pass WHERE u.username = :username")
    void changePassword(@Param("username") String username, @Param("pass") String pass);

}
