package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.BenificaryUser;

public interface BenificaryUserRepository extends JpaRepository<BenificaryUser, Integer> {
   
}
