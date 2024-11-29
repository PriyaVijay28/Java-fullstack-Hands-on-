package com.ems.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ems.model.Department;
import com.ems.repo.DepartmentRepo;

@RestController
//@CrossOrigin(origins = "http://localhost:4200/")
@CrossOrigin(origins = "http://localhost:3000/")
public class DepartmentController {
	private DepartmentRepo repo;
	@Autowired
	public DepartmentController(DepartmentRepo repo) {
	this.repo= repo;
	}

	@PostMapping("/create-department")
	// @RequestMapping(method = RequestMethod.POST)
	public void doInsert(@RequestBody Department department) {
		System.out.println(department);
		repo.save(department);

	}

	@PutMapping("/update-department")
	// @RequestMapping(method = RequestMethod.POST)
	public void doUpdate(@RequestBody Department department) {
		repo.save(department);

	}

	@DeleteMapping("/delete-department/{id}")
	public void doDelete(@PathVariable("id") int id) {
		repo.deleteById(id);

	}
	
	@GetMapping("/find-department/{deptId}")
	public Department doFind(@PathVariable("deptId") int deptId) {
		System.out.println("Inside java");
		return repo.findById(deptId).get();

	}
	
	@GetMapping("/findall-department")
	public List<Department> doFind() {
		return (List<Department>) repo.findAll();

	}
	

	}


