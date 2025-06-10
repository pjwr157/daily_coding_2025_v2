package com.peisia.spring.mi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peisia.spring.mi.dto.MemberDto;
import com.peisia.spring.mi.mapper.MemberMapper;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Log4j
@Service
//@AllArgsConstructor (추천됨)
public class MemberServiceImpl implements MemberService{

	@Setter(onMethod_ = @Autowired)
	private MemberMapper mapper;

	@Override
	public void reg(MemberDto m) {
		mapper.reg(m);
	}

	@Override
	public String login(MemberDto m) {
		MemberDto x = mapper.login(m);
		if(x != null) {
			//로그인 성공
			return x.getId();
		}
		return null;
	}
	
}


