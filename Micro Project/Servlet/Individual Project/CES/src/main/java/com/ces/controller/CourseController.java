package com.ces.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ces.bean.CourseEnroll;
import com.ces.dao.CourseDetDAO;

/**
 * Servlet implementation class CourseController
 */
@WebServlet("/CourseController")
public class CourseController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	static CourseEnroll ce = new CourseEnroll();
	CourseDetDAO dao = new CourseDetDAO();
	int sid;
	String sname;
	String dept;
	String course1;
	String course2;
	int n;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		RequestDispatcher rd = request.getRequestDispatcher("CourseEnrollment.jsp");
		String operation = request.getParameter("btn");
		if (operation.equalsIgnoreCase("insert")) {
			sid = Integer.parseInt(request.getParameter("sid"));
			sname = request.getParameter("sname");
			dept = request.getParameter("dept");
			course1 = request.getParameter("course1");
			course2 = request.getParameter("course2");
			
			
			int n = dao.insertCourseDetails(new CourseEnroll(sid,sname,dept,course1,course2));
			
			if (n == 1) {
				rd.include(request, response);
				out.println("<br><font color='green'><b>Record Inserted</b></font>");
			} else {
				rd.include(request, response);
				out.println("<br><font color='red'><b>Record Not Inserted</b></font>");
			}

		}
		
		if (operation.equalsIgnoreCase("update")) {
			sid = Integer.parseInt(request.getParameter("sid"));
			sname = request.getParameter("sname");
			dept = request.getParameter("dept");
			course1 = request.getParameter("course1");
			course2 = request.getParameter("course2");
			
			
			n = dao.updateCourseDetails(new CourseEnroll(sid,sname,dept,course1,course2));
			
			if (n == 1) {
				rd.include(request, response);
				out.println("<br><font color='green'><b>Record Updated</b></font>");
			} else {
				rd.include(request, response);
			out.println("<br><font color='red'>Record Not Updated</font>");
			}

		}	
		
		if (operation.equalsIgnoreCase("delete")) {
			sid = Integer.parseInt(request.getParameter("sid"));
			n = dao.deleteCourseDetail(sid);
			if (n == 1) {

				rd.include(request, response);
				out.println("<br><font color='green'><b>Record Deleted</b></font>");
			} else {
				rd.include(request, response);
				out.println("<br><font color='red'><b>Record Not Deleted</b></font>");
			}
		}
		
		if (operation.equalsIgnoreCase("find")) {
			sid = Integer.parseInt(request.getParameter("sid"));
			ce  = dao.findCourseDetail(sid);
			if (ce == null || ce.getSid()==0) {

				rd.include(request, response);
				out.println("<br><font color='green'><b>Record Not Found</b></font>");
			} else {
				rd.include(request, response);
				out.println("<br><font color='green'>"+ce.getSid() + " " + ce.getSname() + " " + ce.getSdept()+" "+ce.getCourse1()+" "+ce.getCourse2()+"</font>");
			}
		}
		
		if (operation.equalsIgnoreCase("findall")) {
			List<CourseEnroll> list = dao.findallCourseDetails();
			
			if (list.isEmpty()) {
				rd.include(request, response);
				out.println("No Records found");
			} else {
				rd.include(request, response);
				for(CourseEnroll cDet : list) {
					
				out.println("<br><font color='green'>"+cDet.getSid() + " " + cDet.getSname() + " " + cDet.getSdept()+" "+cDet.getCourse1()+" "+cDet.getCourse2()+"</font>");
				}
			}
		}
	}

}
