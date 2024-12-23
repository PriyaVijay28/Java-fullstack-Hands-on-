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
 * Servlet implementation class Calculator
 */
@WebServlet("/Calculator")
public class Calculator extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int n1 = Integer.parseInt(request.getParameter("n1"));
		int n2 = Integer.parseInt(request.getParameter("n2"));
		String operation = request.getParameter("btn");
		int res=0;
		if(operation.equalsIgnoreCase("addition")) {
		 res= n1+n2;
		 RequestDispatcher rd = request.getRequestDispatcher("Calculator.jsp");
		 rd.include(request, response);
			
		}
		else if(operation.equalsIgnoreCase("subtraction")) {
			 res= n1-n2;
			 RequestDispatcher rd = request.getRequestDispatcher("Calculator.jsp");
			 rd.include(request, response);
			}
		else if(operation.equalsIgnoreCase("multiplication")) {
			 res= n1*n2;
			 RequestDispatcher rd = request.getRequestDispatcher("Calculator.jsp");
			 rd.include(request, response);
			}
		else if(operation.equalsIgnoreCase("division")) {
			 res= n1/n2;
			 RequestDispatcher rd = request.getRequestDispatcher("Calculator.jsp");
			 rd.include(request, response);
			}
		PrintWriter out = response.getWriter();
		out.println("<font color = 'Green'>Result : "+res +"</font>");
		
	}

}
