package com.peisia.spring.mi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peisia.spring.mi.mapper.CardMapper;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Log4j
@Service
//@AllArgsConstructor
public class CardServiceImpl implements CardService{

	@Setter(onMethod_ = @Autowired)	//CardMapper와 연결됨
	private CardMapper mapper;		//의존성 주입 by @Autowired

//	@Autowired	//자동으로 만드는 setter 메서드 위에 @Autowired를 붙여라 by onMethod
//	public void setMapper(CardMapper mapper) {
//	    this.mapper = mapper;
//	}
	
	@Override
	public int getList() {
		int n = mapper.getList();
		return n;
	}	
}