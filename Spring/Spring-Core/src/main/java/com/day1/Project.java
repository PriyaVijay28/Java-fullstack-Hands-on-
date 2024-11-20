package com.day1;

public class Project {
	private String projectName;
	private String language;

	public Project() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Project(String projectName, String language) {
		super();
		this.projectName = projectName;
		this.language = language;
	}

	@Override
	public String toString() {
		return "Project [projectName=" + projectName + ", language=" + language + "]";
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

}
