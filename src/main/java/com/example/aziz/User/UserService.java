package com.example.aziz.User;


import com.example.aziz.Role.Role;
import com.example.aziz.Role.RoleRepository;
import com.example.aziz.Security.SecurityBeansConfiguration;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

   final private UserRepository userRepository;

    final private RoleRepository roleRepository;
   final private PasswordEncoder passwordEncoder;


    public User saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }


    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }


    public Role addRole(Role role) {

        return roleRepository.save(role);
    }


    public User addRoleToUser(String username, String rolename) {

        User usr=userRepository.findByUsername(username);
        Role role=roleRepository.findByRole(rolename);
        usr.getRoles().add(role);

       userRepository.save(usr);

        return usr;
    }


    public List<User> findAllUsers()
    {
        return userRepository.findAll();

    }
}
