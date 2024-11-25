import { Component } from "react";
import axios from 'axios';
export default class DeleteEmpBySalary extends Component{
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
        let url="http://localhost:1228/delete-employee-salary/"+this.state.esalary
       console.log("url "+url)
       axios.delete(url).then((Response)=>document.getElementById('ResultDiv1').innerHTML="<b>Record Deleted Successfully</b>").catch((error)=>console.log('Error ',error))
      
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
                <label class='text text-primary'>Delete by salary</label>
                <input type="text" class='form-control' value={this.state.esalary} onChange={this.changeSalary}/></div>
                <font color='red'>{this.state.errorEID}</font>
                </div><br></br>
                
               
                <button  class='btn btn-success' type="submit" onClick={this.handleSubmit}>Find</button><br></br>
            </form>
            
           <div id="ResultDiv1"></div>
                
                
            
            
            
          </div>
        );
    }
}