import employees from "../data/employees";

export class EmployeeRepository {
    
    getAllEmployees(): typeof employees {
        console.log("Fetching all employees from the repository...");
        return employees;
    }
    getEmployeeById(id: number): typeof employees[0] | undefined {
        console.log(`Fetching employee with ID: ${id} from the repository...`);
        return employees.find((employee: { id: number; }) => employee.id === id);
    }
    getEmployeeByName(name: string): typeof employees[0] | undefined {
        console.log(`Fetching employee with name: ${name} from the repository...`);
        return employees.find((employee: { name: string; }) => employee.name === name);
    }
    addEmployee(name: string, department: string, salary: number){
        const employee = {
            id: employees.length + 1,
            name,
            department,
            salary
        };
        employees.push(employee);
        console.log(`Added employee: ${name} to the repository...`);
        return employee;
    } 

    updateEmployee(id: number, name?: string, department?: string, salary?: number) {
        const employee = employees.find((emp: { id: number; }) => emp.id === id);
        if (!employee) {
            throw new Error("Employee not found");
        }
        employee.name = name ?? employee.name;
        employee.department = department ?? employee.department;
        employee.salary = salary ?? employee.salary;
        console.log(`Updated employee with ID: ${id} in the repository...`);
        return employee;
    }

    deleteEmployee(id: number) {
        const index = employees.findIndex((employee: { id: number; }) => employee.id === id);
        if (index !== -1) {
            employees.splice(index, 1);
            console.log(`Deleted employee with ID: ${id} from the repository...`);
            return true;
        }
        console.log(`Employee with ID: ${id} not found in the repository...`);
        return false;
    }
}