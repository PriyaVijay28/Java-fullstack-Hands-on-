import { Component } from "react"
import CourseEnrDet from "../model/CourseEnrollmentDetails"
import axios from "axios"

export default class Update extends Component{
constructor(){
    
        super()
        this.state={
            id:'',
            sname:'',
            dept:'',
            course1:'',
            course2:'',
            errorSID:'',
            errorSName:'',
            errordept:'',
            errorcourse1:'',
            errorcourse2:'',
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
    
    
    changeName=(val)=>{
        this.setState({sname:val})
        console.log("name: "+this.state.sname)
           let error=this.validateSName(this.state.sname)
           this.setState({errorSName:error})
        
    }
    validateSName=(sname)=>{
        console.log("name in validate: "+sname)
        let re=/^[a-zA-Z]+$/;
       if(sname===''){
        return "Name is required"
       }
       else if(!re.test(sname)){
        return "Name is invalid"
       }
       else{
        return null
       }
    }
    
    changeDept=(val)=>{
        this.setState({dept:val})
           let error=this.validateDept(this.state.dept)
           this.setState({errordept:error})
        
    }
    validateDept=(dept)=>{
        let re=/^[a-zA-Z]+$/;
       if(dept===''){
        return "Department is required"
       }
       else if(!re.test(dept)){
        return "Department is invalid"
       }
       else{
        return null
       }
    }
    
    changecourse1=(val)=>{
        this.setState({course1:val})
           let error=this.validateCourse1(this.state.course1)
           this.setState({errorcourse1:error})
        
    }
    validateCourse1=(course1)=>{
        let re=/^[a-zA-Z]+$/;
       if(course1===''){
        return "course is required"
       }
       else if(!re.test(course1)){
        return "course is invalid"
       }
       else{
        return null
       }
    }
    
    changecourse2=(val)=>{
        this.setState({course2:val})
           let error=this.validateCourse2(this.state.course2)
           this.setState({errorcourse2:error})
        
    }
    validateCourse2=(course2)=>{
        let re=/^[a-zA-Z]+$/;
       if(course2===''){
        return "course is required"
       }
       else if(!re.test(course2)){
        return "course is invalid"
       }
       else{
        return null
       }
    }
    
    handleSubmit=(e)=>{
        let error1=this.state.errorSID
        this.setState({errorSID:error1})
        let error2=this.state.errorSName
        this.setState({errorSName:error2})
        let error3=this.state.errordept
        this.setState({errordept:error3})
        let error4=this.state.errorcourse1
        this.setState({errorcourse1:error4})
        let error5=this.state.errorcourse2
        this.setState({errorcourse2:error5})
        if(!error1 && !error2 && !error3 && !error4 && !error5){
            e.preventDefault()
            this.setState({flag:true})
            const courseDet=new CourseEnrDet()
            courseDet.setId(this.state.id)
            courseDet.setSname(this.state.sname)
            courseDet.setDept(this.state.dept)
            courseDet.setCourse1(this.state.course1)
            courseDet.setCourse2(this.state.course2)
            let url="http://localhost:3004/students/"+this.state.id
            axios.put(url,courseDet).then((Response)=>{document.getElementById('ResultDiv1').innerHTML="Record updated Successfully"}).catch((error)=>console.log('Error ',error))

        }
    }

render(){
    return(
        <>
        <div >
            <form class='container'  >
            <div class="row">
                <div class='form-group col-xs-5'>
                <label class='text text-primary'>Student ID</label>
                <input type="text" name="id" class='form-control' value={this.state.id} onChange={(e)=>this.changeID(e.target.value)}/></div>
                <font color='red'>{this.state.errorSID}</font>
                </div>
                <div class="row">
                    <div class='form-group col-xs-5'>
                <label class='text text-primary' for="sname">Student name</label>
                <input type="text" name="sname" class='form-control' value={this.state.sname} onChange={(e)=>this.changeName(e.target.value)}/></div>
                <font color='red'>{this.state.errorSName}</font>
                </div> 
                <div class="row">
                    <div class='form-group col-xs-5'>
                <label class='text text-primary'>Department</label>
                <input type="text" name="dept" class='form-control' value={this.state.dept} onChange={(e)=>this.changeDept(e.target.value)}/></div>
                <font color='red'>{this.state.errordept}</font>

                </div>
                <div class="row">
                    <div class='form-group col-xs-5'>
                <label class='text text-primary'>Course1</label>
                <input type="text" name="course1" class='form-control' value={this.state.course1} onChange={(e)=>this.changecourse1(e.target.value)}/></div>
                <font color='red'>{this.state.errorcourse1}</font>

                </div>
                <div class="row">
                    <div class='form-group  col-xs-5'>
                <label class='text text-primary'>Course2</label>
                <input type="text" name="course2" class='form-control' value={this.state.course2} onChange={(e)=>this.changecourse2((e.target.value))}/></div>
                <font color='red'>{this.state.errorcourse2}</font></div>
                <button class="btn btn-warning" type="submit" onClick={this.handleSubmit}>Update</button>
                
                </form>
                </div>

                <div id="ResultDiv1"></div>
           <br></br>
                {this.state.flag?
                <div id="ResultDiv">
                <p>Student ID : {this.state.id}</p>
                 <p>Student Name : {this.state.sname}</p>
                 <p>Dept : {this.state.dept}</p> 
            </div>:''}
        
        </>
    )
}
}