package com.day4;

import java.util.Scanner;

class InvalidAgeException extends Exception{
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "Invalid Age to vote";
	}
	
}

public class CustomExcep {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Enter your age");
		try {
		int age=new Scanner(System.in).nextInt();
		if(age<18) {
			throw new InvalidAgeException();
		}
		else {
			System.out.println("Valid Age");
		}
		}
		catch(InvalidAgeException e) {
			System.out.println(e);
		}
	}

}
