package com.priya.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.priya.bean.Employee;

@Controller
public class MyController {
	@RequestMapping("/welcome")
	public ModelAndView sayWelcome() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("Welcome");
		return mv;
	}

	@RequestMapping("/hello")
	public ModelAndView sayHello() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("Hello");
		return mv;
	}

	@RequestMapping("/employee")
	public ModelAndView loadEmployeeForm() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("EmployeeForm");
		return mv;
	}

	@RequestMapping("/employee-data")
	public ModelAndView readEmployeeData(@ModelAttribute("emp") Employee emp) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("EmployeeDetails");
		mv.addObject("emp", emp);
		return mv;
	}
}
