import { Component } from "react";

export default class EmpForm extends Component{
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
          <div>
            <form>
            <div>
                <label>EID</label>
                <input type="text" value={this.state.eid} onChange={this.changeID}/>
                <font color='red'>{this.state.errorEID}</font>
                </div><br></br>
                <div>
                <label for="ename">Ename</label>
                <input type="text" value={this.state.ename} onChange={this.changeName}/>
                <font color='red'>{this.state.errorEName}</font>
                </div> <br></br>
                <div>
                <label>Esalary</label>
                <input type="text" value={this.state.esalary} onChange={this.changeSalary}/>
                <font color='red'>{this.state.errorSalary}</font>

                </div>
                <button type="submit" onClick={this.handleSubmit}>Submit</button><br></br>
            </form>
            <p>Flag:{this.state.flag}</p>
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