<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	String x = request.getParameter("id_save_check");


	if(x!=null){
		if(x.equals("on")){
			String savedId = request.getParameter("id");
			//쿠키 굽기
			Cookie c = new Cookie("saved_id",savedId);
			c.setMaxAge(60*60*24*7);
			response.addCookie(c);
		}
	}
	
// 	if(x!=null && x.equals("on")){
// 		String savedId = request.getParameter("id");
// 		//쿠키 굽기
// 		Cookie c = new Cookie("saved_id",savedId);
// 		c.setMaxAge(60*60*24*7);
// 		response.addCookie(c);
// 	}
	
	//앞페이지 보내기
	response.sendRedirect("index.html");
%>