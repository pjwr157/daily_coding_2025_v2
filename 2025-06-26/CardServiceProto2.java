package com.peisia.spring.mi.service;

import java.util.ArrayList;

import com.peisia.spring.mi.dto.CardDto;

public interface CardService {
	public ArrayList<CardDto> getList();
	public void addCard(CardDto c);
	public void partyAdd(CardDto c);
	public ArrayList<CardDto> getParty();
	public void clearParty();
}
