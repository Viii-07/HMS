import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const DoctorPortal = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="dashboard-layout">
            <nav className="sidebar">
                <div className="sidebar-header">
                    <h2 style={{ color: '#1e3a8a' }}>Doctor Portal</h2>
                    <p>{user?.id}</p>
                </div>
                <div className="sidebar-nav">
                    <ul>
                        <li className="nav-item active doctor">
                            Appointments
                        </li>
                        <li className="nav-item">
                            My Patients
                        </li>
                        <li className="nav-item">
                            Medical Records
                        </li>
                    </ul>
                </div>
                <div className="sidebar-footer">
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                </div>
            </nav>

            <main className="dashboard-content">
                <header className="dashboard-header">
                    <div>
                        <h1>Welcome, {user?.name}</h1>
                        <p>Here is your daily schedule</p>
                    </div>
                    <div className="header-meta">
                        <span className="status-badge">Active Session</span>
                    </div>
                </header>

                <div className="dashboard-grid">
                    <div className="stat-card">
                        <h3>Today's Appointments</h3>
                        <div className="stat-content">
                            <div className="stat-value text-blue">8</div>
                            <p className="stat-label">Pending Checkups</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <h3>Patient Queue</h3>
                        <div className="stat-content">
                            <div className="stat-value text-green">3</div>
                            <p className="stat-label">Waiting now</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <h3>Reports</h3>
                        <div className="stat-content">
                            <div className="stat-value text-orange">12</div>
                            <p className="stat-label">To Review</p>
                        </div>
                    </div>
                </div>

                <div className="recent-activity">
                    <h3>Recent Activity</h3>
                    <div className="activity-list">
                        <p className="activity-item">Dr. Smith updated record for Patient #9021</p>
                        <p className="activity-item">New appointment scheduled for 2:00 PM</p>
                        <p className="activity-item text-green">Lab results received for Patient #8821</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DoctorPortal;
