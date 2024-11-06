package com.day5;

public class ThreadEx extends Thread{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Thread t= Thread.currentThread();
		System.out.println(t);
		System.out.println(t.getName());
		System.out.println(t.hashCode());
		System.out.println(t.getState());
		
		ThreadEx t1= new ThreadEx();
		System.out.println(t1);
		System.out.println(t1.getPriority());
		
		t1.setName("NewThread");
		t1.setPriority(8);
		System.out.println(t1);
		System.out.println(t1.getState());

	}

}
