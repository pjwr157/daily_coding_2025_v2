package com.peisia.spring.mi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.peisia.c.util.Dice;

@RequestMapping("/api/*")
@RestController
public class ControllerApi {
	class Card{
		String job;
		String grade;
		public Card(String job, String grade) {
			this.job = job;
			this.grade = grade;
		}
	}
	
	@GetMapping("/gacha")
	public Card gacha() {
		String jobs[] = {"전사","마법사","궁수","도적","사제"};
		String grade[] = {"SSR","SR","S","R","H","N"};				
		return new Card(jobs[Dice.roll(0,4)],grade[Dice.roll(0,5)]);
	}
}