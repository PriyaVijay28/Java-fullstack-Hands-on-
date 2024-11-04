package com.day3;

interface One{
	int a=10;
}
interface Two{
	int a=10; //public static final
}
interface Three extends One,Two{
	void sum();
}

public class Interface2 implements Three{
public void sum() {
	System.out.println(One.a+Two.a);
}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
          Interface2 i2=new Interface2();
          i2.sum();
	}

}
