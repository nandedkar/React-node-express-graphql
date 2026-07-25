import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeePage from "../pages/EmployeePage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}