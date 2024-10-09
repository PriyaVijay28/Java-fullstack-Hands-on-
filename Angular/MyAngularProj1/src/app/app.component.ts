import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  fname:String=""
  name: String="Priya"
  age:number=23
  salary:any=15000.25
  imagePath:String="cat.jpg"
  width:number=200
  height:number=200
  btnText:String="Get FullName"

  getAddition(num1:number,num2:number):number{
    let sum=num1+num2
    return sum
  }
  changeName(){
    this.name="Priya Vijay"
  }
  changeImage(){
    if(this.imagePath=="cat.jpg"){
      this.imagePath="cow.jpg";
      
   }else{
   this.imagePath="cat.jpg";
   }
 }
   
 
}
