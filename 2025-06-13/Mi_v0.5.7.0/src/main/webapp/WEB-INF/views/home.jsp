<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
	<h1>Hello world!</h1>

	<P>The time on the server is ${serverTime}.</P>
	<a href="test/dog">cat링크</a>
	<a href="test/updateVisitantCount">updateVisitantCount</a>
	<a href="test/insertDoodle">insertDoodle링크</a>
	<a href="test/delTest">delTest</a>
	<a href="/guest/getList">방명록</a>
	<hr>
	<a href="/test/x">@RequestParam 테스트 - 케이스 - 에러</a>
	<hr>
	<a href="/test/x?n=1">@RequestParam 테스트 - 케이스 - 성공</a>
	<a href="/test/y">@RequestParam 테스트 - 케이스 - 얘도 에러 안남</a>
	<hr>
	<a href="/test/y?n=1">@RequestParam 테스트 - 케이스 - 성공</a>
	<hr>
	<a href="/test/jstl">jstl</a>
	<hr>

	<a href="/member/reg">회원가입</a>
	<hr>

	<form action="/member/login">
		<%-- 	<input name="id" placeholder="id:" value="${cookieSavedId}"> --%>
		<input name="id" placeholder="id:"
			value="${cookie.cookieSavedId.value}"> <input name="pw"
			placeholder="pw:"> <input type="checkbox" name="saveId">아이디
		저장 <input type="submit" value="로그인">
	</form>

	세션에 저장된 아이디: ${savedId}

	<a href="/weather/w">날씨 확인</a>

	<hr>

	<a href="/api/cat">내 고양이 api 확인[브라우저에 json 찍기]</a>

	<hr>

	<a href="/weather/getCat">내 고양이 api 확인[정식 api 요청으로 확인]</a>

</body>
</html>
