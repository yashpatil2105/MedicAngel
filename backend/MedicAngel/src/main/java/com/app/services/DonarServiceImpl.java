package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.app.dto.DonarDto;
import com.app.pojos.Campaign;
import com.app.pojos.Donar;
import com.app.repository.CampaignRepository;
import com.app.repository.DonarRepository;


@Transactional
@Service
public class DonarServiceImpl implements DonarService {
	
    @Autowired
    private DonarRepository donarRepo;
	
	@Autowired
	private CampaignRepository campaignRepo;
	
	@Override
	public void setDonarDetails(Integer campId,Donar donar){
		Campaign campaign = campaignRepo.findById(campId).orElseThrow(() -> new UsernameNotFoundException("Invalid Campaign ID"));
		campaign.setCurrentAmount(campaign.getCurrentAmount()+donar.getAmount());
		campaign.setNoOfDonar(campaign.getNoOfDonar()+1);
		campaign.getDonars().add(donar);
		donar.getCampaigns().add(campaign);
        donarRepo.save(donar);
	}

	@Override
	public List<DonarDto> getDonarByCampId(Integer campId) {
		Campaign campaign = campaignRepo.findById(campId).orElseThrow(() -> new UsernameNotFoundException("Invalid Campaign ID"));
		return ObjectMapperUtils.mapAll(campaign.getDonars(),DonarDto.class);
	}

}
