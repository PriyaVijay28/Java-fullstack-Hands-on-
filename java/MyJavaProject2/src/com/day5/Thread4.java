package com.day5;

public class Thread4 implements Runnable {
	
	@Override
	public void run() {
	 for(int i=1;i<=5;i++) {
		 System.out.println(Thread.currentThread().getName()+" is running");
		 if(Thread.currentThread().getName().equals("T1")) {
			 try {
				Thread.sleep(600);
			} catch (InterruptedException e) {
				
			}
		 }
		 if(Thread.currentThread().getName().equals("T2")) {
			 try {
				Thread.sleep(1200);
			} catch (InterruptedException e) {
				
			}
		 }
	 }
	}

	public static void main(String[] args) throws InterruptedException {
		Thread t1 = new Thread(new Thread4());
		Thread t2 = new Thread(new Thread4());
		t1.setName("T1");
		t2.setName("T2");
		
		t1.start();
		t2.start();
		Thread.sleep(1000);
		System.out.println("Waiting...");
		t2.suspend();
	
		
		t1.join();
		//Thread.sleep(1000);
		t2.resume();
		System.out.println("MainThread end");
		

	}

}
