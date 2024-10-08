// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Login from './Components/Login';  
import Register from './Components/Register'; 
import AdminPanel from './Components/AdminPanel'; 
import InvestorDashboard from './Components/InvestorDashboard'; // Importing Investor Dashboard
import FinancialAdvisorDashboard from './Components/FinancialAdvisorDashboard'; // Importing Financial Advisor Dashboard
import DataAnalystDashboard from './Components/DataAnalystDashboard'; // Importing Data Analyst Dashboard

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/admin" element={<AdminPanel />} /> {/* Route for Admin Panel */}
                    <Route path="/investor" element={<InvestorDashboard />} /> {/* Route for Investor Dashboard */}
                    <Route path="/advisor" element={<FinancialAdvisorDashboard />} /> {/* Route for Financial Advisor Dashboard */}
                    <Route path="/analyst" element={<DataAnalystDashboard />} /> {/* Route for Data Analyst Dashboard */}
                    <Route path="/*" element={
                        <>
                            <Header />
                            <NavBar />
                            <Content />
                            <Footer />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
