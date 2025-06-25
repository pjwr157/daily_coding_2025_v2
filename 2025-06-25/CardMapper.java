package com.peisia.spring.mi.mapper;

import java.util.ArrayList;

import com.peisia.spring.mi.dto.CardDto;

public interface CardMapper {
	public ArrayList<CardDto> getList();
	public void addCard(CardDto c);
	public void partyAdd(CardDto c);
}
