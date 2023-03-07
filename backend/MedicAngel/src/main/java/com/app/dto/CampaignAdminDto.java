package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.BenificaryOther;
import com.app.pojos.BenificaryRelative;
import com.app.pojos.BenificaryUser;
import com.app.pojos.User;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CampaignAdminDto {
	private Integer id;
    private String createdBy;
    private String name;
    private String email;
    private String title;
    private double amount;
    private LocalDate endDate;
    private String ailment;
    private User ob;
    private BenificaryUser benificaryUser;
    private BenificaryRelative benificaryRelative;
    private BenificaryOther benificaryOther;
}
