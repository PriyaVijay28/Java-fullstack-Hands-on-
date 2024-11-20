package com.day1;

public class Employee {
	private int id;
	private String name;
	private int salary;
	private Address address;
	private Project project;

	

	public Employee(int id, String name, int salary, Address address, Project project) {
		super();
		this.id = id;
		this.name = name;
		this.salary = salary;
		this.address = address;
		this.project = project;
	}

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
	
	

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", salary=" + salary + ", address=" + address + ", project="
				+ project + "]";
	}

	

}
