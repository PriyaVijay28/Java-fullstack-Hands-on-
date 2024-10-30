package com.day1;

public class MyClass1 {
	
	int inst=10;
	static int stat=20;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
       System.out.println("Welcome to JAVA variable types");
       int loc=30;
       MyClass1 obj=new MyClass1();
       System.out.println("Instance VARIABLE "+ obj.inst);
       System.out.println("Static VARIABLE "+ MyClass1.stat);
       System.out.println("Local VARIABLE "+ loc);


	}

}
