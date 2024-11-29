import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepartmentInsert from "./DepartmentInsert";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class DepartmentOperation extends Component {
render(){
    return(
        <>
        
        <BrowserRouter>
        <div class="container">
        <div class='navLayout'>
        <ul class="navbar-nav">
            
            <li class="nav-item m-5 "><a class='nav-item nav-link m-5'>
            <Link to="/insert">Insert Department</Link></a>
        </li>
            
        </ul>
        </div>
        </div>
<Routes>
<Route path="/insert" element={<DepartmentInsert />} />
      </Routes>
        </BrowserRouter> 
        </>

    )
}
}
