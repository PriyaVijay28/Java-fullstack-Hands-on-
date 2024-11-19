<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     <%@ include file="Calculator.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
String reqFrom = request.getParameter("btn");
int n1 =Integer.parseInt(request.getParameter("n1")) ;
int n2 =Integer.parseInt(request.getParameter("n2")) ;
if(reqFrom.equalsIgnoreCase("addition")){
	out.println("Addition : "+(n1+n2));
}
if(reqFrom.equalsIgnoreCase("subtraction")){
	out.println("subtraction : "+(n1-n2));
}
if(reqFrom.equalsIgnoreCase("multiplication")){
	out.println("multiplication : "+(n1*n2));
}
if(reqFrom.equalsIgnoreCase("Division")){
	out.println("Division : "+(n1/n2));
}
%>
</body>
</html>