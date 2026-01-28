import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const StaffPortal = () => {
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
                    <h2 style={{ color: '#0891b2' }}>Staff Portal</h2>
                    <p>{user?.id}</p>
                </div>
                <div className="sidebar-nav">
                    <ul>
                        <li className="nav-item active staff">
                            My Tasks
                        </li>
                        <li className="nav-item">
                            Schedule
                        </li>
                        <li className="nav-item">
                            Profile
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
                        <h1>Staff Dashboard</h1>
                        <p>Operations and Assignments</p>
                    </div>
                </header>

                <div className="dashboard-grid">
                    <div className="stat-card">
                        <h3>Assigned Tasks</h3>
                        <div className="stat-content">
                            <div className="stat-value text-cyan">5</div>
                            <p className="stat-label">Active</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <h3>Shift Status</h3>
                        <div className="stat-content">
                            <div className="stat-value text-orange">ON</div>
                            <p className="stat-label">Ends in 4h</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StaffPortal;
