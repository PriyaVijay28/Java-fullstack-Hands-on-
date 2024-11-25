import { Component } from "react";
import axios from 'axios';

export default class FindEmpByName extends Component{
    constructor(){
        super()
        this.state={
            employees: [],
            ename:'',
            
            flag:false,
           
            errorEName:'',
            
        }
       
    }

    
    handleSubmit=(e)=>{
        e.preventDefault()
        
        let error=this.validateEName(this.state.ename)
        this.setState({errorEName:error})
        
       if(!error ){
        this.setState({flag:true})
        let url="http://localhost:1228/find-employee-name/"+this.state.ename
       console.log("url "+url)
       axios.get(url).then((Response)=>{console.log(Response.data);this.setState({ employees: Response.data })}).catch((error)=>console.log('Error ',error))

       }
    }
    changeName=(e)=>{

        this.setState({ename:e.target.value})
        let error=this.validateEName(this.state.ename)
        this.setState({errorEName:error})
     
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

    

    render(){
        return(
          <div >
            <form class="EmpForm">
            <div >
                <br></br>
                <div class='form-group'>
                <label class='text text-primary'>EName</label>
                <input type="text" class='form-control' value={this.state.ename} onChange={this.changeName}/></div>
                <font color='red'>{this.state.errorEName}</font>
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