<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<jsp:useBean id="emp" class="com.day1.Employee">
		<jsp:setProperty property="eid" name="emp" value="101" />
		<jsp:setProperty property="ename" name="emp" value="Priya" />
		<jsp:setProperty property="esalary" name="emp" value="5000" />
		<jsp:getProperty property="eid" name="emp"/><br>
		<jsp:getProperty property="ename" name="emp"/><br>
		<jsp:getProperty property="esalary" name="emp"/>
		

	</jsp:useBean>
</body>
</html>