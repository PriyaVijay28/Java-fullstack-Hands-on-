import { Component } from "react";

export default class EmpForm extends Component{
    constructor(){
        super()
        this.state={
            eid:'',
            ename:'',
            esalary:'',
            flag:false
        }
       
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.setState({flag:true})
    }
    render(){
        return(
          <div>
            <form>
            <div>
                <label>EID</label>
                <input type="text" value={this.state.eid} onChange={(e)=>this.setState({eid:e.target.value})}/>
                </div><br></br>
                <div>
                <label for="ename">Ename</label>
                <input type="text" value={this.state.ename} onChange={(e)=>this.setState({ename:e.target.value})}/>
                </div> <br></br>
                <div>
                <label>Esalary</label>
                <input type="text" value={this.state.esalary} onChange={(e)=>this.setState({esalary:e.target.value})}/>

                </div>
                <button type="submit" onClick={this.handleSubmit}>Submit</button><br></br>
            </form>
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