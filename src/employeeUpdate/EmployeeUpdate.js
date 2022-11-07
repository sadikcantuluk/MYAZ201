import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

function EmployeeUpdate() {
  const { employees, setList, selectedEmployee, setSelectedEmployee } = useContext(AppContext);
  const navigate=useNavigate();
  const handleChange = (e) => {
    setSelectedEmployee({
      ...selectedEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([
      ...employees.filter((emp) => emp.id !== selectedEmployee.id),
      selectedEmployee,
    ]);
    navigate("/employee");
  };

  return (
    <>
      <h2>Employee Update</h2>
      <p>{JSON.stringify(selectedEmployee)}</p>
      <form onSubmit={handleSubmit}>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          value={selectedEmployee?.firstName}
        />

        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleChange}
          value={selectedEmployee?.lastName}
        />

        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default EmployeeUpdate;
