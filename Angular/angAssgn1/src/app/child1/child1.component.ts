import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
title:String="I am the child of parent"
myStyle1:{}={"color":"blue","background-color":"yellowgreen","border":"1px solid green","width":"300px","height":"250px","position":"absolute","left":"30px"}
}
