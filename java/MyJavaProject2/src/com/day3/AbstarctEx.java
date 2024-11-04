package com.day3;

abstract class MyClass{
	void myMethod() {
		System.out.println("MyMethod");
	}
	abstract void myMethod2();
	abstract void myMethod3();
	
}

public class AbstarctEx extends MyClass {
	void myMethod2() {
		System.out.println("MyMethod2");
	}
	void myMethod3() {
		System.out.println("MyMethod3");
	}
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
       AbstarctEx abs=new AbstarctEx();
       abs.myMethod();
       abs.myMethod2();
       abs.myMethod3();
       
       MyClass my = new AbstarctEx();
       my.myMethod();
       my.myMethod2();
       my.myMethod3();
	}

}
