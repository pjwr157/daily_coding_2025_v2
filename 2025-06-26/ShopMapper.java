package com.peisia.spring.mi.mapper;

import com.peisia.spring.mi.dto.WealthDto;

public interface ShopMapper {
	public WealthDto getWealth();
	public void buyGold();
	public void buyDice();	
	public void payGold();
}
