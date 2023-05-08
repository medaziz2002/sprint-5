package com.example.aziz.Auth;


import com.example.aziz.Security.JwtService;
import com.example.aziz.User.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        System.out.println("au debut de la service");
        System.out.println(request.getUsername());
        System.out.println(request.getPassword());
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        var user = userRepository.findByUsername(request.getUsername());
        var claims = new HashMap<String, Object>();
        claims.put("role", user.getRoles());
        var jwtToken = jwtService.generateToken(user, claims);
        System.out.println("le token genere"+jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .username(user.getUsername())
                .id(user.getUser_id())
                .build();
    }
}
