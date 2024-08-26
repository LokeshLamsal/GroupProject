import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/test-skin-cancer">Test Skin Cancer</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/logout">Log Out</a></li>
                </ul>
            </div>
            <div className="main-content">
                <h1 className="dashboard-title">Dashboard</h1>
                {/* Add your main content here */}
            </div>
        </div>
    );
}

export default Dashboard;
