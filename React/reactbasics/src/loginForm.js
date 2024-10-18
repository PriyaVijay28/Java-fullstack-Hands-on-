import { Component } from "react";

export default class LoginForm extends Component{
  
        constructor()
        {
            super();
            this.state={
                uname:'',
                pas:'',
                errorUName:'',
                errorPas:'',
                res:'',
                flag:false
            }
        }
        validatePas(pas){
            let re=/^[a-zA-Z]+$/;
   if(pas===''){
    return "Password is required"
   }
   else if(!re.test(pas)){
    return "Password is invalid"
   }
   else{
    return null
   }
        }
        validateUN(un){
            let re=/^[0-9\b]+$/;
       if(un===''){
        return "UserName is required"
       }
       else if(!re.test(un)){
        return "UserName is invalid"
       }
       else{
        return null
       }
        }
        changeUN=(e)=>{
           this.setState({uname:e.target.value})
           let error=this.validateUN(this.state.uname)
       this.setState({errorUName:error})

        }
        changePas=(e)=>{
            this.setState({pas:e.target.value})
           let error=this.validatePas(this.state.pas)
       this.setState({errorPas:error})

        }
        handleSubmit=(e)=>{
            e.preventDefault()
            
            let error=this.validateUN(this.state.uname)
            this.setState({errorUName:error})
            let error1=this.validatePas(this.state.pas)
            this.setState({errorPas:error1})
            
           if(!error && !error1){
            this.setState({flag:true})
           }
        }


        render(){
            return(
                <>
                <form>
                <div>
                <label>User Name</label>
                <input type="text" value={this.state.uname} onChange={this.changeUN}/>
                <font color='red'>{this.state.errorUName}</font>
                </div><br></br>
                <div>
                <label >Password</label>
                <input type='password' value={this.state.pas} onChange={this.changePas}/>
                <font color='red'>{this.state.errorPas}</font>
                </div> <br></br>
                <button type="submit" onClick={this.handleSubmit}>Submit</button><br></br>
               
                </form>
                <div>{this.state.flag?<font color='green'>Logged In Successfully!!</font>:''}</div><br></br>
                </>
            )
    }
}