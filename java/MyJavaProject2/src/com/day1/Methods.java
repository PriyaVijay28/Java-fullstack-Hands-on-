package com.day1;

public class Methods {
void method1() {
	System.out.println("Instance Method");
}
static void method2() {
	System.out.println("Static Method");
}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Methods m= new Methods();
		m.method1();
		Methods.method2();

	}

}
