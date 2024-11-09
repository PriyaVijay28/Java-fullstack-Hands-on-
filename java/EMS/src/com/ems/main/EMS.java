package com.ems.main;

import java.util.Scanner;

import com.ems.bean.Employee;
import com.ems.dao.EmployeeDAO;

public class EMS {
	
	static Scanner sc=new Scanner(System.in);
	static EmployeeDAO dao = new EmployeeDAO();
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
	
	public static Employee insertEmployee() {
		System.out.println("Enter employee id, name, salary");
		return new Employee(sc.nextInt(), sc.next(), sc.nextInt());
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String msg ="";
		do {
		switch(EMS.menu()) {
		case 1:
			Employee employee = insertEmployee();
			int n = dao.insertEmployee(employee);
			if(n==1) {
				System.out.println("Record Inserted");
			}
			else {
				System.out.println("Record Not Inserted");
			}
			
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			System.exit(0);
			break;
		}
		System.out.println("Do you want to continue [YES/NO]");
		msg=sc.next();
		}
		while(msg.equalsIgnoreCase("yes"));
			
		
		
		
		

	}

}
