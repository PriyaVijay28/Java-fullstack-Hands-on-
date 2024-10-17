import { Component } from "react";

export default class UpdateReact extends Component{
    constructor(){
        super()
        this.state={
            name:''
        }
    }
    render(){
        return(
            <div>
                <br></br>
                <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}></input>
                <br></br><p>Welcome {this.state.name}</p>
            </div>
        )
    }
}