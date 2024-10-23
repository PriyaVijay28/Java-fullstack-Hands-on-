import { Component } from "react";
import axios from 'axios';
import Employee from "../model/Employee";
export default class UpdateEmp extends Component{
    constructor(){
        super()
        this.state={
            eid:'',
            ename:'',
            esalary:'',
            flag:false,
            errorEID:'',
            errorEName:'',
            errorSalary:''
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
        let emp=new Employee
        emp.setId(this.state.eid)
        emp.setName(this.state.ename)
        emp.setSalary(this.state.esalary)
        let url="http://localhost:3004/employees/"+this.state.eid
       console.log("url "+url)
        axios.put(url,emp).then((Response)=>document.getElementById('ResultDiv1').innerHTML="<b>Record updated successfully!!</b>").catch((error)=>console.log('Error ',error))
        
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

    

    render(){
        return(
          <div >
            <form class="EmpForm">
            <div >
                <div class='form-group'>
                <label class='text text-primary'>EID</label>
                <input type="text" class='form-control' value={this.state.eid} onChange={this.changeID}/></div>
                <font color='red'>{this.state.errorEID}</font>
                </div><br></br>
                <div>
                    <div class='form-group'>
                <label class='text text-primary' for="ename">Ename</label>
                <input type="text" class='form-control' value={this.state.ename} onChange={this.changeName}/></div>
                <font color='red'>{this.state.errorEName}</font>
                </div> <br></br>
                <div>
                    <div class='form-group'>
                <label class='text text-primary'>Esalary</label>
                <input type="text" class='form-control' value={this.state.esalary} onChange={this.changeSalary}/></div>
                <font color='red'>{this.state.errorSalary}</font>

                </div>
                <button  class='btn btn-warning' type="submit" onClick={this.handleSubmit}>Update</button><br></br>
            </form>
            <div id="ResultDiv1"></div>
           <br></br>
                {this.state.flag?
                <div id="ResultDiv">
                <p>Employee ID : {this.state.eid}</p>
                 <p>Employee Name : {this.state.ename}</p>
                 <p>Employee Salary : {this.state.esalary}</p> 
            </div>:''
                
            }
            
            
          </div>
        );
    }
}