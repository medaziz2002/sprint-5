package com.example.aziz;

import com.example.aziz.Role.Role;
import com.example.aziz.User.User;
import com.example.aziz.User.UserService;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RequiredArgsConstructor
public class AzizApplication {

	private final UserService userService;


	public static void main(String[] args) {
		SpringApplication.run(AzizApplication.class, args);
	}


/*
	@PostConstruct
	void init_users() {
		//ajouter les rôles
		userService.addRole(new Role(null,"ADMIN"));
		userService.addRole(new Role(null,"USER"));
		//ajouter les users
		userService.saveUser(new User(null,"admin","123",true,null));
		userService.saveUser(new User(null,"aziz","123",true,null));
		userService.saveUser(new User(null,"yassine","123",true,null));
		//ajouter les rôles aux users
		userService.addRoleToUser("admin", "ADMIN");
		userService.addRoleToUser("admin", "USER");
		userService.addRoleToUser("aziz", "USER");
		userService.addRoleToUser("yassine", "USER");}
*/
}
