package com.day6;

import java.util.Enumeration;
import java.util.Stack;



public class StackDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Stack<Integer> s = new Stack<>();
		s.push(10);
		s.push(20);
		s.push(30);
		s.push(40);
		s.push(50);
		System.out.println(s);
		s.pop();
		System.out.println(s);
		
		Enumeration<Integer> e = s.elements();
		while(e.hasMoreElements()) {
			System.out.println(e.nextElement());
		}
		System.out.println(s.peek());

	}

}
