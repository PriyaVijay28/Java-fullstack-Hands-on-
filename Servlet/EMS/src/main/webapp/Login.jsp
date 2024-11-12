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
		<h1>Employee Management Form:</h1><br>
		<div class="card">
			<div class="card-body" style="background-color: pink">
				<form action="EmployeeController" method="post">
					<div class="form-group row">
						<label for="eid" class="col-sm-3 col-form-label">Enter
							Employee ID</label>

						<div class="col-sm-7">
							<input type="text" class="form-control" name="eid">
						</div>
					</div>
	
					<div class="form-group row">
						<label for="ename" class="col-sm-3 col-form-label">Enter
							Employee Name</label>

						<div class="col-sm-7">
							<input type="text" name="ename" class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="esalary" class="col-sm-3 col-form-label">Enter
							Employee Salary</label>

						<div class="col-sm-7">
							<input type="text" class="form-control" name="esal">
						</div>
					</div>
					<input type="submit" value="Insert" name="btn"
						class="btn btn-primary">&nbsp <input type="submit"
						value="Update" name="btn" class="btn btn-warning"> &nbsp<input
						type="submit" value="Delete" name="btn" class="btn btn-danger">&nbsp
					<input type="submit" value="Find" name="btn" class="btn btn-info">&nbsp
					<input type="submit" value="FindAll" name="btn"
						class="btn btn-success">
				</form>
			</div>
		</div>
	</div>
</body>
</html>