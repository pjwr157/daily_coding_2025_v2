package com.peisia.spring.mi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.peisia.spring.mi.dto.CardDto;
import com.peisia.spring.mi.service.CardService;

import lombok.Setter;

@CrossOrigin(origins = "http://localhost:3000") // 3000포트에서의 요청 허용
@RequestMapping("/card/*")
@RestController
public class CardController {
	
	@Setter(onMethod_ = @Autowired)
	private CardService service;	
	
	@RequestMapping("/getMyCards")			
	public ArrayList<CardDto> getMyCards() {
		ArrayList<CardDto> n = service.getList();
		System.out.println("==== 총 카드 수:"+n.size());
		
		return n;
	}
	
				
	@RequestMapping("/partyAdd")			
	public void partyAdd(@RequestBody CardDto c) {
		service.partyAdd(c);
		System.out.println("==== 데이터 잘 오나?: job:"+c.getJob());
		System.out.println("==== 데이터 잘 오나?: grade:"+c.getGrade());
	}				
}
