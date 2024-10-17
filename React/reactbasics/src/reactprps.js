import { Component } from "react";

export default function Display(props){
    return(
        <div>
            <p>Display component with UID: {props.uid}</p><br></br>
            <ReactProps name="Priya" email="priya@gmail.com"></ReactProps><br></br>
            <Child location="Chennai"></Child>
        </div>
    )
}

class ReactProps extends Component{
    render(){return(
<div>
    <br></br><p>Name : {this.props.name}</p>
    <br></br><p>Name : {this.props.email}</p>
</div>);
    }

}
function Child(props){
    return(<>
         <b>Location : {props.location}</b><br></br>
         <b>Name : {props.name}</b>
         </>

    );
}
Child.defaultProps={
    name:"Priya Vijay"
}