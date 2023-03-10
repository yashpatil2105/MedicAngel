package com.app.dto;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CampaignDto  {
	
	private Integer id;

	private double amount;

	private double currentAmount;

	private LocalDate endDate;

	private String title;

	private boolean active;

	private String hospitalName;

	private String cityOfHospital;

	private String ailment;
	
	private String imagePath;

	private int noOfDonar;
	
   
}
