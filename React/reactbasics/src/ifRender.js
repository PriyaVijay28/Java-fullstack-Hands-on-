/*export default function IfRender(props){
    let n=parseInt(props.input)
if(n%2===0){
    return <Even input={n}/>
}
else if(!n%2===0){
    return <Odd input={n}/>
}
return(
    <>
{(n%2==0) && <Even input={n}/>}
{!(n%2==0) && <Odd input={n}/>}

</>
)}*/

import { Component } from "react"

export default class Ternary extends Component{
    constructor(){
        super()
this.state={
    input:'',
    res:'',
    flag:false,
    flag1:false
}
    }
    find=()=>{
        this.setState({flag1:true})
        let num=parseInt(parseInt(this.state.input)%2)
        console.log("num "+num)
        this.setState({res:num})
        console.log("res:"+this.state.res)
        if(num===0){
            this.setState({flag:true})
           
            console.log("Even"+this.state.res)
        }
        else{
            this.setState({flag:false})
            
            console.log("Odd"+this.state.res)
        }
    }
    render(){
        return(
            <>
            <div>
                <label>Enter number</label>
                <input value={this.state.input} onChange={(e)=>this.setState({input:e.target.value})}></input>
               <br></br> <button onClick={this.find}>Find</button></div>
               <br></br>
               <p>res: {this.state.res}</p>
               {this.state.flag1 ? 
               <div>
                {this.state.flag? <Even input={this.state.input}/>: <Odd input={this.state.input}/>}
                </div>
                : ''
               }
            </>
        )
            }
        }
        
    

function Even(props){
return <b>{props.input} is even</b>
}
function Odd(props){
    return <b>{props.input} is odd</b>
    }