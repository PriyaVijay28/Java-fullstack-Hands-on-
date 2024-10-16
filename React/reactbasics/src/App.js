
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
  render(){
    return(
      <div>
        <p><label for="num1"><b>Num1</b></label>   <input type='text'></input></p><br></br>
        <p><label for="num2"><b>Num2</b></label>    <input type='text'></input></p><br></br>
        <p><label for="operator"><b>Operator</b></label>   <input type='text'></input></p><br></br>
        <button>Calculate</button>
      </div>
    )
  }
}

export default App;
