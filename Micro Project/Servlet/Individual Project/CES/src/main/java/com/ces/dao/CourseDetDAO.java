package com.ces.dao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;

import com.ces.bean.CourseEnroll;
import com.ces.util.DBUtil;

public class CourseDetDAO {

	Connection con = DBUtil.getDBConnection();
	int n = 0;
	String sql;

	public int insertCourseDetails(CourseEnroll ce) {
		try {
			sql = "insert into courseDet values(?,?,?,?,?)";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, ce.getSid());
			ps.setString(2, ce.getSname());
			ps.setString(3, ce.getSdept());
			ps.setString(4, ce.getCourse1());
			ps.setString(5, ce.getCourse2());
			n = ps.executeUpdate();
		} catch (Exception e) {
			System.out.println(e);
		}
		return n;
	}

	public int deleteCourseDetail(int id) {
		try {
			sql = "Delete from courseDet where sid=?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, id);
			n = ps.executeUpdate();
		} catch (Exception e) {
			System.out.println(e);
		}
		return n;
	}

	public int updateCourseDetails(CourseEnroll ce) {
		try {
			sql = "update courseDet set sname = ?, sdept = ?, course1=?, course2=? where sid = ?";
			PreparedStatement ps = con.prepareStatement(sql);

			ps.setString(1, ce.getSname());
			ps.setString(2, ce.getSdept());
			ps.setString(3, ce.getCourse1());
			ps.setString(4, ce.getCourse2());
			ps.setInt(5, ce.getSid());
			n = ps.executeUpdate();

		} catch (Exception e) {
			System.out.println(e);
		}
		return n;

	}

	public CourseEnroll findCourseDetail(int sid) {
		CourseEnroll ce = new CourseEnroll();
		try {
			sql = "select * from courseDet where sid = ?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, sid);
			ResultSet res = ps.executeQuery();
			if (res.next()) {
				ce.setSid(res.getInt("sid"));
				ce.setSname(res.getString("sname"));
				ce.setSdept(res.getString("sdept"));
				ce.setCourse1(res.getString("course1"));
				ce.setCourse2(res.getString("course2"));
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return ce;

	}

	public List<CourseEnroll> findallCourseDetails() {
		List<CourseEnroll> courselist = new LinkedList<>();
		try {
			sql = "select * from courseDet";
			PreparedStatement ps = con.prepareStatement(sql);
			ResultSet res = ps.executeQuery();
			while (res.next()) {
				CourseEnroll course = new CourseEnroll();
				course.setSid(res.getInt("sid"));
				course.setSname(res.getString("sname"));
				course.setSdept(res.getString("sdept"));
				course.setCourse1(res.getString("course1"));
				course.setCourse2(res.getString("course2"));
				courselist.add(course);
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return courselist;

	}

}
