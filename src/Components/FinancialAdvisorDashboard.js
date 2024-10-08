// src/Components/FinancialAdvisorDashboard.js
import React from 'react';
import styles from './FinancialAdvisorDashboard.module.css'; // Import CSS module

const FinancialAdvisorDashboard = () => {
  return (
    <div className={styles.advisorDashboard}>
      <header className={styles.header}>
        <h1>Financial Advisor Dashboard</h1>
        <p>Manage advisory tasks, provide educational content, and assist users</p>
      </header>

      <div className={styles.container}>
        {/* Financial Advisor Dashboard Grid */}
        <div className={styles.advisorGrid}>

          {/* Advise Users Section */}
          <div className={styles.card}>
            <h3>Advise Users</h3>
            <p>Provide personalized financial advice to users based on their profile and needs.</p>
            <a href="adviseUsers.jsp" className={styles.btn}>Advise Users</a>
          </div>

          {/* Create Educational Content Section */}
          <div className={styles.card}>
            <h3>Create Educational Content</h3>
            <p>Create, edit, and share educational materials on mutual funds and investment strategies.</p>
            <a href="createContent.jsp" className={styles.btn}>Create Content</a>
          </div>

          {/* Mutual Fund Recommendations Section */}
          <div className={styles.card}>
            <h3>Mutual Fund Recommendations</h3>
            <p>Analyze and recommend the best mutual funds based on market trends and user profiles.</p>
            <a href="recommendations.jsp" className={styles.btn}>Recommend Funds</a>
          </div>

          {/* User Queries Section */}
          <div className={styles.card}>
            <h3>User Queries & Support</h3>
            <p>Answer questions and provide financial guidance to users seeking support.</p>
            <a href="userQueries.jsp" className={styles.btn}>Handle Queries</a>
          </div>

        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Financial Advisor Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FinancialAdvisorDashboard;
