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
	Cat cat = new Cat();

	Bean test_bean = new Bean();
	
	String name = request.getParameter("name");
	
	String n = request.getParameter("number");
	
	test_bean.name = name;
	
	
%>


	<jsp:useBean id="test_bean" class="com.peisia.q23.Bean" />

	<jsp:setProperty name="test_bean" property="name" /> <!-- name - cat -->
	
	
	<jsp:setProperty name="test_bean" property="number" />
	
	<jsp:getProperty name="test_bean" property="name" />
	<jsp:getProperty name="test_bean" property="number" />
	

</body>
</html>