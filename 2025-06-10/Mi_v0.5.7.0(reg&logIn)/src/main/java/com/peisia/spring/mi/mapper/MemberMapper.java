package com.peisia.spring.mi.mapper;

//import org.apache.ibatis.annotations.Param;

import com.peisia.spring.mi.dto.MemberDto;
//import com.peisia.spring.mi.vo.GuestVO;

public interface MemberMapper {
	public void reg(MemberDto m);

	public MemberDto login(MemberDto m);
	
}

