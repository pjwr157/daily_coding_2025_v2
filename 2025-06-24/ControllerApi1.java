package com.peisia.spring.mi.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:3000") // 3000포트에서의 요청 허용
@RequestMapping("/api/*")
@RestController
public class ControllerApi {
	class Card {
		String job;
		String grade;

		public Card(String job, String grade) {
			this.job = job;
			this.grade = grade;
		}
	}

	@GetMapping("/gacha")
	public Card gacha() {
		return new Card("전사", "SSR");
	}

}