import './Parent.css'

export default function Parent(){
    return(
        <div class="parent">
            <p>I am a parent component</p>
            <Child1></Child1>
        </div>
    )
}

function Child1(){
    return(
        <div class="child1">
            <p>I am a child of parent component</p>
            <Child2></Child2>
        </div>
    )
}
function Child2(){
    return(
        <div class="child2">
            <p>I am a child of child component</p>
        </div>
    )
}