package com.app.pojos;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "donar")
@Getter
@Setter
@ToString
public class Donar extends BaseEntity {
	
	@NotBlank(message = "First can't be blank")
	@Column(length = 45)
	private String name;
	
	@NotBlank(message = "Email can't be blank")
	@Email
	private String email;
	
	private String mobileNo;
	
	@JsonIgnore
	@ManyToMany(mappedBy = "donars")
	private Set<Campaign> campaigns;
	
	

}
