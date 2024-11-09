package com.day6;

import java.util.HashSet;

public class HashSetDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HashSet<Integer> hs = new HashSet<Integer>();
		hs.add(10);
		hs.add(20);
		hs.add(10);
		hs.add(30);
		hs.add(40);
		System.out.println(hs);
		for(Integer i : hs) {
			System.out.println(i);
		}

	}

}
