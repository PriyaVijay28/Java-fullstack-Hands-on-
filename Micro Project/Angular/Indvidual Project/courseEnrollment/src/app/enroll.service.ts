import { Injectable } from '@angular/core';
import { CourseEnroll } from './model/CourseEnroll';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
url:string="http://localhost:3004/students/"
courseDet:CourseEnroll
courseDetails:CourseEnroll[]=[]

  constructor(private http:HttpClient) {
    this.courseDet=new CourseEnroll()
   }
  insertCourseDetails(data:CourseEnroll){
this.http.post(this.url,data).subscribe()
return "Enrolled successfully!!"
  }
  updateCourseDetails(data:CourseEnroll){
    this.http.put(this.url+data.id,data).subscribe()
    return "Updated successfully!!"
  }
  deleteCourseDetails(id:number){
    
    this.http.delete(this.url+id).subscribe()
    return "Deleted successfully!!"
  }
  findCourseDetails(id:number){
    
    this.http.get<CourseEnroll>(this.url+id).subscribe(det=>this.courseDet=det)
    console.log(this.courseDet)
    return this.courseDet
  }
  findAllCourseDetails(){
    this.http.get<CourseEnroll[]>(this.url).subscribe(det=>this.courseDetails=det)
    return this.courseDetails
  }
}
