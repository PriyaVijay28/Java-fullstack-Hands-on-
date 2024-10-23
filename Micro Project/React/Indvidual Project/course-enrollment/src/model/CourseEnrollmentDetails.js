import axios from "axios"
export default class CourseEnrDet{
    id;
    sname;
    dept;
    course1;
    course2;
    setId(id){
      this.id=id
    }
    setSname(sname){
        this.sname=sname
      }
      setDept(dept){
        this.dept=dept
      }
      setCourse1(course1){
        this.course1=course1
      }
      setCourse2(course2){
        this.course2=course2
      }
      
}