package com.peisia.spring.mi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.peisia.spring.mi.dto.CatDto;
import com.peisia.spring.mi.dto.SkillDto;

@RestController
@RequestMapping("/api")
public class ApiController {
	@GetMapping("/cat")
	public CatDto getCat() {
		CatDto catDto = new CatDto("야옹이", 7);
		catDto.hobby.add("식빵굽기");
		catDto.hobby.add("잠자기");
		catDto.skills.add(new SkillDto("할퀴기", 2));
		catDto.skills.add(new SkillDto("백덤블링", 3));
		catDto.skills.add(new SkillDto("달리기", 5));

		return catDto;
	}
}