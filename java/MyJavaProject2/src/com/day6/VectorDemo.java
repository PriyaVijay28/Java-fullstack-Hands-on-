package com.day6;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Vector;

public class VectorDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	
		Vector<Integer> vec = new Vector<>();
		vec.add(10);
		vec.add(20);
		vec.add(30);
		vec.add(40);
		vec.add(60);
		vec.add(70);
		System.out.println(vec);
		vec.add(4,50);
		vec.remove(5);
		System.out.println(vec);
		vec.remove(new Integer(70));
		System.out.println(vec);
		
		//Way-1
for(int i=0;i<vec.size();i++) {
	System.out.print(vec.get(i)+" ");
}
System.out.println();
//Way-2
for(Integer i : vec) {
	System.out.print(i+" ");
}
System.out.println();
Iterator<Integer> it = vec.iterator();
while(it.hasNext()) {
	System.out.print(it.next());
}

Enumeration<Integer> e = vec.elements();
while(e.hasMoreElements()) {
	System.out.print(e.nextElement());
}


	}

}
