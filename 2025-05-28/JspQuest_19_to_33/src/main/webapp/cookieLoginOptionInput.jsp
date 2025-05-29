<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>


<form action="cookieLoginOptionProc.jsp">
	아이디 저장<input type="checkbox" name="id_save_check">
	<input name="id" value="${cookie.saved_id.value}">
	<input name="pw">
	<input type="submit" value="로그인">
</form>


</body>
</html>



