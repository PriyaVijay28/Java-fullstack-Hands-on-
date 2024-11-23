package com.ems.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ems.bean.Employee;
import com.ems.repo.EmsRepository;

@Controller
public class EmsController {
	@Autowired
	EmsRepository repo;

	@RequestMapping("/employeeForm")
	public ModelAndView loadEmpForm() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("EmployeeForm");
		return mv;
	}

	@RequestMapping("/employee-data")
	public ModelAndView dataOperations(@ModelAttribute("emp") Employee emp) {
		ModelAndView mv = new ModelAndView();
		String btn = emp.getButton();
		if (btn.equalsIgnoreCase("insert")) {
			if (repo.insertData(emp)) {
				mv.addObject("msg", "Record Inserted Successfully");
				mv.setViewName("SuccessPage");
			} else {
				mv.setViewName("FailurePage");
			}
		}
		if (btn.equalsIgnoreCase("update")) {
			if (repo.updateData(emp)) {
				mv.addObject("msg", "Record Updated Successfully");
				mv.setViewName("SuccessPage");
			} else {
				mv.addObject("msg", "No such record to update");
				mv.setViewName("FailurePage");
			}
		}

		if (btn.equalsIgnoreCase("delete")) {
			if (repo.deleteData(emp.getId())) {
				mv.addObject("msg", "Record Deleted Successfully");
				mv.setViewName("SuccessPage");
			} else {
				mv.addObject("msg", "No such record to delete");
				mv.setViewName("FailurePage");
			}
		}

		if (btn.equalsIgnoreCase("find")) {
			Employee employee = repo.findData(emp.getId());
			if (employee != null) {
				mv.addObject("msg", employee);
				mv.setViewName("SuccessPage");
			} else {
				mv.addObject("msg", "No such record to display");
				mv.setViewName("FailurePage");
			}
		}

		if (btn.equalsIgnoreCase("findall")) {
			LinkedList<Employee> employee = repo.findAllData();
			if (employee != null) {
				mv.addObject("msg", employee);
				mv.setViewName("SuccessPage");
			} else {
				mv.addObject("msg", "No records to display");
				mv.setViewName("FailurePage");
			}
		}

		return mv;
	}

}
