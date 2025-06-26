package com.peisia.spring.mi.service;

import com.peisia.spring.mi.dto.WealthDto;

public interface ShopService {
	public WealthDto getWealth();
	public void buyGold();
	public void buyDice();
	public void payGold();
}
