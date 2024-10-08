import React from 'react';
import './DataAnalystDashboard.css'; // Import the CSS file

const DataAnalystDashboard = () => {
  const handleUploadData = () => {
    // Logic for uploading data can be added here
    alert("Upload Data clicked");
  };

  const handleAnalyzeData = () => {
    // Logic for analyzing data can be added here
    alert("Analyze Data clicked");
  };

  const handleGenerateReports = () => {
    // Logic for generating reports can be added here
    alert("Generate Reports clicked");
  };

  const handleVisualizeData = () => {
    // Logic for visualizing data can be added here
    alert("Visualize Data clicked");
  };

  return (
    <div>
      <header>
        <h1>Data Analyst Dashboard</h1>
        <p>Analyze investment trends, generate reports, and visualize data</p>
      </header>

      <div className="container">
        {/* Data Analyst Dashboard Grid */}
        <div className="analyst-grid">
          {/* Upload Data Section */}
          <div className="card">
            <h3>Upload Data</h3>
            <p>Upload CSV files or datasets for analysis.</p>
            <button onClick={handleUploadData} className="btn">Upload Data</button>
          </div>

          {/* Analyze Data Section */}
          <div className="card">
            <h3>Analyze Data</h3>
            <p>Run data analytics on uploaded datasets and extract insights.</p>
            <button onClick={handleAnalyzeData} className="btn">Analyze Data</button>
          </div>

          {/* Generate Reports Section */}
          <div className="card">
            <h3>Generate Reports</h3>
            <p>Generate performance reports based on data analysis and trends.</p>
            <button onClick={handleGenerateReports} className="btn">Generate Reports</button>
          </div>

          {/* Data Visualization Section */}
          <div className="card">
            <h3>Data Visualization</h3>
            <p>Create charts and graphs to visualize trends and patterns in the data.</p>
            <button onClick={handleVisualizeData} className="btn">Visualize Data</button>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 Data Analyst Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DataAnalystDashboard;