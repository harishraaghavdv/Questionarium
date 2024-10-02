import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Upload.css'; // Update the CSS file path if needed

const UploadPage = () => {
  const [formData, setFormData] = useState({
    regulation: '',
    courseName: '',
    code: '',
    file: null,
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // Add your form submission logic here

    // Navigate to the Department page after form submission
    navigate('/Departments');
  };

  return (
    <div className="upload-page">
      <div className="form-container">
        <h1>QGEN</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Regulation</label>
            <input
              type="text"
              name="regulation"
              value={formData.regulation}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Course Name</label>
            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Code</label>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
            />
          </div>
          <div className="form-group upload-section">
            <label>UPLOAD QUESTION PAPER:</label>
            <input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx,.png,.jpeg"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;
