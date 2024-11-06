package com.day4;

public class ExcepEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
System.out.println("Before exception");
try {
int a= Integer.parseInt("abc");
}
catch(ArithmeticException e){
	System.out.println("A");
}
catch(ArrayIndexOutOfBoundsException e){
	System.out.println("B");
}
catch(Exception e) {
	System.out.println(e);
}
System.out.println("After exception");
	}

}
