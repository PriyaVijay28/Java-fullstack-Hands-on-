import { Component } from '@angular/core';
import { CourseEnroll } from './model/CourseEnroll';
import { EnrollService } from './enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'courseEnrollment';
  courseDet:CourseEnroll
  course:CourseEnroll[]=[]
  res:string=""
  flag:boolean=false
  constructor(private courseEnr:EnrollService){
    this.courseDet=new CourseEnroll()
  }
  insertCourseDetails(data:any){
    this.courseDet.id=data.id
    this.courseDet.sname=data.sname
    this.courseDet.dept=data.dept
    this.courseDet.course1=data.course1
    this.courseDet.course2=data.course2
    this.res=this.courseEnr.insertCourseDetails(this.courseDet)

  }
  updateCourseDetails(data:any){
    this.courseDet.id=data.id
    this.courseDet.sname=data.sname
    this.courseDet.dept=data.dept
    this.courseDet.course1=data.course1
    this.courseDet.course2=data.course2
    this.res=this.courseEnr.updateCourseDetails(this.courseDet)

  }
  deleteCourseDetails(id:number){
    this.res=this.courseEnr.deleteCourseDetails(id)
  }
  findCourseDetails(id:number){
    this.courseDet=this.courseEnr.findCourseDetails(id)
    this.res="Name: "+this.courseDet.sname+" ,Department: "+this.courseDet.dept+" ,Course1: "+this.courseDet.course1+" ,Course2: "+this.courseDet.course2
  }
  findAllCourseDetails(){
this.course=this.courseEnr.findAllCourseDetails()
console.log(this.course)
this.flag=true
  }
}
