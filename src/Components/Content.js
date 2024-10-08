import React from 'react';
import './Content.css';  // Ensure this import statement exists

const Content = () => {
    return (
        <div className="content">
            <h2>Welcome to the Mutual Funds Platform</h2>
            <p>Our platform provides comprehensive insights into mutual funds, helping you understand their structure, risks, and performance. We offer tailored guidance to help you make informed investment decisions. With a user-friendly interface and a range of tools, our platform empowers you to navigate the world of mutual funds confidently.</p>

            {/* Roles and Features Section */}
            <div className="section">
                <h3>Roles and Features</h3>
                <div className="roles-container">
                    <div className="role">
                        <h4>Admin</h4>
                        <p>Oversee platform management, user activities, and content updates. Ensure the platform runs smoothly and securely.</p>
                    </div>
                    <div className="role">
                        <h4>Investor</h4>
                        <p>Explore various mutual funds, compare options, and manage your investments effortlessly through a user-friendly interface.</p>
                    </div>
                    <div className="role">
                        <h4>Financial Advisor</h4>
                        <p>Provide expert advice, create educational content, and assist users in selecting the right mutual funds tailored to their needs.</p>
                    </div>
                    <div className="role">
                        <h4>Data Analyst</h4>
                        <p>Analyze investment trends, update fund performance data, and generate insightful reports that drive informed decisions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
