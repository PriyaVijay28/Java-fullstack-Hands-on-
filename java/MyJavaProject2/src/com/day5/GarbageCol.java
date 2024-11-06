package com.day5;

public class GarbageCol {
	static int count=0;
	public GarbageCol() {
		count++;
		System.out.println(count);
	}
	
	@Override
	protected void finalize() throws Throwable {
		count--;
		System.out.println(count);
	}
	

	public static void main(String[] args) {
		GarbageCol gc1 = new GarbageCol();
		GarbageCol gc2 = new GarbageCol();
		
		gc1=null;
		System.gc();
		gc2=null;
		System.gc();

	}

}
