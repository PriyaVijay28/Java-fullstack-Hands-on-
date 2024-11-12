<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@
page
import=
"java.math.BigInteger"
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
        String numberStr = request.getParameter("factNo");
        int number = Integer.parseInt(numberStr);
 
        int factorial = 1;
 
        out.println("<table border='1'>");
        out.println("<tr><th>Number</th><th>Factorial</th></tr>");
        for (int i = 1; i <= number; i++) {
            factorial = factorial*i;
            out.println("<tr><td>" + i + "</td><td>" + factorial + "</td></tr>");
        }
        out.println("</table>");
       
    %>
</body>
</html>