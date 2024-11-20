package com.day1;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class MainClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Resource resource = new ClassPathResource("Beans.xml");
//		BeanFactory factory = new XmlBeanFactory(resource);

		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		Employee emp1 = (Employee) context.getBean("emp1");
		System.out.println(emp1);

		Employee emp3 = (Employee) context.getBean("emp3");
		System.out.println(emp3);

		Employee emp4 = (Employee) context.getBean("emp4");
		System.out.println(emp4);

		Employee emp5 = (Employee) context.getBean("emp5");
		System.out.println(emp5);

		Question q = (Question) context.getBean("ques1");
		System.out.println(q);

		Question q1 = (Question) context.getBean("ques2");
		System.out.println(q1);

		Book b = (Book) context.getBean("book2");
		System.out.println(b);

		Hello hello1 = (Hello) context.getBean("hello");
		System.out.println(hello1.getMsg());

		hello1.setMsg("Welcome");
		System.out.println(hello1.getMsg());

		Hello hello2 = (Hello) context.getBean("hello");
		System.out.println(hello2.getMsg());

	}

}
