import { Component } from "react";
import Employee from "../model/Employee";
import axios from "axios";
export default class DeleteEmpByName extends Component{
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
        
        let error=this.validateEName(this.state.ename)
        this.setState({errorEID:error})
        
       if(!error ){
        this.setState({flag:true})
       let url="http://localhost:1228/delete-employee-name/"+this.state.ename
       console.log("url "+url)
        axios.delete(url).then((Response)=>document.getElementById('ResultDiv1').innerHTML="<b>Record Deleted Successfully</b>").catch((error)=>console.log('Error ',error))
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
          <div class="EmpForm">
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
           <br></br>
                {this.state.flag?
                <div id="ResultDiv">
                <p>Employee ID : {this.state.ename} record Deleted</p>
                 
            </div>:''
                
            }
            
            
          </div>
        );
    }
}