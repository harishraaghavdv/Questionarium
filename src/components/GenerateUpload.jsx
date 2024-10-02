import React from "react";
import { useNavigate } from "react-router-dom";
import "./GenerateUpload.css"; // Ensure you create this CSS file

const GenerateUpload = () => {
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    navigate("/Generate"); // Navigate to Generate.jsx
  };

  const handleUploadClick = () => {
    navigate("/Upload"); // Navigate to Upload.jsx
  };

  return (
    <div className="questionarium-container">
      <div className="content-box">
        <h1 className="title">QGEN</h1>
        <div className="buttons-container">
          <button className="btn generate-btn" onClick={handleGenerateClick}>
            <div className="icon-container">
              <img
                src="path-to-generate-icon.png"
                alt="Generate Icon"
                className="icon"
              />
            </div>
            Generate
          </button>
          <button className="btn upload-btn" onClick={handleUploadClick}>
            <div className="icon-container">
              <img
                src="path-to-upload-icon.png"
                alt="Upload Icon"
                className="icon"
              />
            </div>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateUpload;
