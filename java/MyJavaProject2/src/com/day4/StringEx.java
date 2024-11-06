package com.day4;

public class StringEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
String s1="JAVA";
String s2=new String("java");
char c[]= {'H','I'};
String s3=new String(c);
System.out.println(s1.equals(s2));
System.out.println(s1.equalsIgnoreCase(s2));
System.out.println(s1.charAt(2));
System.out.println(s3.toLowerCase());
System.out.println(s2.startsWith("jav"));
System.out.println(s2.endsWith("vva"));
System.out.println(s2.replace('a','s'));

String s4="  Hello World  ";
System.out.println(s4.substring(2,5));
System.out.println(s4);
System.out.println(s4.trim());
String temp[]=s4.split("");
for(String s:temp) {
	System.out.println(s);
}


String s11=new String("java");
String s12=new String("java");
System.out.println(s11==s12);
System.out.println(s11.equals(s12));

String s21="java";
String s22="java";
System.out.println(s21==s22);
System.out.println(s21.equals(s22));



//StringBuffer
StringBuffer sb = new StringBuffer("Java");
sb.append(" World");
System.out.println(sb);
sb.reverse();
System.out.println(sb);


	}

}
