import { EmployeeRepository } from "../repository/employeeRepository";

export class EmployeeService {

    private repository = new EmployeeRepository();
    getEmployees() {
        console.log("Service : Fetching all employees business logic");
        return this.repository.getAllEmployees();
    }

    getEmployeeById(id: number) {
        console.log("Service : Fetching employee by ID business logic");
        return this.repository.getEmployeeById(id);
    }
    getEmployeeByName(name: string) {
        console.log("Service : Fetching employee by name business logic");
        return this.repository.getEmployeeByName(name);
    }
    addEmployee(name: string, department: string, salary: number) {
        console.log("Service : Adding employee business logic");
        console.log("Service : Validation for employee data");
        // Add validation logic here if needed
        if (!name || !department || salary <= 0) {
            throw new Error("Invalid employee data");
        }
        return this.repository.addEmployee(name, department, salary);
    }
    updateEmployee(id: number, name?: string, department?: string, salary?: number) {
        console.log("Service : Updating employee business logic");
        return this.repository.updateEmployee(id, name, department, salary);
    }
    deleteEmployee(id: number) {
        console.log("Service : Deleting employee business logic");
        return this.repository.deleteEmployee(id);
    }
}