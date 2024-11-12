<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body>

	<div class="container">
		<h1 style="text-align: center">Course Enrollment Form</h1>
		<br>
		<div class="card">
			<div class="card-body" style="background-color: #ffa500">
				<form action="CourseController" method="post">

					<div class="form-group row">
						<label for="sid" class="col-sm-2 col-form-label">Student
							ID</label>
						<div class="col-sm-7">
							<input type="text" class="form-control" name="sid"
								placeholder="Enter your ID">
						</div>
					</div>

					<div class="form-group row">
						<label for="Name" class="col-sm-2 col-form-label">Student
							Name</label>
						<div class="col-sm-7">
							<input type="text" class="form-control" name="sname"
								placeholder="Enter name">
						</div>
					</div>

					<div class="form-group row">
						<label for="dept" class="col-sm-2 col-form-label">Department</label>
						<div class="col-sm-7">
							<input type="text" class="form-control" name="dept"
								placeholder="Enter Department">
						</div>
					</div>

					<div class="form-group row">
						<label for="course1" class="col-sm-2 col-form-label">course1</label>
						<div class="col-sm-7">
							<input type="text" class="form-control" name="course1"
								placeholder="Enter course1">
						</div>
					</div>

					<div class="form-group row">
						<label for="course2" class="col-sm-2 col-form-label">course2</label>
						<div class="col-sm-7">
							<input type="text" class="form-control" name="course2"
								placeholder="Enter course2">
						</div>
					</div>
					<div style="text-align: center">
						<button type="submit" class="btn btn-primary" name="btn"
							value="insert">Insert</button>
						&nbsp&nbsp
						<button type="submit" class="btn btn-warning" name="btn"
							value="update">Update</button>
						&nbsp &nbsp
						<button type="submit" class="btn btn-danger" name="btn"
							value="delete">Delete</button>
						&nbsp&nbsp
						<button type="submit" class="btn btn-info" name="btn" value="find">Find</button>
						&nbsp&nbsp
						<button type="submit" class="btn btn-success" name="btn"
							value="findall">Find All</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>
</html>