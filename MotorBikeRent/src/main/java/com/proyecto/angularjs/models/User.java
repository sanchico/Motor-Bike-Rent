package com.proyecto.angularjs.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.Data;
import lombok.ToString;

@Data
@ToString(exclude = "password")
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name="User")
public class User implements Serializable {

    private static final long serialVersionUID = 9052727407992747243L;

	public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

	private @Id @GeneratedValue Long id_user;

	@Column(name="name")
    private String name;
    
    private String role;

    private @JsonIgnore String password;

	protected User() {
    }

	public User(String name, String password, String role) {
        this.name = name;
        this.setPassword(password);
        this.role = role;
    }
    
    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

	public void setPassword(String password) {
		this.password = PASSWORD_ENCODER.encode(password);
	}

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @return the id_user
     */
  
    public Long getId_user() {
		return id_user;
	}
    /**
     * @return the role
     */
    public String getRole() {
        return role;
    }

   

	/**
     * @param role the role to set
     */
    public void setRole(String role) {
        this.role = role;
    }
}