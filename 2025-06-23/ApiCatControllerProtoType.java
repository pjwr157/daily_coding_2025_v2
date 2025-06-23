package com.peisia.spring.mi.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.peisia.spring.mi.service.Cat;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Log4j
@RequestMapping("/api/*")
@AllArgsConstructor
@RestController
public class ApiCatController {
	@GetMapping("/catOne")
	public Cat getCatOne() {
		Cat cat = new Cat();
		cat.setName("야옹이");
		cat.setAge(5);
		return cat;
	}	
	@GetMapping("/catTwo")
	public Cat getCatTwo() {
		Cat cat = new Cat();
		cat.setName("떼껄룩");
		cat.setAge(10);
		return cat;
	}
	
	class X {
		public String a = "a";
		public String b = "b";
	}
	class Xs {
		public String a = "a";
		public ArrayList<String> as= new ArrayList<>();
		Xs(){
			as.add("야옹이");
			as.add("개");
		}
	}
	
	@GetMapping("/x")
	public X x() {
		return new X();
	}
	
	@GetMapping("/xs")
	public Xs xs() {
		return new Xs();
	}
	
	
}