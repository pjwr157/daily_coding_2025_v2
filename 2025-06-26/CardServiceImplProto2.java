package com.peisia.spring.mi.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peisia.spring.mi.dto.CardDto;
import com.peisia.spring.mi.mapper.CardMapper;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Log4j
@Service
//@AllArgsConstructor
public class CardServiceImpl implements CardService{

	@Setter(onMethod_ = @Autowired)
	private CardMapper mapper;

	@Override
	public ArrayList<CardDto> getList() {
		ArrayList<CardDto> n = mapper.getList();
		return n;
	}

	@Override
	public void addCard(CardDto c) {
		mapper.addCard(c);
	}

	@Override
	public void partyAdd(CardDto c) {
		mapper.partyAdd(c);
	}

	@Override
	public ArrayList<CardDto> getParty() {
		ArrayList<CardDto> n = mapper.getParty();
		return n;		
	}	
	@Override
	public void clearParty() {
		mapper.clearParty();
	}	
}