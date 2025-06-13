package com.peisia.spring.mi.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.peisia.spring.mi.dto.GuestDto;
import com.peisia.spring.mi.vo.GuestVO;

public interface GuestMapper {
	public int getCount();
	public int getCountSearch(String word);
	public ArrayList<GuestDto> getList(int limitIndex);
	public ArrayList<GuestDto> getListSearch(@Param("limitIndex") int limitIndex, @Param("word") String word);
	public GuestVO read(long bno);
	public void del(long bno);
	public void write(GuestVO gvo);
	public void modify(GuestVO gvo);
	
	
}

