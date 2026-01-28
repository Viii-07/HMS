import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const PharmacyPortal = () => {
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
                    <h2 style={{ color: '#be185d' }}>Pharmacy</h2>
                    <p>{user?.id}</p>
                </div>
                <div className="sidebar-nav">
                    <ul>
                        <li className="nav-item active pharmacy">
                            Dispense
                        </li>
                        <li className="nav-item">
                            Inventory
                        </li>
                        <li className="nav-item">
                            Orders
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
                        <h1>Pharmacy Store</h1>
                        <p>Medication tracking and dispensing</p>
                    </div>
                </header>

                <div className="dashboard-grid">
                    <div className="stat-card">
                        <h3>Pending Prescriptions</h3>
                        <div className="stat-content">
                            <div className="stat-value text-pink">18</div>
                            <p className="stat-label">To Process</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <h3>Low Stock Alert</h3>
                        <div className="stat-content">
                            <div className="stat-value text-orange">3</div>
                            <p className="stat-label">Items critical</p>
                        </div>
                    </div>
                </div>

                <div className="table-container">
                    <h3>Recent Dispenses</h3>
                    <table className="w-full border-collapse text-left" style={{ marginTop: '1rem' }}>
                        <thead className="table-head">
                            <tr>
                                <th>Medicine</th>
                                <th>Patient</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-row">
                                <td className="table-cell">Amoxicillin 500mg</td>
                                <td className="table-cell" style={{ color: '#64748b' }}>John Doe</td>
                                <td className="table-cell text-green">Completed</td>
                            </tr>
                            <tr className="table-row">
                                <td className="table-cell">Paracetamol</td>
                                <td className="table-cell" style={{ color: '#64748b' }}>Jane Smith</td>
                                <td className="table-cell text-green">Completed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default PharmacyPortal;
