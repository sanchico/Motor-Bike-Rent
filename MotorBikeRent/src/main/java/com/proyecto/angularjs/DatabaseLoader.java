package com.proyecto.angularjs;


import com.proyecto.angularjs.models.MotorBike;
import com.proyecto.angularjs.models.User;
import com.proyecto.angularjs.repositories.MotorBikeRepository;
import com.proyecto.angularjs.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private UserRepository userRepository;
	private MotorBikeRepository motorBikeRepository;

	@Autowired
	public DatabaseLoader(UserRepository userRepository, MotorBikeRepository motorBikeRepository) {
		this.userRepository = userRepository;
		this.motorBikeRepository= motorBikeRepository;
	}
	
	

	@Override
	public void run(String... strings) throws Exception {
		User admin = this.userRepository.save(new User("admin", "admin", "ROLE_ADMIN"));
        User demo = this.userRepository.save(new User("user", "user", "ROLE_USER"));
        MotorBike moto = this.motorBikeRepository.save(new MotorBike("Yamaha", "S67574",(double) 0,(double)0, true));
		SecurityContextHolder.clearContext();
	}
	
}