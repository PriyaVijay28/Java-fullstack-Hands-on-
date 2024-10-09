import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrl: './factorial.component.css'
})
export class FactorialComponent {
  factorials: { number: number; factorial: number }[] = [];
  fact:number=0
  generateFactorials() {
    this.factorials = [];
    for (let i = 0; i <= this.fact; i++) {
      this.factorials.push({ number: i, factorial: this.factorial(i) });
    }
  }

  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }
}

