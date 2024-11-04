package com.day3;

class Vehicle{
	Vehicle(){
		this(10);
		System.out.println("Vehicle Constructor");
	}
	Vehicle(int a){
		System.out.println("Vehicle Constructor with parameter");
	}
	void noOfEngine() {
		System.out.println("I have one Engine");
	}
	void noOfEngine(int a) {
		System.out.println("I have "+ a+ "Engine");
	}
	void brandName() {
		System.out.println("Brand Name from super class");
	}
	static void color() {
		System.out.println("Brown color");
	}
}
class TwoWheeler extends Vehicle{
	TwoWheeler(){
		System.out.println("Two Wheeler Constructor");
	}
	void noOfWheels() {
		System.out.println("I have two wheels");
	}
	static void color() {
		System.out.println("Black color");
	}
}
class Bike extends TwoWheeler{
	Bike(){
		System.out.println("Bike Constructor");
	}
	void brandName() {
		System.out.println("Brand Name is Honda");
	}
}
public class InheritanceEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Bike bike=new Bike();
		bike.noOfEngine();
		bike.noOfWheels();
		bike.brandName();
	
		Vehicle v=new Bike(); //Dynamic Method Dispatch
		v.noOfEngine();
		v.brandName();
		TwoWheeler.color();

	}

}
