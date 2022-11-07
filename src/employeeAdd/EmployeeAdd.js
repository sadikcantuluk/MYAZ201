import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";

function EmployeeAdd() {
  const { employees, setList } = useContext(AppContext);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([
      ...employees,
      {
        id: employees.lenght + 1,
        ...values,
      },
    ]);

    setValues({
      firstName: "",
      lastName: "",
    });
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = () => {
    setValues({
      firstName: "",
      lastName: "",
    });
  };

  return (
    <>
      <h2>EmployeeAdd</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="FİRST NAME"
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={values?.firstName}
          />
          <input
            placeholder="LAST NAME"
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={values?.lastName}
          />
          <button type="submit">Save</button>
          <button onClick={handleClear} type="button">
            Clear
          </button>
        </form>
      </div>
    </>
  );
}

export default EmployeeAdd;
