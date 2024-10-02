import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Generate.css'; // Update the CSS file path if needed

const GeneratePage = () => {
  const [formData, setFormData] = useState({
    subjectName: '',
    subjectCode: '',
    duration: '',
    date: '',
    section: '',
    assessment: '',
    semester: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your form submission logic here
    navigate('/Questpap');
  };

  return (
    <div className="generate-page">
      <div className="form-container">
        <h1>QGEN</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group">
              <label>Subject Name</label>
              <input
                type="text"
                name="subjectName"
                value={formData.subjectName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Subject Code</label>
              <input
                type="text"
                name="subjectCode"
                value={formData.subjectCode}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Section</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="section"
                    value="A"
                    checked={formData.section === 'A'}
                    onChange={handleChange}
                  />
                  A
                </label>
                <label>
                  <input
                    type="radio"
                    name="section"
                    value="B"
                    checked={formData.section === 'B'}
                    onChange={handleChange}
                  />
                  B
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Internal Assessment</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="assessment"
                    value="IA1"
                    checked={formData.assessment === 'IA1'}
                    onChange={handleChange}
                  />
                  IA1
                </label>
                <label>
                  <input
                    type="radio"
                    name="assessment"
                    value="IA2"
                    checked={formData.assessment === 'IA2'}
                    onChange={handleChange}
                  />
                  IA2
                </label>
                <label>
                  <input
                    type="radio"
                    name="assessment"
                    value="Model1"
                    checked={formData.assessment === 'Model1'}
                    onChange={handleChange}
                  />
                  Model 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="assessment"
                    value="Model2"
                    checked={formData.assessment === 'Model2'}
                    onChange={handleChange}
                  />
                  Model 2
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Semester</label>
              <input
                type="text"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit">Generate</button>
        </form>
      </div>
    </div>
  );
};

export default GeneratePage;
