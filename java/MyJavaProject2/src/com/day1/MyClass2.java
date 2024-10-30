package com.day1;

public class MyClass2 {

int a=30;
static int b=50;

	public static void main(String[] args) {
		MyClass2 obj1=new MyClass2();
		MyClass2 obj2=new MyClass2();
		
		System.out.println(obj1.a);
		System.out.println(obj2.a);
		System.out.println(obj1.b);
		System.out.println(obj2.b);
		obj1.b=100;
		
		obj1.a=60;
		
		System.out.println(obj1.b);
		System.out.println(obj2.b);

	}

}
