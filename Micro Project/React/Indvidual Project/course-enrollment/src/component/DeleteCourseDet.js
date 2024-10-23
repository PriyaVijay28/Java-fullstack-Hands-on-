import { Component } from "react";
import axios from "axios"

export default class Delete extends Component{
    constructor(){
        super()
        this.state=
        {
            id:'',
            flag:false
        }
        

    }
    changeID=(val)=>{
        this.setState({id:val})
        let error=this.validateSID(this.state.id)
        this.setState({errorSID:error})
    
    }
    validateSID=(sid)=>{
        let re=/^[0-9\b]+$/;
        if(sid===''){
         return "ID is required"
        }
        else if(!re.test(sid)){
         return "ID is invalid"
        }
        else{
         return null
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        let error=this.validateSID(this.state.id)
        if(!error){
            this.setState({flag:true})
            let url="http://localhost:3004/students/"+this.state.id
            axios.delete(url).then((Response)=>{document.getElementById('ResultDiv1').innerHTML="Record Deleted Successfully"}).catch((error)=>console.log('Error ',error))
            
        }
    }
   
render(){
        return(
            <>
            <form class='container'  >
            <div class="row">
                <div class='form-group col-xs-5'>
                <label class='text text-primary'>Student ID</label>
                <input type="text" name="id" class='form-control' value={this.state.id} onChange={(e)=>this.changeID(e.target.value)}/></div>
                <font color='red'>{this.state.errorSID}</font>
                </div><br></br>
                
                <button class="btn btn-danger" type="submit" onClick={this.handleSubmit}>Delete</button>
                </form>
                <br></br>
                <div id="ResultDiv1"></div>
            </>
        )
    }
}
