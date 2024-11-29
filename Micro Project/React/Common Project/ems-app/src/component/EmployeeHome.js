import { Component } from "react";
import{BrowserRouter,Routes,Route,Link} from "react-router-dom"
import InsertEmp from "./InsertEmployee";
import UpdateEmp from "./UpdateEmployee";
import DeleteEmp from "./DeleteEmployee";
import FindEmp from "./FindEmployee";
import FindallEmp from "./FindallEmployee";
import '../form.css'
import FindEmpByName from "./FindEmployeeByName";
import DeleteEmpByName from "./DeleteByName";
import FindEmpBySalary from "./FindBySalary";
import DeleteEmpBySalary from "./DeleteBySalary";
import DepartmentOperation from "./DepartmentOperations";

export default class EmployeeHome extends Component{
render(){
    return(
<>
<div>
<h1 class="navbar-text title1 cust-head">
      EMPLOYEE MANAGEMENT SYSTEM
    </h1>
</div>
{/* <div class="row">
<div class="container col-md-6">
<DepartmentOperation/>
</div> */}
<div class='container ' > 


<BrowserRouter>
<div >
<nav class="navbar navbar-expand-lg navbar-light bg-dark">


<div class='navLayout'>
    <ul class="navbar-nav ">
        <li class="nav-item m-5 "><a class='nav-item nav-link m-5'>
            <Link to="/insert">Insert</Link></a>
        </li>
        <li class="nav-item m-5"><a a class='nav-item nav-link m-5'>
            <Link to="/update">Update</Link></a>
        </li>
        <li class="nav-item m-5">
          <a class="nav-item nav-link">  <Link to="/delete">Delete</Link></a>
        </li>
        <li class="nav-item"><a class="nav-item nav-link">
            <Link to="/find">Find</Link></a>
        </li>
        <li class="nav-item"><a class="nav-item nav-link">
            <Link to="/findall">Find All</Link></a>
        </li>
        
        {/* <li class="nav-item"><a class="nav-item nav-link">
            <Link to="/findbyname">FindBy Name</Link></a>
        </li>
        <li class="nav-item"><a class="nav-item nav-link">
            <Link to="/deletebyname">DeleteBy Name</Link></a>
        </li>
        <li class="nav-item"><a class="nav-item nav-link">
            <Link to="/findbysalary">FindBy salary</Link></a>
        </li>
        <li class="nav-item"><a class="nav-item nav-link">
            <Link to="/deletebysalary">DeleteBy salary</Link></a>
        </li> */}
    </ul>
    
    </div>
    </nav> 
    
</div>


<div class="cust-form">
<Routes>
    <Route path="/insert" element={<InsertEmp/>}></Route>
    <Route path="/update" element={<UpdateEmp/>}></Route>
    <Route path="/delete" element={<DeleteEmp/>}></Route>
    <Route path="/find" element={<FindEmp/>}></Route>
    <Route path="/findall" element={<FindallEmp/>}></Route>
    <Route path="/findbyname" element={<FindEmpByName/>}></Route>
    <Route path="/deletebyname" element={<DeleteEmpByName/>}></Route>
    <Route path="/findbysalary" element={<FindEmpBySalary/>}></Route>
    <Route path="/deletebysalary" element={<DeleteEmpBySalary/>}></Route>
    
</Routes>
</div> 
</BrowserRouter>


</div>



</>

    )
}
}