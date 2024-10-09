import { Component } from '@angular/core';

@Component({
  selector: 'app-struc-dir',
  templateUrl: './struc-dir.component.html',
  styleUrl: './struc-dir.component.css'
})
export class StrucDirComponent {
flag:boolean=true
pet:String[]=["cat","cow","birds"]
selectedItem1:String=""
myStyle:{}={"color":"green","font-weight":"bold"}
myClass:String="MyClass1"

changeFlag(){
  this.flag=!this.flag
}
selectedItem(item:String){
this.selectedItem1=item
}
changeStyle(){
  this.myStyle={"color":"red","font-style":"italic"}
}
changeClass(){
  this.myClass="MyClass2"
}
}
