package com.day6;

import java.util.Deque;
import java.util.LinkedList;
import java.util.Queue;

public class QueueDemo {

	public static void main(String[] args) {
		Queue<Integer> q = new LinkedList<>();
		q.offer(10);
		q.offer(40);
		q.offer(90);
		q.offer(100);
		q.offer(11);
		System.out.println(q);
		q.poll();
		System.out.println(q);
		
		
		Deque<Integer> dq = new LinkedList<>();
		dq.offer(23);
		dq.offer(42);
		dq.offer(23113);
		dq.offer(90);
		dq.offer(233);
		System.out.println(dq);
		dq.pollFirst();
		dq.pollLast();
		System.out.println(dq);
	}

}
