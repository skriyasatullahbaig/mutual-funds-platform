// src/Components/AdminPanel.js
import React from 'react';
import './AdminPanel.css'; // Ensure you create this CSS file for styles

const AdminPanel = () => {
  return (
    <div>
      <header>
        <h1>Admin Panel</h1>
        <p>Manage users, view activities, and update content</p>
      </header>

      <div className="container">
        {/* Admin Dashboard Grid */}
        <div className="dashboard-grid">

          {/* User Management Section */}
          <div className="card">
            <h3>User Management</h3>
            <p>View, add, edit, or remove users on the platform.</p>
            <a href="/user-management" className="btn">Manage Users</a>
          </div>

          {/* Content Management Section */}
          <div className="card">
            <h3>Content Management</h3>
            <p>Oversee educational content, including adding, editing, or deleting materials.</p>
            <a href="/content-management" className="btn">Manage Content</a>
          </div>

          {/* Mutual Fund Management Section */}
          <div className="card">
            <h3>Mutual Fund Management</h3>
            <p>View, add, or edit mutual fund details and highlight key investments.</p>
            <a href="/fund-management" className="btn">Manage Funds</a>
          </div>

          {/* Analytics and Reports Section */}
          <div className="card">
            <h3>Analytics and Reports</h3>
            <p>Track user activities, fund performance, and generate reports for review.</p>
            <a href="/reports" className="btn">View Reports</a>
          </div>

        </div>
      </div>

      <footer>
        <p>&copy; 2024 Mutual Funds Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminPanel;
