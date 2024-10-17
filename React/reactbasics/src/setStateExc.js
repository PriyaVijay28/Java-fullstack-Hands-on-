import { Component } from "react"

export default class Sum extends Component{
    constructor(){
        super()
        this.state={
            num1:0,
            num2:0,
            sum:0

        }
       
    }
    render(){
        return(
            <div>
                <br></br><label>Num1</label>
                <input type="text" value={this.state.num1} onChange={(e)=>this.setState({num1:e.target.value})} ></input>
                <br></br><label>Num2</label>
                <input type="text" value={this.state.num2} onChange={(e)=>this.setState({num2:e.target.value})}/>
                <br></br>
                <button onClick={()=>this.setState({sum:parseInt(this.state.num1)+parseInt(this.state.num2)})}>Sum</button>
                <br></br><p>Sum: {this.state.sum}</p>
            </div>
            
        )
    }
}