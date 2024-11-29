import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';
import { Department } from './model/Department';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url:string
employee:Employee
department : Department
empArr:Employee[]=[]
deptArr:Department[]=[]
  constructor(private http:HttpClient) { 
    this.url="http://localhost:1228/";
    this.employee=new Employee()
    this.department=new Department()
  }
  insertEmployee(employee:Employee){
    console.log("inside service")
    this.http.post(this.url+"create-employee",employee).subscribe()
    return "Employee details saved successfully!!"
  }
  
  updateEmployee(employee:Employee){
    this.http.put(this.url+"update-employee",employee).subscribe()
    return "Employee details updated successfully!!"
  }
  
  deleteEmployee(eid:number){
    this.http.delete(this.url+"delete-employee/"+eid).subscribe()
    return "Employee details deleted successfully!!"
  }

  deleteEmployeeByName(ename:String){
    this.http.delete(this.url+"delete-employee-name/"+ename).subscribe()
    return "Employee details deleted successfully!!"
  }

  deleteEmployeeBySalary(esalary:number){
    this.http.delete(this.url+"delete-employee-salary/"+esalary).subscribe()
    return "Employee details deleted successfully!!"
  }
 
  findEmployee(eid:number){
    
    this.http.get<Employee>(this.url+"find-employee/"+eid).subscribe(emp => this.employee = emp)
    return this.employee
  }

  findEmployeeByName(ename:String){
    
    this.http.get<Employee[]>(this.url+"find-employee-name/"+ename).subscribe(empArr => this.empArr = empArr)
    return this.empArr
  }

  findEmployeeBySalary(esalary:number){
    
    this.http.get<Employee[]>(this.url+"find-employee-salary/"+esalary).subscribe(empArr => this.empArr = empArr)
    return this.empArr
  }
   
  findAllEmployee(){
    this.http.get<Employee[]>(this.url+"findall-employee").subscribe(empArr => this.empArr = empArr)
    return this.empArr
  }
  insertDepartment(department : Department){
     this.http.post(this.url+"create-department",department).subscribe()
    return "Department details saved successfully!!"
  }
  updateDepartment(department : Department){
    this.http.put(this.url+"update-department",department).subscribe()
   return "Department details updated successfully!!"
 }
 deleteDepartment(deptID : number){
   this.http.delete(this.url+"delete-department/"+deptID).subscribe()
    return "Department details deleted successfully!!"
 }

 findDepartment(deptID:number){
    console.log("inside service")
  //  this.http.get<Department>(this.url+"find-department/"+deptID).subscribe(dept => this.department = dept)
  this.http.get<Department>(this.url+"find-department/"+deptID).subscribe(dep => this.department = dep);
  return this.department;
 }

 findAllDepartment(){
  this.http.get<Department[]>(this.url+"findall-department").subscribe(deptArr => this.deptArr = deptArr)
  return this.deptArr
}
    
} 
