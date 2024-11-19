<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.util.Date" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%--Declarative Tag --%>
	<%!int a, b;
	String name = "Priya";%>
	<%--Sriptlet Tag for writing business logic --%>
	<%
	int sum = a + b;
	if (a > b) {
		out.println("A is Big");
	} else {
		out.println("B is Big");
	}
	%>
<%--Expression Tag for displaying values --%>
<br>
Addition <%= sum %>
<br>
Welcome <%= name %>
<br>
Today Date <%= new Date() %>
</body>
</html>