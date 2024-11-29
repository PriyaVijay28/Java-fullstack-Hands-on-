import { Component } from "react";
import '../form.css'
import Employee from "../model/Employee";
import axios from 'axios';
import DepartmentOperation from "./DepartmentOperations";
import DepartmentInsert from "./DepartmentInsert";
import Department from "../model/Department";
export default class InsertEmp extends Component{
    
    constructor(){
        super()
        this.state={
            eid:'',
            ename:'',
            esalary:'',
            flag:false,
            errorEID:'',
            errorEName:'',
            errorSalary:'',
            deptId:'',
            errorDept:'',
            
        }
       
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        
        let error=this.validateEID(this.state.eid)
        this.setState({errorEID:error})
        let error1=this.validateEName(this.state.ename)
        this.setState({errorEName:error1})
        let error2=this.validateSalary(this.state.esalary)
       this.setState({errorSalary:error2})
       if(!error && !error1 && !error2){
        this.setState({flag:true})
        let emp=new Employee()
        emp.setId(this.state.eid)
        emp.setEmpName(this.state.ename)
        emp.setEmpSalary(this.state.esalary)
        emp.setDeptId(this.state.deptId);
        console.log(emp);
        axios.post("http://localhost:1228/create-employee",emp).then((Response)=>document.getElementById('ResultDiv1').innerHTML="<b>Record saved successfully</b>").catch((error)=>console.log('Error ',error))
        
       }
    }
    changeID=(e)=>{
        this.setState({eid:e.target.value})
        let error=this.validateEID(this.state.eid)
        this.setState({errorEID:error})

    }
    changeName=(e)=>{

       this.setState({ename:e.target.value})
       let error=this.validateEName(this.state.ename)
       this.setState({errorEName:error})
    
    }
    changeSalary=(e)=>
        {this.setState({esalary:e.target.value})
    let error=this.validateSalary(this.state.esalary)
       this.setState({errorSalary:error})

}
validateSalary(esal){
    let re=/^[0-9\b]+$/;
   if(esal===''){
    return "ESalary is required"
   }
   else if(!re.test(esal)){
    return "ESalary is invalid"
   }
   else{
    return null
   }
}

validateEName(ename){
    let re=/^[a-zA-Z]+$/;
   if(ename===''){
    return "EName is required"
   }
   else if(!re.test(ename)){
    return "EName is invalid"
   }
   else{
    return null
   }
}

    validateEID(eid){
        let re=/^[0-9\b]+$/;
       if(eid===''){
        return "EID is required"
       }
       else if(!re.test(eid)){
        return "EID is invalid"
       }
       else{
        return null
       }
    }

    changeDID=(e)=>{
        this.setState({deptId:e.target.value})
        let error=this.validateDID(this.state.deptId)
        this.setState({errorDept:error})

    }
    validateDID(deptId)
        {
            let re=/^[0-9\b]+$/;
           if(deptId===''){
            return "Dept ID is required"
           }
           else if(!re.test(deptId)){
            return "Dept ID is invalid"
           }
           else{
            return null
           }
        }

    

    render(){
        return(
          <div >
            
            <div class="container1">
            <form class="EmpForm"  >
            <div >
                <div class='form-group'>
                <label class='text text-primary'>EID</label>
                <input type="text" name="eid" class='form-control' value={this.state.eid} onChange={this.changeID}/></div>
                <font color='red'>{this.state.errorEID}</font>
                </div><br></br>
                <div>
                    <div class='form-group'>
                <label class='text text-primary' for="ename">Ename</label>
                <input type="text" name="ename" class='form-control' value={this.state.ename} onChange={this.changeName}/></div>
                <font color='red'>{this.state.errorEName}</font>
                </div> <br></br>
                <div>
                    <div class='form-group'>
                <label class='text text-primary'>Esalary</label>
                <input type="text" name="esal" class='form-control' value={this.state.esalary} onChange={this.changeSalary}/></div>
                <font color='red'>{this.state.errorSalary}</font>

                </div>

                <div>
                    <div class='form-group'>
                <label class='text text-primary'>Department ID</label>
                <input type="text" name="deptId" class='form-control' value={this.state.deptId} onChange={this.changeDID}/></div>
                <font color='red'>{this.state.errorDept}</font>

                </div>
                <button class='btn btn-primary' type="submit" onClick={this.handleSubmit}>Insert</button><br></br>
            </form>
            
            <div id="ResultDiv1"></div>
           <br></br>
                {this.state.flag?
                <div id="ResultDiv">
                <p>Employee ID : {this.state.eid}</p>
                 <p>Employee Name : {this.state.ename}</p>
                 <p>Employee Salary : {this.state.esalary}</p> 
                 <p>Employee Department : {this.state.deptId}</p> 
            </div>:''
            
                
            }
            </div>
            
            
          </div>
        );
    }
}