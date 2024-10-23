import { Component } from "react";
import{BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Insert from "./InsertCourseDet";
import Update from "./UpdateCourseDet";
import Delete from "./DeleteCourseDet";
import Find from "./FindCourseDet";
import Findall from "./FindAllCourseDet";


export default class HomePage extends Component{
render(){
    return(
<>
<div class="headr">
<h1>
    <center>  COURSE ENROLLMENT</center>
    </h1><br></br> <br></br> 
</div>
<div class='container'>
    <div class="row">


<BrowserRouter>


<div class="col-sm-5">

<div class="tabdec">
    <table class="table " >
        <thead class="table-dark">
        <tr><th>Operations</th><th>Click Me!!</th></tr></thead>
        <tbody>
        <tr><td>Insert</td><td><button class="btn btn-primary btn-lg  "><Link to="/insert">INSERT</Link></button></td></tr>
        <tr><td>Update</td><td><button class="btn btn-warning btn-lg  "><Link to="/update">UPDATE</Link></button></td></tr>
        <tr><td>Delete</td><td><button class="btn btn-danger btn-lg"><Link to="/delete">DELETE</Link></button></td></tr>
        <tr><td>Find</td><td><button class="btn btn-warning btn-lg"><Link to="/find">FIND</Link></button></td></tr>
        <tr><td>Find All</td><td><button class="btn btn-info btn-lg"><Link to="/findall">FIND ALL</Link></button></td></tr>
        </tbody>
    </table>
    </div>
    </div>
   

<div class="col-sm-7 cust-form">


<Routes>
    <Route path="/insert" element={<Insert/>}></Route>
    <Route path="/update" element={<Update/>}></Route>
    <Route path="/delete" element={<Delete/>}></Route>
    <Route path="/find" element={<Find/>}></Route>
    <Route path="/findall" element={<Findall/>}></Route>
    
</Routes>

</div>
</BrowserRouter>


</div>
</div> 

</>

    )
}
}