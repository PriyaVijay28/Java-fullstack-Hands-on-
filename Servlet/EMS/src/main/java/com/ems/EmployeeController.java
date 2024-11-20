package com.ems;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ems.bean.Employee;
import com.ems.dao.EmployeeDAO;

/**
 * Servlet implementation class EmployeeController
 */
@WebServlet("/EmployeeController")
public class EmployeeController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	static EmployeeDAO dao = new EmployeeDAO();

	int eid;	
	String ename;
	int esal;
	int n;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		RequestDispatcher rd = request.getRequestDispatcher("Login.jsp");
		PrintWriter out = response.getWriter();
		String operation = request.getParameter("btn");
		if (operation.equalsIgnoreCase("insert")) {
			eid = Integer.parseInt(request.getParameter("eid"));
			ename = request.getParameter("ename");
			esal = Integer.parseInt(request.getParameter("esal"));
			Employee emp = new Employee(eid, ename, esal);
			n = dao.insertEmployee(emp);
			if (n == 1) {

				rd.include(request, response);
				out.println("<br><font color='green' text-align:'center'>Record Inserted</font>");
			} else {
				rd.include(request, response);
				out.println("<br><font color='red' text-align:'center'>Record Not Inserted</font>");
			}
		}
		if (operation.equalsIgnoreCase("update")) {
			eid = Integer.parseInt(request.getParameter("eid"));
			ename = request.getParameter("ename");
			esal = Integer.parseInt(request.getParameter("esal"));
			Employee emp = new Employee(eid, ename, esal);
			n = dao.updateEmployee(emp);
			if (n >= 1) {

				rd.include(request, response);
				out.println("<br><font color='green' text-align:'center'><b>Record Updated</b></font>");
			} else {
				rd.include(request, response);
				out.println("<br><font color='red' text-align:'center'><b>Record Not Updated</b></font>");
			}
		}
		if (operation.equalsIgnoreCase("delete")) {
			eid = Integer.parseInt(request.getParameter("eid"));
			n = dao.deleteEmployee(eid);
			if (n >= 1) {

				rd.include(request, response);
				out.println("<br><font color='green' text-align:'center'><b>Record Deleted</b></font>");
			} else {
				rd.include(request, response);
				out.println("<br><font color='red' text-align:'center'><b>Record Not Deleted</b></font>");
			}
		}
		if (operation.equalsIgnoreCase("find")) {
			eid = Integer.parseInt(request.getParameter("eid"));
			Employee employee = dao.findEmployee(eid);
			if (employee == null) {
				rd.include(request, response);
				out.println("<br><font color='red' text-align:'center'><b>Record Not found</b></font>");
			} else {
				rd.include(request, response);
				out.println("<br><font color='green' text-align:'center'><b>" + employee.getEid() + " " + employee.getEname() + " "
						+ employee.getEsalary() + "</b></font>");

			}

		}
		if (operation.equalsIgnoreCase("findall")) {
			List<Employee> list = dao.findallEmployee();
			if (list.isEmpty()) {
				rd.include(request, response);
				out.println("Records Not Found");
			} else {
				rd.include(request, response);
				for (Employee e : list) {
					out.println("<font color='green' text-align:'center'><center><b>" + e.getEid() + " " + e.getEname() + " " + e.getEsalary()
							+ "</b></center></font>");

					out.println();
				}
			}
		}

	}
}
