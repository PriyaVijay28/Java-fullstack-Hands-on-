import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
title:String="I am a child of child component"
mystyle:{}={"color":"blue","background-color":"yellow","border":"1px solid green","width":"200px","height":"150px","position":"absolute","left":"30px"}
}
