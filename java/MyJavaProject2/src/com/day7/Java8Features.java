package com.day7;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;
import java.util.stream.Collectors;

public class Java8Features {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 1. Given a list of integers, find out all the even numbers that exist in the
		// list using Stream functions?
		List<Integer> list = Arrays.asList(10, 10, 11, 12, 13, 14, 15, 22, 31, 11, 44);
		List<Integer> evenList = list.stream().filter(x -> x % 2 == 0).collect(Collectors.toList());
		System.out.println(evenList);

		// 2. Given a list of integers, find out all the numbers starting with 1 using
		// Stream functions?
		List<Integer> num = list.stream().filter(x -> String.valueOf(x).startsWith("1")).collect(Collectors.toList());
		System.out.println(num);

//3. How to find duplicate elements in a given integers list in java using Stream functions?
		List<Integer> dup = list.stream().filter(x -> list.indexOf(x) != list.lastIndexOf(x))
				.collect(Collectors.toList());
		System.out.println(dup);

		Set<Integer> dupSet = list.stream().filter(x -> list.indexOf(x) != list.lastIndexOf(x))
				.collect(Collectors.toSet());
		System.out.println(dupSet);

		Set<Integer> dupCount = new HashSet<>();
		long count = list.stream().filter(x -> dupCount.add(x) == false).count();
		System.out.println(count);

//4. Given the list of integers, find the first element of the list using Stream functions?
		int fe = list.stream().findFirst().get();
		System.out.println(fe);

//5. Given a list of integers, find the total number of elements present in the list using Stream functions?
		long count1 = list.stream().count();
		System.out.println(count1);

//6.  Given a list of integers, find the maximum value element present in it using Stream functions?
		int max = list.stream().max((x, y) -> x - y).get();
		System.out.println(max);

//7. Sort the Employee object using salary
		List<Employee> empList = Arrays.asList(new Employee(101, "Priya", 3000), new Employee(102, "Preethi", 5000),
				new Employee(103, "Abhi", 8000));
		List<Employee> sortList = empList.stream().sorted((e1, e2) -> e1.salary - e2.salary)
				.collect(Collectors.toList());
		System.out.println(sortList);

////8. Given a list of integers, sort all the values present in it using Stream functions?
		List<Integer> sortList1 = list.stream().sorted().collect(Collectors.toList());
		System.out.println(sortList1);

//9. Given a list of integers, sort all the values present in it in descending order using Stream functions?
		List<Integer> ascSort = list.stream().sorted((x, y) -> y - x).collect(Collectors.toList());
		System.out.println(ascSort);

		// 10. Given an integer array nums, return true if any value appears at least
		// twice in the array, and return false if every element is distinct.
		dupSet.clear();
		boolean res = list.stream().filter((x) -> dupSet.add(x) == false).count() > 0 ? true : false;
		System.out.println(res);

		// 11. Java 8 program to find factorial of given list of integer values
		List<Integer> list1 = Arrays.asList(1, 2, 3, 4, 5);
		List<Integer> factList = list1.stream().map(x -> {
			int fact = 1;
			for (int i = 1; i <= x; i++)
				fact = fact * i;
			return fact;
		}).collect(Collectors.toList());
		System.out.println(factList);

// 12. Write a Java 8 program to sort an array and then convert the sorted array
// into Stream?
		int arr[] = { 3, 5, 2, 1, 7 };
		Arrays.sort(arr);
		Arrays.stream(arr).forEach(System.out::println);

// Convert a List of String into upper case using stream
		List<String> strList = Arrays.asList("Apple", "Orange", "Grape");
		List<String> resList = strList.stream().map(x -> x.toUpperCase()).collect(Collectors.toList());
		System.out.println(resList);

		// 14. Convert a List of String into a Map key and it's length as Map Value
		// using Java 8 Stream

		Map<String, Integer> resMap = strList.stream().collect(Collectors.toMap(x -> x, x -> x.length()));
		System.out.println(resMap);

		// 15. flatMap
		/*
		 * flatMap() V/s map(): map() transforms each element of a stream into another
		 * object, resulting in a stream of the same size as the input. It’s used for
		 * one-to-one transformations. It processes the stream of values. flatMap()
		 * transforms each element of a stream into zero or more elements, potentially
		 * changing the size of the stream. It’s used for one-to-many transformations
		 * and flattening nested structures. It processes the stream of stream's values.
		 */

		List<Integer> even = Arrays.asList(2, 4, 6, 8);
		List<Integer> odd = Arrays.asList(1, 3, 5, 7, 9);
		List<List<Integer>> evenOdd = Arrays.asList(even, odd);
		System.out.println("Before Flattering");
		System.out.println(evenOdd);
		List<Integer> res1 = evenOdd.stream().flatMap(x -> x.stream()).collect(Collectors.toList());
		System.out.println(res1);

		// 16. Java 8 : Consumer
		/*
		 * A Consumer is an in-build functional interface in the java.util.function
		 * package. we use consumers when we need to consume objects, the consumer takes
		 * an input value and returns nothing.
		 */
		Consumer<String> consumer = str -> System.out.println(str);
		strList.forEach(consumer);

		Consumer<Integer> evenCons = n -> {
			if (n % 2 == 0) {
				System.out.println(n);
			}
		};
		list.forEach(evenCons);

		// 17. Java 8 : Predicate
		// A Predicate is a functional interface, which accepts an argument and returns
		// a boolean. Usually, it is used to apply in a filter for a collection of
		// objects.

		Predicate<String> p = str -> str.contains("p");
		strList.stream().filter(p).forEach(System.out::println);

		Predicate<Integer> evenPredicate = n -> n % 2 == 0;
		list.stream().filter(evenPredicate).forEach(System.out::println);

		// 18. Java 8 : Function
		// A Function is another in-build functional interface in java.util.function
		// package,
		// the function takes an input value and returns a value. Mostly function used
		// in mapc
		// feature of stream APIs.

		Function<String, Character> func = str -> str.charAt(0);
		strList.stream().map(func).forEach(System.out::println);

		Function<Integer, String> func2 = n -> {
			if (n % 2 == 0)
				return "Even";
			else {
				return "Odd";
			}
		};
		list.stream().map(func2).forEach(System.out::println);

		// 19. Supplier
		// The Supplier Interface is a part of the java.util.function package. It
		// represents a
		// function that does not take in any argument but produces a value of type T.
		Supplier<String[]> supplier = () -> new String[] { "ONE", "TWO", "THREE" };
		Arrays.asList(supplier.get()).forEach(System.out::println);

		Predicate<String> myPredicate = str -> str.contains("a") || str.contains("g");
		Function<String, Character> func3 = str -> str.charAt(0);
		Consumer<Character> myConsumer = str -> System.out.println(str);
		strList.stream().filter(myPredicate).map(func3).forEach(myConsumer);

	}

}
