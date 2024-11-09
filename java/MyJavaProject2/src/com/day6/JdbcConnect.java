package com.day6;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class JdbcConnect {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		//1.Load the driver into JVM
		Class.forName("org.postgresql.Driver");
		
		//2.Establish Connection
	Connection con=	DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres","postgres", "postgres");
	//System.out.println(con);	
	   //3.Create statement
	//String sql = "insert into employee values(?,?,?)";
	String sql = "delete from employee where eid=?";
	PreparedStatement ps = con.prepareStatement(sql);
	//System.out.println(ps);
	
	//4.execute Statement
	ps.setInt(1, 101);
	
	int n = ps.executeUpdate();
	if(n==1) {
		System.out.println("Record Deleted");
	}
	else {
		System.out.println("Record Not Deleted");
	}
		

	}

}
