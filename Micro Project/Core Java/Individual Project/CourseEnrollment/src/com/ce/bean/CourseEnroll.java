package com.ce.bean;

public class CourseEnroll {
	int sid;
	String sname;
	String sdept;
	String course1;
	String course2;

	public CourseEnroll() {
		super();
	}

	public CourseEnroll(int sid, String sname, String sdept, String course1, String course2) {
		super();
		this.sid = sid;
		this.sname = sname;
		this.sdept = sdept;
		this.course1 = course1;
		this.course2 = course2;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public String getSdept() {
		return sdept;
	}

	public void setSdept(String sdept) {
		this.sdept = sdept;
	}

	public String getCourse1() {
		return course1;
	}

	public void setCourse1(String course1) {
		this.course1 = course1;
	}

	public String getCourse2() {
		return course2;
	}

	public void setCourse2(String course2) {
		this.course2 = course2;
	}
	
	

}
