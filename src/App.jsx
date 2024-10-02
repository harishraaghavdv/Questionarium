import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login"; // Ensure the correct path is used
import Department from "./components/Departments"; // Ensure the correct path is used
import ProfileSelection from "./components/ProfileSelection"; // Ensure the correct path is used
import GenerateUpload from "./components/GenerateUpload"; // Ensure the correct path is used
import GeneratePage from "./components/Generate"; // Ensure the correct path is used
import UploadPage from "./components/Upload"; 
import Quest from "./components/Questpap"; // Ensure the correct path is used


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Departments" element={<Department />} />
        <Route path="/ProfileSelection" element={<ProfileSelection />} />
        <Route path="/GenerateUpload" element={<GenerateUpload />} />
        <Route path="/Generate" element={<GeneratePage />} />
        <Route path="/Upload" element={<UploadPage />} />
        <Route path="/Questpap" element={<Quest />} />
      </Routes>
    </Router>
  );
}

export default App;
