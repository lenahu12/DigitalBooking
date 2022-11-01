package com.proyecto.integrador.service;

import com.proyecto.integrador.login.Role;
import com.proyecto.integrador.login.User;
import com.proyecto.integrador.repository.RoleRepository;
import com.proyecto.integrador.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class UserServiceImplementation implements UserServiceInt, UserDetailsService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    //metodo para encontrar usuario y comparar permisos y contrasenas c usuario
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            log.error("Usuario no encontrado en la BDD");
            throw new UsernameNotFoundException("Usuario no encontrado en la BDD");
            }
                else{
                    log.info("Usuario encontrado en la BDD: {}", email);
            }
            Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
            user.getRoles().forEach(role -> {
                authorities.add(new SimpleGrantedAuthority(role.getName()));
            });
            return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),authorities);
    }

    @Override
    public User saveUser(User user) {
        log.info("Guardando nuevo user {} a la BDD", user.getName());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Collection<Role> roles = new ArrayList<>();
        roles.add(roleRepository.findByName(user.getRoles().stream().findFirst().get().getName()));
        user.setRoles(roles);
        return userRepository.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        log.info("Guardando  nuevo rol {} a la BDD", role.getName());
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String email, String roleName) {
        log.info("Agregando rol {} al user {}", roleName, email);
        User user = userRepository.findByEmail(email);
        Role role = roleRepository.findByName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public User getUser(String email) {
        log.info("Trayendo user {}", email);
        return userRepository.findByEmail(email);
    }

    @Override
    public List<User> getUsers() {
        log.info("Trayendo todos los users");
        return userRepository.findAll();
    }
}
