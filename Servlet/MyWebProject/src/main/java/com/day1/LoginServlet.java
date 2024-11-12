package com.day1;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	
	protected void service(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		out.println("Invoking service method");
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		
		String username= request.getParameter("uname");
		String password= request.getParameter("upass");
		
		if(username.equalsIgnoreCase("admin") && password.equalsIgnoreCase("12345")) {
			//response.sendRedirect("LoginSuccess.jsp");
			RequestDispatcher rd = request.getRequestDispatcher("LoginSuccess.jsp");
			rd.forward(request, response);
		}
		else {
			response.sendRedirect("LoginFail.jsp");
			//RequestDispatcher rd = request.getRequestDispatcher("Login.jsp");
			//rd.include(request, response);
			//out.println("<font color = 'red'>Invalid username or password. Try again!!</font>");
		}
		
		out.close();
	}

}
