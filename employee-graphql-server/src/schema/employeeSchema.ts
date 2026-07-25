export const typeDefs = `#graphql
type Employee {
    id: Int!
    name: String!
    department: String!
    salary: Float!
}
    type Query {
        employees: [Employee!]! 
        employee(id:ID!):Employee
        employeeByName(name:String!):Employee
    }
    type Mutation {
        addEmployee(name: String!, department: String!, salary: Float!): Employee!
        updateEmployee(id: ID!, name: String, department: String, salary: Float): Employee
        deleteEmployee(id: ID!): Boolean!
    }
`;
