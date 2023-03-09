package com.app.services;

import java.util.List;
import java.util.Set;

import com.app.dto.DonarDto;
import com.app.pojos.Donar;

public interface DonarService {
	
	void setDonarDetails(Integer campId,Donar donar);

	List<DonarDto> getDonarByCampId(Integer campId);

}
