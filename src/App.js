import { useContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AppContext from "./context/AppContext";
import EmployeeAdd from "./employeeAdd/EmployeeAdd";
import EmployeeList from "./employeeList/EmployeeList";
import EmployeeUpdate from "./employeeUpdate/EmployeeUpdate";
import TopMenü from "./topMenü/TopMenü";

function App() {
  const { appName, employees, setList, selectedEmployee, setSelectedEmployee } =
    useContext(AppContext);

  return (
    <>
      <h1>{appName}</h1>
      <TopMenü/>
        <Routes>
          <Route path="/employee" element={<EmployeeList />}></Route>
          <Route path="/employee/add" element={<EmployeeAdd />}></Route>
          <Route path="/employee/update/:id" element={<EmployeeUpdate />}></Route>
        </Routes>
     

      
    </>
  );
}

export default App;
