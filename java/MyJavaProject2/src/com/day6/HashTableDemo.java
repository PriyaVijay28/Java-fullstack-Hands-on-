


package com.day6;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.Map.Entry;
import java.util.Set;

public class HashTableDemo {

	public static void main(String[] args) {
		Hashtable<Integer, String> map = new Hashtable<Integer, String>();
		map.put(10, "HTML");
		map.put(1, "Java");
		map.put(2, "Python");
		map.put(3, "C++");
		map.put(1, ".Net");
		map.put(20, "CSS");
		//map.put(null, "Ruby");
	//	map.put(4, null);
	//map.put(11, null);
		
		System.out.println(map);
		System.out.println(map.get(11));
		System.out.println(map.remove(11));
		System.out.println(map.remove(1));
		System.out.println(map);
		
		//Way-1
		Set<Integer> ks = map.keySet();
		System.out.println(ks);
		for(Integer k : ks) {
			System.out.println(k +" ="+map.get(k));
		}
		
		//Way-2
		Set<Entry<Integer,String>> es = map.entrySet(); 
		System.out.println(es);
		for(Entry e : es) {
			System.out.println(e.getKey()+" = "+e.getValue());
		}
		
		
		
		
		
		
		
		
		

	}

}
