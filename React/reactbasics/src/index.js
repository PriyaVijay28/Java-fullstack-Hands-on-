import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Display from './reactprps';
import ReactStates from './states';
import UpdateReact from './updateReact';
import Sum from './setStateExc';
import EmpForm from './EmpForm';
import LoginForm from './loginForm';
import Ternary from './ifRender';
import Welcome from './Hooks';
import LifeCycle from './compLife';
import Ref from './useRef';
import Style from './styleExc';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    <EmpForm/>
    <Style/>
    <Ref/>
    <LifeCycle/>
     <Welcome/>
    <Ternary/>
    <LoginForm/>
   
    <App />
    <Display uid="123"/>
   <ReactStates/>
   <UpdateReact/>
   <Sum/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
