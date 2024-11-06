package com.day5;

public class Thread2 extends Thread {
	
	@Override
	public void run() {
	 for(int i=1;i<=5;i++) {
		 System.out.println("Thread is running");
		 try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			
		}
	 }
	}

	public static void main(String[] args) throws InterruptedException {
		Thread2 t2=new Thread2();
		t2.start();
		Thread.sleep(1000);
		System.out.println("MainThread end");
		

	}

}
