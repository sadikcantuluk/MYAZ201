import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
//import { employees } from "../data/data";
import Employee from "../employee/Employee";

function EmployeeList() {
  const { employees, setList, setSelectedEmployee } = useContext(AppContext);

  const handleRemoveAll = () => {
    setList([]);
  };

  const handleRemove = (id) => {
    setList(employees.filter((emp) => emp.id !== id));
  };

  return (
    <>
      <h2>Employee List ({employees.length})</h2>
      <div>
        {employees.map((emp, index) => (
          <Employee
            key={index}
            employee={emp}
            handleRemove={handleRemove}
            setSelectedEmployee={setSelectedEmployee}
          />
        ))}
        <button onClick={handleRemoveAll}>Clear All</button>
      </div>
    </>
  );
}

export default EmployeeList;
