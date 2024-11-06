package com.day4;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class Employee implements Serializable{
	int id;
	String name;
	float esal;
	 Employee(int id,String name,float esal){
		 this.id=id;
		 this.name=name;
		 this.esal=esal;
	 }
	 public void display() {
		 System.out.println("ID "+id+" Name "+name+" Salary "+esal);
	 }
}

public class SerializationEx {

	public static void main(String[] args) throws IOException, ClassNotFoundException {
		// TODO Auto-generated method stub
		
		Employee emp=new Employee(101, "Priya", 1500.0f);
		//Serialization
		FileOutputStream fout =new FileOutputStream("C://BIWW//JFS-Hands-On//java/demoObj.txt");
		ObjectOutputStream objout = new ObjectOutputStream(fout);
		objout.writeObject(emp);
		objout.close();
		System.out.println("Obj created");
		
		//De-Serialization
		FileInputStream fin =new FileInputStream("C://BIWW//JFS-Hands-On//java/demoObj.txt");
		ObjectInputStream objin = new ObjectInputStream(fin);
		Employee e=(Employee)objin.readObject();
		objin.close();
		fin.close();
		e.display();
		

	}

}
