package com.day1.main;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.day1.bean.Employee;



public class MainClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Configuration config = new Configuration();
		config.configure("hibernate.cfg.xml");
		SessionFactory factory = config.buildSessionFactory();
		Session session = factory.openSession();
		Transaction tn =session.beginTransaction();
	//	Employee emp = new Employee();
	//	emp.setId(102);
	//	emp.setName("Preethi");
	//	emp.setSalary(1000);
		List<Employee> emp= session.createQuery("FROM Employee").list();
	//	System.out.println(emp.getId()+" "+emp.getName()+" "+emp.getSalary());
		
		System.out.println(emp);
		tn.commit();
		session.close();

	}

}
