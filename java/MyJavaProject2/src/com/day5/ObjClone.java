package com.day5;

 

public class ObjClone implements Cloneable {
	int id;
	String name;
	float salary;
	public ObjClone(int id, String name, float salary) {
		
		this.id = id;
		this.name = name;
		this.salary = salary;
	}
	
	void display() {
		System.out.println("Name : "+name+", Salary : "+salary);
	}

	public static void main(String[] args) throws CloneNotSupportedException {
		ObjClone obj1 = new ObjClone(101, "Priya", 1500.0f);
		obj1.display();
		ObjClone obj2 = (ObjClone) obj1.clone();
		obj2.display();


	}

}
