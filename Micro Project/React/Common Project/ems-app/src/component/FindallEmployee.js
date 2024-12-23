import { Component } from "react";
import axios from "axios";
import Employee from "../model/Employee";
export default class FindallEmp extends Component{
    constructor(){
        super()
        this.state={
            employees:[],
            error:''
        }
    }
    handleSubmit=()=>{
      axios.get("http://localhost:1228/findall-employee").then((Response)=>{
        const employees=Response.data;
        console.log("Emp: "+employees)
        if (employees.length > 0) {
            this.setState({ employees, error: '' });
          } else {
            this.setState({ error: "No employees found." });
          }
    }).catch((error)=>console.log('Error ',error));
    }
    render(){
        return(
            <div>
        
        <button class='btn btn-success' onClick={this.handleSubmit}>Find All Employees</button>
        <div>
          {this.state.error && (
            <p style={{ color: "red" }}><b>{this.state.error}</b></p>
          )}
          {this.state.employees.length > 0 && (
            <table border="1" style={{ marginTop: "20px", width: "100%" }}>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Employee Salary</th>
                  <th>Employee DeptID</th>
                  <th>Employee DeptName</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.empName}</td>
                    <td>{employee.empSalary}</td>
                    <td>{employee.department.deptId}</td>
                    <td>{employee.department.deptName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
        
            

        
    }
