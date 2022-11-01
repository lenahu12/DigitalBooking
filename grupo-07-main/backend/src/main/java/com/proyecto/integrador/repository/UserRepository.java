package com.proyecto.integrador.repository;

import com.proyecto.integrador.login.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value="SELECT * FROM User u WHERE u.email = ?1", nativeQuery = true)
    User findByEmail(String email);
    //User findByUsername(String username);
}
