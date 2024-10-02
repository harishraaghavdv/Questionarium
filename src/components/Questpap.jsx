import React from 'react';
import './Questpap.css'; // Update the CSS file path if needed

const Quest = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="questionarium-container">
      <div className="questionarium-header">
        <h1>QGEN</h1>
      </div>
      <div className="question-paper">
        {/* Placeholder for the question paper content */}
        <p>Generated question paper content goes here.</p>
      </div>
      <button className="print-button" onClick={handlePrint}>
        Print
      </button>
    </div>
  );
};

export default Quest;
