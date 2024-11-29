
import Department from "./Department";


export default class Employee {
    
    id;
    empName;
    empSalary;
    department;
    deptId;

    constructor() {
        this.id = 0;
        this.empName = '';
        this.empSalary = 0;
        this.department = new Department();
    }

    
    setId(id) {
        this.id = id;
    }

    setEmpName(empName) {
        this.empName = empName;
    }

    setEmpSalary(empSalary) {
        this.empSalary = empSalary;
    }

    setDeptId(deptId) {
        this.department.deptId = deptId
    }
}
