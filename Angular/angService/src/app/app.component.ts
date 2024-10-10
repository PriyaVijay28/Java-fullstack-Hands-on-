import { Component, input } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { FactorialServiceService } from './factorial-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:String="Service"
  sum:number;
  subtract:number
  factorials:number[]=[]
  input:number=0
 
  constructor(private calc:CalculatorService,private fact:FactorialServiceService){ // Dependency Injection
this.sum=calc.getAddition(7,21)
this.subtract=calc.getSubtraction(277,132)

  }
  getFactorialValues(){
  this.factorials=this.fact.getFactorialValues(this.input)
  }
}
