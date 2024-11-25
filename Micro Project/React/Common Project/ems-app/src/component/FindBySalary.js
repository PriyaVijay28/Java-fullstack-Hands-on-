import { Component } from "react";
import axios from 'axios';
export default class FindEmpBySalary extends Component{
    constructor(){
        super()
        this.state={
            employees: [],
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
        
        let error=this.validateSalary(this.state.esalary)
        this.setState({errorSalary:error})
        
       if(!error ){
        this.setState({flag:true})
        let url="http://localhost:1228/find-employee-salary/"+this.state.esalary
       console.log("url "+url)
       axios.get(url).then((Response)=>{console.log(Response.data);this.setState({ employees: Response.data })}).catch((error)=>console.log('Error ',error))

       }
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
    

    render(){
        return(
          <div >
            <form class="EmpForm">
            <div >
                <br></br>
                <div class='form-group'>
                <label class='text text-primary'>Search by salary</label>
                <input type="text" class='form-control' value={this.state.esalary} onChange={this.changeSalary}/></div>
                <font color='red'>{this.state.errorEID}</font>
                </div><br></br>
                
               
                <button  class='btn btn-success' type="submit" onClick={this.handleSubmit}>Find</button><br></br>
            </form>
            <div id="ResultDiv1"></div>
            <ul> {this.state.employees.map(employee => (
                 <li key={employee.id}> <strong>ID:</strong> {employee.id} ,<br></br>
                  <strong>Name:</strong> {employee.empName}, <br></br>
                  <strong>Salary:</strong> {employee.empSalary} 
                  </li> ))} 
                  </ul>
           
                
                
            
            
            
          </div>
        );
    }
}