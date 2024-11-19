package com.day1.main;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.criteria.HibernateCriteriaBuilder;
import org.hibernate.query.sql.internal.SQLQueryParser;

import com.day1.bean.Employee;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public class MainClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Configuration config = new Configuration();
		config.configure("hibernate.cfg.xml");
		SessionFactory factory = config.buildSessionFactory();
		Session session = factory.openSession();
		Transaction tn = session.beginTransaction();
		// Employee emp = new Employee();
		// emp.setId(102);
		// emp.setName("Preethi");
		// emp.setSalary(1000);
		// session.save(emp);
		// session.delete(emp);
		// session.update(emp);
		// List<Employee> emp = session.createQuery("FROM Employee").list();
		// System.out.println(emp.getId()+" "+emp.getName()+" "+emp.getSalary());
		// Query query = session.createQuery("FROM Employee where id=101");

		// Query query = session.createQuery("FROM Employee where id=:idno");
		/*
		 * List<Employee> list1 = query.list(); for(Employee emp : list1) {
		 * 
		 * System.out.println(emp); }
		 */
		//  --UPDATE--
//		int id = 101;
//		String name = "Priya Vijay";
//		int salary = 15000;
//		Query query = session.createQuery("update Employee set name=:name, salary=:salary where id=:idno");
//		query.setParameter("idno", id);
//		query.setParameter("name", name);
//		query.setParameter("salary", salary);
//		int n = query.executeUpdate();
		
		
		//--DELETE--
//		int id = 101;
//		Query query = session.createQuery("Delete Employee where id=:idno");
//		query.setParameter("idno", id);
//		int n = query.executeUpdate();
		
		//--specific column--
//		Query query = session.createQuery("select obj1.name, obj1.salary from Employee obj1 where obj1.id=102");
//		System.out.println(query);
//		List<Object[]> emp = query.list();
//        for(Object emp1[] : emp) {
//        	
//        System.out.println(emp1[0]+ " "+emp1[1]);
//        }
		
//            --	HCQL	--
//		HibernateCriteriaBuilder cb = session.getCriteriaBuilder();
//		  CriteriaQuery<Employee> cq = cb.createQuery(Employee.class);
//
//       
//        Root<Employee> root = cq.from(Employee.class);
//
//     
//        cq.select(root).where(cb.equal(root.get("id"), 101));
//
//       
//        List<Employee> employees = session.createQuery(cq).getResultList();
//
//        for (Employee employee : employees) {
//            System.out.println(employee.getName() + " | " + employee.getSalary());
//        }
		String sql = "SELECT * FROM employee";
		Query query =session.createNativeQuery(sql, Employee.class);
		List<Employee> list = query.getResultList();
		for (Employee e : list) { 
			System.out.println(e); }
		
		tn.commit();
		session.close();

	}

}
