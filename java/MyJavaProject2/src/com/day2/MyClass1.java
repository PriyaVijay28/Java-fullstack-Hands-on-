package com.day2;

class Mobile{
	public String getBrandName() {
		return brandName;
	}
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	String brandName;
	int price;
	
	Mobile(String brandName,int price){
		this.brandName=brandName;
		this.price=price;
	}
	void display() {
		System.out.println("Brand Name: "+this.brandName);
		System.out.println("Price: "+this.price);
	}
	
}

public class MyClass1 {

	public static void main(String[] args) {
		Mobile samsung = new Mobile("Samsung",10000);
		samsung.display();
		samsung.setPrice(15000);
		samsung.display();
		

	}

}
