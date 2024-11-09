
package com.day6;

import java.util.HashSet;
import java.util.LinkedHashSet;

public class LinkedHashSetDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		LinkedHashSet<Integer> hs = new LinkedHashSet<Integer>();
		hs.add(30);
		hs.add(10);
		hs.add(20);
		hs.add(10);
	
		hs.add(40);
		System.out.println(hs);
		for(Integer i : hs) {
			System.out.println(i);
			
		}
		

	}

}

