package com.proyecto.integrador.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.proyecto.integrador.service.UserServiceImplementation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@Slf4j
public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;

    public CustomAuthenticationFilter (AuthenticationManager authenticationManager){
        this.authenticationManager = authenticationManager;
    }

    private UserServiceImplementation userServiceImplementation;

    public void setUserServiceImplementation(UserServiceImplementation userServiceImplementation){
        this.userServiceImplementation = userServiceImplementation;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        //podemos ver en los logs cuando el user quiere acceder
        log.info(" El Usuario es: {}", email); log.info("La Contrasena es: {}", password);
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email, password);
        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) throws IOException, ServletException {
        User user = (User) authentication.getPrincipal();
        com.proyecto.integrador.login.User user2 = userServiceImplementation.getUser(user.getUsername());
        //que algoritmo usamos
        Algorithm algorithm = Algorithm.HMAC256("sectet".getBytes());
        //creamos el Token
        Map<String, Object> moreInfo = new HashMap<>();
        moreInfo.put("surname", user2.getSurname());
        moreInfo.put("name", user2.getName());
        moreInfo.put("id",user2.getId());
        moreInfo.put("email",user2.getEmail());
        String access_token = JWT.create()
                .withPayload(moreInfo)
                //cuando expira
                .withExpiresAt(new Date(System.currentTimeMillis() + 10*60*1000))
                //desde que URL/endpoint se creo
                .withIssuer(request.getRequestURL().toString())
                //que Rol tiene el usuario
                .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                //firma del algoritmo
                .sign(algorithm);

        //si lo quiero en el header :
        //response.setHeader("access_token", access_token);

        com.proyecto.integrador.login.User user1 = userServiceImplementation.getUser(user.getUsername());
        // me devuelve en formato JSON el token
        Map<String, String> token = new HashMap<>();
        token.put("access_token", access_token);
        //token.put("name", user1.getName());
        //token.put("surname", user1.getSurname());
        //token.put("city", user1.getCity());
        //token.put("email", user1.getEmail());
        response.setContentType(APPLICATION_JSON_VALUE);
        new ObjectMapper().writeValue(response.getOutputStream(), token);
    }
}
