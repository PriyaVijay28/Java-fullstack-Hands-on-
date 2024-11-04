package com.day3;

interface VehiclePlan{
	void noOfEngine();
	void noOfWheels();
	void brandname();
}
abstract class Vehicle1 implements VehiclePlan{
	public void noOfEngine() {
		System.out.println("I have one Engine");
	}
}

class Bike1 extends Vehicle1{
	public void noOfWheels() {
		System.out.println("I have two wheels");
	}
	public void brandname() {
		System.out.println("Brand Name is Honda");
	}
	public void color() {
		System.out.println("Brown color");
	}
}


public class InterfaceEx  {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Bike1 b1 = new Bike1();
		b1.brandname();
		b1.noOfEngine();
		b1.noOfWheels();
		
		VehiclePlan vp = new Bike1();
		vp.brandname();
		
		
		

	}

}
