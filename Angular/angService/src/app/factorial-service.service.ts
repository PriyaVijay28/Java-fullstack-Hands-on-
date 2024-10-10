import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactorialServiceService {

  constructor() { }
  getFactorialValues(n:number){
    let res:number[]=[];
    for(let k=1;k<=n;k++){
      let fact:number=1
      for(let i=1;i<=k;i++){
        fact=fact*i
      }
      res[k-1]=fact
    }
    return res
  }
}
