import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  getAddition(num1:number,num2:number):number{
    return num1+num2
  }
  getSubtraction(num1:number,num2:number):number{
    return num1-num2
  }
}