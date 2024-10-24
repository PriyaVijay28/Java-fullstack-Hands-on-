import { Component } from "react";
import{BrowserRouter,Routes,Route,Link} from "react-router-dom"
import InsertEmp from "./InsertEmployee";
import UpdateEmp from "./UpdateEmployee";
import DeleteEmp from "./DeleteEmployee";
import FindEmp from "./FindEmployee";
import FindallEmp from "./FindallEmployee";
import '../form.css'

export default class EmployeeHome extends Component{
render(){
    return(
<>
<div>
<h1 class="navbar-text title1 cust-head">
      EMPLOYEE MANAGEMENT SYSTEM
    </h1>
</div>
<div class='container container-fluid'> 


<BrowserRouter>
<div class='container'>
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
    
</Routes>
</div> 
</BrowserRouter>


</div>


</>

    )
}
}