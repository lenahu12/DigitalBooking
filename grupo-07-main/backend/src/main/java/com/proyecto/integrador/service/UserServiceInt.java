package com.proyecto.integrador.service;

import com.proyecto.integrador.login.Role;
import com.proyecto.integrador.login.User;

import java.util.List;

public interface UserServiceInt {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String email, String roleName);
    User getUser(String email);
    List<User>getUsers();
}
