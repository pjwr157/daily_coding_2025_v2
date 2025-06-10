package com.peisia.spring.mi.service;


import com.peisia.spring.mi.dto.MemberDto;

public interface MemberService {
	public void reg(MemberDto m);

	public String login(MemberDto m);
}
