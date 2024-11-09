package com.day6;

import java.util.Collection;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.SortedSet;
import java.util.TreeSet;

public class SortedSetDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		TreeSet<Integer> ts = new TreeSet<Integer>(Collections.reverseOrder());
		ts.add(30);
		ts.add(10);
		ts.add(20);
		ts.add(10);
	
		ts.add(40);
		System.out.println(ts);
		for(Integer i : ts) {
			System.out.println(i);
			
		}
		System.out.println();
	}

}
