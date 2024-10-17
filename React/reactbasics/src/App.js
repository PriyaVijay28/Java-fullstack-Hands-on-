
import { Component } from 'react';
import './App.css';
/*import Child3 from './Child3';
import Child6 from './Child6';

function App() {
  return (
    <div>
   <h1>Welcome to React</h1>
   <Child6/><br></br>
   <Child></Child>
   </div>
  );
}
function Child(){
  return(
    <>
      <b>Child Component</b>
      <Child2></Child2>
      </>

);
}
function Child2(){
  return(
    <>
  <b>Child2 Component</b> 
  <br></br>
  <Child4/>
  <Child3></Child3>
  </>
);
}
class Child4 extends Component{
  render(){    
    return(
      <div>
  <b>Child4 class component</b>
  <br></br>
  <Child5/>
  </div>
    );
  }
}
class Child5 extends Component{
  render(){    
    return(
      <div>
  <b>Child5 class component</b>
  </div>
    );
  }
}*/

class App extends Component{
  constructor(){
    super()
    this.state={
      num1:0,
      num2:0,
      op:'',
      res:0
    }
  }
   Calculate = () => {
    let operator = this.state.op;
    if(operator==='+'){
      this.setState({res : parseInt(this.state.num1)+parseInt(this.state.num2)})
    }
    if(operator==='-'){
      this.setState({res : parseInt(this.state.num1)-parseInt(this.state.num2)})
    }
    if(operator==='*'){
      this.setState({res : parseInt(this.state.num1)*parseInt(this.state.num2)})
    }
  }
  render(){
    return(
      <div>
        <p><label for="num1"><b>Num1</b></label>   <input type='text' value={this.state.num1} onChange={(e)=>this.setState({num1:e.target.value})} ></input></p><br></br>
        <p><label for="num2"><b>Num2</b></label>    <input type='text' value={this.state.num2} onChange={(e)=>this.setState({num2:e.target.value})}></input></p><br></br>
        <p><label for="operator"><b>Operator</b></label>
        <select onChange={(e)=>this.setState({op:e.target.value})}>
          <option value='+'>+</option>
          <option  value='-'>-</option>
          <option  value='*'>*</option>
          
        </select></p>
        <button onClick={this.Calculate}>Calculate</button>
        {/* <br></br> N1 {this.state.num1} N2 {this.state.num2} Op {this.state.op} */}
        <p>Result: {this.state.res}</p>
      </div>
    )
  }
}

export default App;
