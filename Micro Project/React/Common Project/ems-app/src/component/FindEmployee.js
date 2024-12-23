import { Component } from "react";
import axios from 'axios';
export default class FindEmp extends Component{
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
        
       if(!error ){
        this.setState({flag:true})
        let url="http://localhost:1228/find-employee/"+this.state.eid
       console.log("url "+url)
       axios.get(url).then((Response)=>{console.log(Response.data);document.getElementById('ResultDiv1').innerHTML="<b>Record Fetched</b><br> ID : " + Response.data.id+" ,<br/> Name : "+ Response.data.empName+" ,<br/> Salary : "+ Response.data.empSalary+"<br>Department ID : "+Response.data.department.deptId+ "<br>Department Name : "+Response.data.department.deptName}).catch((error)=>console.log('Error ',error))

       }
    }
    changeID=(e)=>{
        this.setState({eid:e.target.value})
        let error=this.validateEID(this.state.eid)
        this.setState({errorEID:error})

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
                <br></br>
                <div class='form-group'>
                <label class='text text-primary'>EID</label>
                <input type="text" class='form-control' value={this.state.eid} onChange={this.changeID}/></div>
                <font color='red'>{this.state.errorEID}</font>
                </div><br></br>
                
               
                <button  class='btn btn-success' type="submit" onClick={this.handleSubmit}>Find</button><br></br>
            </form>
            <div id="ResultDiv1"></div>
           
                
                
            
            
            
          </div>
        );
    }
}