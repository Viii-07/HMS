import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ReceptionistPortal = () => {
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
                    <h2 style={{ color: '#059669' }}>Reception</h2>
                    <p>{user?.id}</p>
                </div>
                <div className="sidebar-nav">
                    <ul>
                        <li className="nav-item active receptionist">
                            Dashboard
                        </li>
                        <li className="nav-item">
                            New Registration
                        </li>
                        <li className="nav-item">
                            Billing & Invoices
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
                        <h1>Front Desk</h1>
                        <p>Manage patient flow and registrations</p>
                    </div>
                </header>

                <div className="dashboard-grid">
                    <div className="stat-card">
                        <h3>Check-ins</h3>
                        <div className="stat-content">
                            <div className="stat-value text-green">24</div>
                            <p className="stat-label">Today</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <h3>Calls Queued</h3>
                        <div className="stat-content">
                            <div className="stat-value text-orange">5</div>
                            <p className="stat-label">Pending</p>
                        </div>
                    </div>
                </div>

                <div className="action-card">
                    <h3>Quick Actions</h3>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#059669', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
                            + Register Patient
                        </button>
                        <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
                            Search Records
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ReceptionistPortal;
