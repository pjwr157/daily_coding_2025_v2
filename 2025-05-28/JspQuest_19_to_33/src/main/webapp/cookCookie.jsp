<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<% 
	Cookie cookieA = new Cookie("cookieA", "Apple");
	cookieA.setMaxAge(10);	// 초 단위. 
	//cookieA.setValue("Melone");
	response.addCookie(cookieA);
	
	
	Cookie cookieX = new Cookie("cookieX", "Grape");
	cookieX.setMaxAge(30);	// 초 단위.
	response.addCookie(cookieX);
	
	Cookie cookieEternal = new Cookie("cookieEternal", "안썩는쿠키");
// 	cookieX.setMaxAge(30);	// 초 단위. 1분
//유통기한을 안 정하면 세션처럼 브라우저 창이 켜있는동안 유지됨.
//탭끄는거 말고 ( 옆 탭 켜있으면 계속 유지됨 )
	response.addCookie(cookieEternal);
%>

쿠키 3개 구웠음<br>
쿠키 내용 확인은 <a href="tasteCookie.jsp">여기로!!!</a>


</body>
</html>



