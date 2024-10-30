package com.day2;

import java.util.Scanner;

public class ArraysEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int sum=0;
		int arr[]=new int[5];
		Scanner sc=new Scanner(System.in);
		for(int i=0;i<arr.length;i++) {
			arr[i]=sc.nextInt();
			sum=sum+arr[i];
		}
		for(int j=0;j<arr.length;j++) {
			System.out.println(arr[j]);
		}
		System.out.println("Sum is :"+sum);
	}

}
