package com.day4;

import java.io.FileNotFoundException;
import java.io.FileReader;

public class ThrowsEx {
static void myMethod() throws FileNotFoundException {
	FileReader fr= new FileReader("Demo.txt");
}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
		ThrowsEx.myMethod();
		}
		catch(Exception e) {
			System.out.println(e);
		}
	}

}
