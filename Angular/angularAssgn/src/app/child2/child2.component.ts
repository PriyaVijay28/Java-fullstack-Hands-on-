import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
title:String="I am a child of child component"
child2:{}={"color":"blue","font-weight":"bold","width":"200px","height":"150px"}
}
