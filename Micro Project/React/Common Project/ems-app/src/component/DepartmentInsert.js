import { Component } from "react";

export default class DepartmentInsert extends Component{
constructor(){
    super();
    this.state={
        deptId : 0,
        deptName :'',
        errorDId: '',
        errorDName : '',
        flag : false

    }
}
    changeDID=(e)=>{
        this.setState({deptId:e.target.value})
        let error=this.validateDID(this.state.deptId)
        this.setState({errorDId:error})

    }
    changeDName=(e)=>{

       this.setState({deptName:e.target.value})
       let error=this.validateDName(this.state.deptName)
       this.setState({errorDName:error})
    
    }

    validateDName(deptName)
    {
        let re=/^[a-zA-Z]+$/;
       if(deptName===''){
        return "Dept Name is required"
       }
       else if(!re.test(deptName)){
        return "Dept Name is invalid"
       }
       else{
        return null
       }
    }
    
    validateDID(deptId)
        {
            let re=/^[0-9\b]+$/;
           if(deptId===''){
            return "Dept ID is required"
           }
           else if(!re.test(deptId)){
            return "Dept ID is invalid"
           }
           else{
            return null
           }
        }


render()
{
    return(

<div>
<div >
            <form class="DeptForm"  >

                <div class='form-group'>
                <label class='text text-primary'>Dept ID</label>
                <input type="text" name="eid" class='form-control' value={this.state.deptId} onChange={this.changeDID}/></div>
                <font color='red'>{this.state.errorDId}</font>
                <br></br>
                <div>
                    <div class='form-group'>
                <label class='text text-primary' for="ename">Dept Name</label>
                <input type="text" name="ename" class='form-control' value={this.state.deptName} onChange={this.changeDName}/></div>
                <font color='red'>{this.state.deptName}</font>
                </div> <br></br>
                
                <button class='btn btn-primary' type="submit" onClick={this.handleSubmit}>Insert</button>&nbsp;
                
            
            </form>

</div>

</div>



    )
}

}
