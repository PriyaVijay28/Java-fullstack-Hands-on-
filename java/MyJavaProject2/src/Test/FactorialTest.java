package Test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import Junit.Factorial;

import static org.junit.Assert.*;





public class FactorialTest {

	@Test
	public void test() {
		Factorial fac = new Factorial();
		int actual = fac.factorial(5);
		int expected = 120;
		assertEquals(expected, actual);
	}

}