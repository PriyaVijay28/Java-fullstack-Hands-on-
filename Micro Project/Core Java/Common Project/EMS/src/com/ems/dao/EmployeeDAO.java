package com.ems.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

import com.ems.bean.Employee;
import com.ems.util.DBUtil;

public class EmployeeDAO {

	Connection con = DBUtil.getDBConnection();
	int n = 0;
	String sql;

	public int insertEmployee(Employee employee) {
		try {
			sql = "insert into employee values(?,?,?)";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, employee.getEid());
			ps.setString(2, employee.getEname());
			ps.setInt(3, employee.getEsalary());
			n = ps.executeUpdate();
		} catch (Exception e) {
			System.out.println(e);
		}
		return n;
	}

	public int deleteEmployee(int id) {
		try {
			sql = "Delete from employee where eid=?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, id);
			n = ps.executeUpdate();
		} catch (Exception e) {
			System.out.println(e);
		}
		return n;
	}

	public int updateEmployee(Employee employee) {
		try {
			sql = "update employee set ename = ?, salary = ? where eid = ?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, employee.getEname());
			ps.setInt(2, employee.getEsalary());
			ps.setInt(3, employee.getEid());
			n = ps.executeUpdate();

		} catch (Exception e) {
			System.out.println(e);
		}
		return n;

	}

	public Employee findEmployee(int eid) {
		Employee emp = new Employee();
		try {
			sql = "select * from employee where eid = ?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, eid);
			ResultSet res = ps.executeQuery();
			if (res.next()) {
				emp.setEid(res.getInt("eid"));
				emp.setEname(res.getString("ename"));
				emp.setEsalary(res.getInt("salary"));
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return emp;

	}

	public List<Employee> findallEmployee() {
		List<Employee> emplist = new LinkedList<>();
		try {
			sql = "select * from employee";
			PreparedStatement ps = con.prepareStatement(sql);
			ResultSet res = ps.executeQuery();
			while (res.next()) {
				Employee emp = new Employee();
				emp.setEid(res.getInt("eid"));
				emp.setEname(res.getString("ename"));
				emp.setEsalary(res.getInt("salary"));
				emplist.add(emp);
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return emplist;

	}

}
