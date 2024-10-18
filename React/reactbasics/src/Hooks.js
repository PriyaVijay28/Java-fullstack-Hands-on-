import { useState } from "react";

 /*function Counter(){
    const[count,setCount]=useState(0)

    const inc=()=>setCount(count+1)
    const dec=()=>setCount(count-1)
    return(
        <div>
            <button onClick={()=>inc()}>Increment</button>
            <button onClick={()=>dec()}>Decrement</button>
            <p>Count:{count}</p>
        </div>

    )
}*/

export default function Welcome(){
    let[name,setName]=useState('')
   // let setNamefunc=(val)=>setName(val)
    return(
        <div>
            <label>Enter your name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <p>Welcome {name}</p>
        </div>
    )
}
