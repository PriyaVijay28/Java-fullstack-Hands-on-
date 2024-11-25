import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url:string
employee:Employee
empArr:Employee[]=[]
  constructor(private http:HttpClient) { 
    this.url="http://localhost:1228/";
    this.employee=new Employee()
  }
  insertEmployee(employee:Employee){
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
    
}
