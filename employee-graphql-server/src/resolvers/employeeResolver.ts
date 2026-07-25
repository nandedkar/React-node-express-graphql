import { EmployeeService } from "../services/employeeService";

const service = new EmployeeService();

export const resolvers = {
    Query: {
        employees: () => {
            console.log("Resolver : Fetching all employees...");
            return service.getEmployees();
        },
        employee: (_: any, args: { id: string }) => {
            console.log(`Resolver : Fetching employee with ID: ${args.id}...`);
            return service.getEmployeeById(parseInt(args.id));
        },
        employeeByName: (_: any, args: { name: string }) => {
            console.log(`Resolver : Fetching employee with name: ${args.name}...`);
            return service.getEmployeeByName(args.name);
        }
    },
    Mutation: {
        addEmployee: (_: any, args: { name: string; department: string; salary: number }) => {
            console.log(`Resolver : Adding employee: ${args.name}...`);
            // Implementation for adding employee
            return service.addEmployee(args.name, args.department, args.salary);
        },
        updateEmployee: (_: any, args: { id: string; name: string; department: string; salary: number }) => {
            console.log(`Resolver : Updating employee with ID: ${args.id}...`);
            // Implementation for updating employee
            return service.updateEmployee(parseInt(args.id), args.name, args.department, args.salary);
        },
       
        deleteEmployee: (_: any, args: { id: string }) => {
            console.log(`Resolver : Deleting employee with ID: ${args.id}...`);
            // Implementation for deleting employee
            return service.deleteEmployee(parseInt(args.id));
        }
    }
};