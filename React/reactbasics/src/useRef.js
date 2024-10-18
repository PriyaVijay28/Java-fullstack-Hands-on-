import { useRef } from "react";

export default function Ref(){
    const myRef=useRef()
    const handleClick=()=>{
               myRef.current.focus()
    }
    return(
        <>
        <input ref={myRef} type="text"/>
        <button onClick={handleClick}>Focus Input</button>
        </>
    )
}