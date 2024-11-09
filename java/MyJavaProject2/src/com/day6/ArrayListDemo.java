package com.day6;

import java.util.ArrayList;
import java.util.Iterator;

public class ArrayListDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	
		ArrayList<Integer> list = new ArrayList<>();
		list.add(10);
		list.add(20);
		list.add(30);
		list.add(40);
		list.add(60);
		list.add(70);
		System.out.println(list);
		list.add(4,50);
		list.remove(5);
		System.out.println(list);
		list.remove(new Integer(70));
		System.out.println(list);
		
		//Way-1
for(int i=0;i<list.size();i++) {
	System.out.print(list.get(i)+" ");
}
System.out.println();
//Way-2
for(Integer i : list) {
	System.out.print(i+" ");
}
System.out.println();
Iterator<Integer> it = list.iterator();
while(it.hasNext()) {
	System.out.print(it.next());
}


	}

}
