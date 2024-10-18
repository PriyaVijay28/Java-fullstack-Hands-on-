import  React,{useEffect, useState } from "react";


export default function LifeCycle(){
    const[count,setCount]=useState(0)
    useEffect(
        ()=>{document.getElementById('ResultDiv').innerHTML="You have clicked: "+count+" times"}
    )
    return(
<>
            <div id="ResultDiv">
            </div>
            <br></br>
            <button onClick={()=>setCount(count+1)}>Click Me!!</button>
            <p>Count: {count}</p>
            
            </>

    )
}