// src/Components/InvestorDashboard.js
import React from 'react';
import styles from './InvestorDashboard.module.css'; // Import CSS module

const InvestorDashboard = () => {
  return (
    <div className={styles.investorDashboard}>
      <header className={styles.header}>
        <h1>Investor Dashboard</h1>
        <p>Explore mutual funds, compare options, and manage your investments effectively.</p>
      </header>

      <div className={styles.dashboard}>
        <div className={styles.card}>
          <img src="https://img.icons8.com/dusk/64/000000/investment-portfolio.png" alt="Explore Mutual Funds" />
          <h3>Explore Mutual Funds</h3>
          <p>Discover a wide range of mutual funds tailored to your investment goals.</p>
          <a href="#" className={styles.btn}>Explore Now</a>
        </div>

        <div className={styles.card}>
          <img src="https://img.icons8.com/dusk/64/000000/compare.png" alt="Compare Options" />
          <h3>Compare Options</h3>
          <p>Compare different mutual funds to find the best options for your portfolio.</p>
          <a href="#" className={styles.btn}>Compare Funds</a>
        </div>

        <div className={styles.card}>
          <img src="https://img.icons8.com/dusk/64/000000/graph.png" alt="Investment Analysis" />
          <h3>Investment Analysis</h3>
          <p>Analyze investment trends and get insights to optimize your returns.</p>
          <a href="#" className={styles.btn}>Analyze Now</a>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Mutual Funds Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default InvestorDashboard;
