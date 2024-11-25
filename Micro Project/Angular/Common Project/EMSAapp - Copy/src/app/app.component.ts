import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMSAapp';
  employee:Employee
  res:String=""
  empArr:Employee[]=[]
  flag:boolean=false
  constructor(private empService:EmployeeService){
    this.employee=new Employee()
  }
  insertEmployee(data:any){
 this.employee.id=data.id
 this.employee.empName=data.empName
 this.employee.empSalary=data.empSalary
 this.res=this.empService.insertEmployee(this.employee)

  }
  updateEmployee(data:any){
    this.employee.id=data.id
    this.employee.empName=data.empName
    this.employee.empSalary=data.empSalary
    this.res=this.empService.updateEmployee(this.employee)
   
     }
     deleteEmployee(data:any){
      this.res=this.empService.deleteEmployee(data.id)
     }
     findEmployee(data:any){
      let emp:Employee=this.empService.findEmployee(data.id)
      this.res="Emp ID is "+emp.id+" Emp name is : "+emp.empName+" Emp salary is : "+emp.empSalary
     }
     findAllEmployee(){
      this.empArr=this.empService.findAllEmployee()
      this.flag=true
     }
}
