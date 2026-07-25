import { useQuery } from "@apollo/client/react";
import { GET_EMPLOYEES } from "../graphql/queries";

export default function EmployeePage() {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);

  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Data:", data);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <h1>Employee Page</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}