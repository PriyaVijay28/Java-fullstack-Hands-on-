package com.ce.main;

import java.util.List;
import java.util.Scanner;

import com.ce.bean.CourseEnroll;
import com.ce.dao.CourseDetDAO;






public class CE {
	
	static Scanner sc = new Scanner(System.in);
	static CourseDetDAO dao = new CourseDetDAO();

	public static int menu() {
		System.out.println("1. Insert");
		System.out.println("2. Update");
		System.out.println("3. Delete");
		System.out.println("4. Find");
		System.out.println("5. FindAll");
		System.out.println("6. Exit");
		System.out.println("Enter your choice");
		int choice = sc.nextInt();
		return choice;
	}
	
	public static CourseEnroll insertCourseDetails() {
		System.out.println("Enter student id, name, dept, course1, course2");
		return new CourseEnroll(sc.nextInt(), sc.next(), sc.next(), sc.next(), sc.next());
	}
	
	public static CourseEnroll updateCourseDetails() {
		System.out.println("Enter the Student ID to be updated");
		int id = sc.nextInt();
		System.out.println("Please enter name, Deptartment, course1, course2");
		return new CourseEnroll(id, sc.next(), sc.next(),sc.next(),sc.next());
	}
	
	public static int deleteCourseDetail() {
		System.out.println("Enter the Student ID");
		return sc.nextInt();
	}

	public static int findCourseDetail() {
		System.out.println("Enter the Student ID");
		return sc.nextInt();
	}
	public static void main(String[] args) {
		String msg = "";
		do {
			switch (CE.menu()) {
			case 1:
				CourseEnroll ce = insertCourseDetails();
				int n = dao.insertCourseDetails(ce);
				if (n == 1) {
					System.out.println("Record Inserted");
				} else {
					System.out.println("Record Not Inserted");
				}

				break;
				
			case 2:
				ce = updateCourseDetails();
				n = dao.updateCourseDetails(ce);
				if (n == 1) {
					System.out.println("Record Updated");
				} else {
					System.out.println("Record Not Updated");
				}
				break;
			case 3:
				int sid = deleteCourseDetail();
				n = dao.deleteCourseDetail(sid);
				if (n == 1) {
					System.out.println("Record Deleted");
				} else {
					System.out.println("Record Not Deleted");
				}
				break;
			case 4:
				sid = findCourseDetail();
				ce = dao.findCourseDetail(sid);
				if (ce == null || ce.getSid()==0) {
					System.out.println("Record not found");
				} else {
					System.out.println(ce.getSid() + " " + ce.getSname() + " " + ce.getSdept()+" "+ce.getCourse1()+" "+ce.getCourse2());

				}
				break;
			case 5:
				List<CourseEnroll> list = dao.findallCourseDetails();
			
				if (list.isEmpty()) {
					System.out.println("No Records found");
				} else {
					for(CourseEnroll cDet : list) {
					System.out.println(cDet.getSid() + " " + cDet.getSname() + " " + cDet.getSdept()+" "+cDet.getCourse1()+" "+cDet.getCourse2());
					}
				}
				break;
			case 6:
				System.exit(0);
				break;
			}
			System.out.println("Do you want to continue [YES/NO]");
			msg = sc.next();
		} while (msg.equalsIgnoreCase("yes"));

	}

}
