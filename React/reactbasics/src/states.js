import { Component } from "react";

export default function ReactStates(){
    return(
<div>
    <ChildState name="Priya"></ChildState>
</div>
    )
}

class ChildState extends Component{
    constructor(){
        super()
        this.state={
         email:"priya@gmail.com",
         location:"Chennai"
        }
    }
    render(){
        return(
<div>
    <br></br><p>Name from props Component: {this.props.name}</p>
    <br></br><p>Email from state Component: {this.state.email}</p>
    <br></br><p>Email from state Component: {this.state.location}</p>
    <Child2 email={this.state.email}></Child2>
</div>
        )
    }
}
class Child2 extends Component{
    render(){
return(
    <div>
        <br></br><p>Email of child2: {this.props.email}</p>
    </div>
)
    }
}

