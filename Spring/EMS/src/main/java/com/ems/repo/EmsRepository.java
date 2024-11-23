package com.ems.repo;

import java.util.LinkedList;
import java.util.ListIterator;

import com.ems.bean.Employee;

public class EmsRepository {
	LinkedList<Employee> empList = new LinkedList();

	public boolean insertData(Employee emp) {
		return empList.add(emp);
	}

	public boolean updateData(Employee emp) {
		ListIterator<Employee> iterator = empList.listIterator();
		boolean flag = false;

		while (iterator.hasNext()) {
			Employee e = iterator.next();
			if (e.getId() == emp.getId()) {
				empList.remove(e);
				empList.add(emp);
				flag = true;
			}

			else {
				flag = false;
			}
		}
		return flag;
	}

	public boolean deleteData(int id) {
		ListIterator<Employee> iterator = empList.listIterator();
		boolean flag = false;

		while (iterator.hasNext()) {
			Employee e = iterator.next();
			if (e.getId() == id) {
				empList.remove(e);
				flag = true;
			}

			else {
				flag = false;
			}
		}
		return flag;
	}

	public Employee findData(int id) {
		ListIterator<Employee> iterator = empList.listIterator();
		Employee emp = null;

		while (iterator.hasNext()) {
			Employee e = iterator.next();
			if (e.getId() == id) {
				emp = e;
				break;
			}

		}
		return emp;
	}

	public LinkedList<Employee> findAllData() {
		return empList;
	}

}
