import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Departments.css";

const departments = [
  "Artificial Intelligence and Data Science",
  "Computer Science and Engineering",
  "Computer Science and Business System",
  "Electronics and Communication Engineering",
  "Information Technology",
  "Mechanical Engineering",
  "Science and Humanities",
];

function Department() {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const navigate = useNavigate();

  const handleSelect = (e) => {
    setSelectedDepartment(e.target.value);
    navigate('/ProfileSelection'); // Navigate to ProfileSelection after selecting a department
  };

  const handleLogout = () => {
    navigate('/Logout'); // Navigate to Logout page on button click
  };

  return (
    <div className="container">
      <h1>QGEN</h1>
      <div className="dropdown-container">
        <select
          className="dropdown"
          value={selectedDepartment}
          onChange={handleSelect}
        >
          <option value="" disabled>
            Department
          </option>
          {departments.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Department;

