import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';
import { Department } from './model/Department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMSAapp';
  employee:Employee
  department : Department
  res:String=""
  empArr:Employee[]=[]
  deptArr:Department[]=[]
  flag:boolean=false
  flagDept : boolean=false
  constructor(private empService:EmployeeService){
    this.employee=new Employee()
    this.department=new Department
  }
  insertEmployee(data:any){
 this.employee.id=data.id
 this.employee.empName=data.empName
 this.employee.empSalary=data.empSalary
 this.employee.department.deptId=data.deptID
 console.log(this.employee)
 this.res=this.empService.insertEmployee(this.employee)

  }
  
  updateEmployee(data:any){
    this.employee.id=data.id
    this.employee.empName=data.empName
    this.employee.empSalary=data.empSalary
    this.employee.department.deptId=data.deptID
    this.res=this.empService.updateEmployee(this.employee)
   
     }
     
     deleteEmployee(data:any){
      this.res=this.empService.deleteEmployee(data.id)
     }
     deleteEmployeeByName(data:any){
      this.res=this.empService.deleteEmployeeByName(data.empName)
     }
     deleteEmployeeBySalary(data:any){
      this.res=this.empService.deleteEmployeeBySalary(data.empSalary)
     }
     
     findEmployee(data:any){
      let emp:Employee=this.empService.findEmployee(data.id)
      this.res="Emp ID is "+emp.id+" Emp name is : "+emp.empName+" Emp salary is : "+emp.empSalary+" Department is : "+emp.department.deptName
     }

     findEmployeeByName(data:any){
      this.empArr=this.empService.findEmployeeByName(data.empName);
      this.flag=true
     }

     findEmployeeBySalary(data:any){
      this.empArr=this.empService.findEmployeeBySalary(data.empSalary);
      this.flag=true
     }
     
     findAllEmployee(){
      this.empArr=this.empService.findAllEmployee()
      this.flag=true
     }

     insertDepartment(data:any){
     this.department.deptId=data.deptId
     this.department.deptName=data.deptName
      this.res=this.empService.insertDepartment(this.department)
     
       }

       updateDepartment(data:any){
        this.department.deptId=data.deptId
        this.department.deptName=data.deptName
         this.res=this.empService.updateDepartment(this.department)
        
          }

          deleteDepartment(data:any){
            this.res=this.empService.deleteDepartment(data.deptId)
           }
      
           findDepartment(data:any){
            console.log("Data "+data.deptId)
            let department:Department=this.empService.findDepartment(data.deptId)
            console.log(department)
            this.res="Department ID is "+department.deptId+" Department name is : "+department.deptName;
           }

           findAllDepartment(){
            this.deptArr=this.empService.findAllDepartment()
            this.flagDept=true
           }
      
}
