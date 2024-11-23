package com.priya.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.priya.bean.User;

@Controller
public class UserController {

	@RequestMapping("/userDataSubmit")
	public ModelAndView loadUserData(@ModelAttribute("user") User user) {
		ModelAndView mv = new ModelAndView();
		if (user.getName().equalsIgnoreCase("admin") && user.getPassword().equals("12345")) {
			mv.setViewName("UserSuccessPage");
			mv.addObject("user", user);

		} else {
			mv.setViewName("UserFailurePage");
		}
		return mv;
	}

	@RequestMapping("/user")
	public ModelAndView loadUserLogin() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("Login");
		return mv;
	}
}
