<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<jsp:useBean id="test_bean" class="com.peisia.q23.Bean" scope="page" />

	<jsp:setProperty name="test_bean" property="name" /> <!-- name - cat -->
	<jsp:setProperty name="test_bean" property="number" />
	
	<jsp:getProperty name="test_bean" property="name" />
	<jsp:getProperty name="test_bean" property="number" />
	
	<!-- 위 이용해서 객체 집어넣거나 뺴는 처리, 내장객체 사용해서 집어넣는 작업, 자바빈이라는 클래쓰 구격으로 만드는게 강제가된다. -->

</body>
</html>