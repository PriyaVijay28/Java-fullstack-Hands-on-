import { Component } from "react";
import Employee from "../model/Employee";
import axios from "axios";
export default class DeleteEmp extends Component{
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
       let url="http://localhost:3004/employees/"+this.state.eid
       console.log("url "+url)
        axios.delete(url).then((Response)=>document.getElementById('ResultDiv1').innerHTML="<b>Record Deleted Successfully</b>").catch((error)=>console.log('Error ',error))
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
          <div class="EmpForm">
            <form >
            <div >
                <div class='form-group'>
                <label class='text text-primary'>EID</label>
                <input type="text" class='form-control' value={this.state.eid} onChange={this.changeID}/></div>
                <font color='red'>{this.state.errorEID}</font>
                </div><br></br>
                
               
                <button  class='btn btn-danger' type="submit" onClick={this.handleSubmit}>Delete</button><br></br>
            </form>
            <div id="ResultDiv1"></div>
           <br></br>
                {this.state.flag?
                <div id="ResultDiv">
                <p>Employee ID : {this.state.eid} is Deleted</p>
                 
            </div>:''
                
            }
            
            
          </div>
        );
    }
}