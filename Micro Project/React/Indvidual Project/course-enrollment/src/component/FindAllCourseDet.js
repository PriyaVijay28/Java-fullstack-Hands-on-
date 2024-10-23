import { Component } from "react";
import axios from "axios"

export default class Findall extends Component{
    constructor(){
       super()
       this.state={
        courseDet:[],
        error:''
       }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let url="http://localhost:3004/students"
        axios.get(url).then((Response)=>
            {
              this.setState({courseDet:Response.data})
            //   console.log("courseDet: "+courseDet)
            //   console.log("courseDet length: "+courseDet.length)
             
            }
        ).catch((error)=>console.log('Error : ',error))

    }
    render(){
        return(
            <>
           <button class="btn btn-success btn-lg" type="submit" onClick={this.handleSubmit}>FIND ALL</button>
          
          {(this.state.courseDet.length)>0 && (
            <>
           
            <table border="1" style={{ marginTop: "20px", width: "100%" }}>
                <thead>
                    <tr><td>ID</td><td>Name</td><td>Department</td><td>Course1</td><td>Course2</td></tr>
                </thead>
                <tbody>
                    {this.state.courseDet.map((cd)=>(
                        <tr key={cd.id}>
                         <td>{cd.id}</td>
                         <td>{cd.sname}</td>
                         <td>{cd.dept}</td>
                         <td>{cd.course1}</td>
                         <td>{cd.course2}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
</>
          )}
            </>
        )
    }
}
