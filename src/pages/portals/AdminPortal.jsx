import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AdminPortal = () => {
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
                    <h2 style={{ color: '#111827' }}>Admin Control</h2>
                    <p>{user?.id}</p>
                </div>
                <div className="sidebar-nav">
                    <ul>
                        <li className="nav-item active admin">
                            Overview
                        </li>
                        <li className="nav-item">
                            User Management
                        </li>
                        <li className="nav-item">
                            System Logs
                        </li>
                        <li className="nav-item">
                            Finance
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
                        <h1>System Administrator</h1>
                        <p>Full system access and configuration</p>
                    </div>
                </header>

                <div className="dashboard-grid">
                    <div className="stat-card">
                        <h3>Total Users</h3>
                        <div className="stat-value text-dark" style={{ marginTop: '0.5rem' }}>142</div>
                    </div>
                    <div className="stat-card">
                        <h3>Doctors</h3>
                        <div className="stat-value text-blue" style={{ marginTop: '0.5rem' }}>28</div>
                    </div>
                    <div className="stat-card">
                        <h3>Patients</h3>
                        <div className="stat-value text-green" style={{ marginTop: '0.5rem' }}>850+</div>
                    </div>
                    <div className="stat-card">
                        <h3>Revenue</h3>
                        <div className="stat-value text-dark" style={{ marginTop: '0.5rem' }}>$12.5M</div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminPortal;
