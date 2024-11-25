//import axios from 'axios';

export default class Employee{
    id;
    empName;
    empSalary;
    constructor(){
        this.id=0;
        this.empName='';
        this.empSalary=0
    }
        setId(id){
            this.id=id;
        }
        setEmpName(empName){
            this.empName=empName;
        }
        setEmpSalary(empSalary){
            this.empSalary=empSalary;
        }
    
}