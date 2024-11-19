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
	String userName = request.getParameter("uname");
	String uPass = request.getParameter("upass");
	if (userName.equals("admin") && uPass.equals("12345")) {
	%>
	<jsp:forward page="LoginSuccess.jsp"></jsp:forward>
	<%
	} else {
	%>
	<jsp:include page="LoginFail.jsp"></jsp:include>
		
		<%
		out.println("<font color='red'>Invalid username or password</font>");
		}
		%>
	
</body>
</html>