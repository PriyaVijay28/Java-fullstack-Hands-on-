package com.day5;

class TwoTable extends Thread{
	@Override
	public void run() {
		for(int i=1;i<=10;i++) {
			System.err.println(i +" * 2 = "+(i*2));
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				
			}
		}
	}
}

class FiveTable implements Runnable{
	@Override
	public void run() {
		for(int i=1;i<=10;i++) {
			System.out.println(i +" * 5 = "+(i*5));
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				
			}
		}
	}
}

public class Thread5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		TwoTable tt = new TwoTable();
		tt.start();
		Thread ft = new Thread(new FiveTable());
		ft.start();

	}

}
