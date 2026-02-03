import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Pill, Package, ClipboardList, FileText, User, LogOut } from 'lucide-react';
import { PharmacyProvider } from '../../context/PharmacyContext';

// Pages
import PharmacyDashboard from '../../components/pharmacy/pages/PharmacyDashboard';
import PharmacyDispense from '../../components/pharmacy/pages/PharmacyDispense';
import PharmacyInventory from '../../components/pharmacy/pages/PharmacyInventory';

import PharmacyOrders from '../../components/pharmacy/pages/PharmacyOrders';
import PharmacyReports from '../../components/pharmacy/pages/PharmacyReports';
import PharmacyProfile from '../../components/pharmacy/pages/PharmacyProfile';

// Styles
import '../../styles/pharmacy-portal.css';

const PharmacyPortal = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <PharmacyDashboard setActiveTab={setActiveTab} />;
            case 'dispense':
                return <PharmacyDispense />;
            case 'inventory':
                return <PharmacyInventory />;
            case 'orders':
                return <PharmacyOrders />;
            case 'reports':
                return <PharmacyReports />;
            case 'profile':
                return <PharmacyProfile />;
            default:
                return (
                    <PharmacyDashboard setActiveTab={setActiveTab} />
                );
        }
    };

    const NavItem = ({ id, icon: Icon, label }) => (
        <div
            className={`pharmacy-nav-item ${activeTab === id ? 'active' : ''}`}
            onClick={() => setActiveTab(id)}
        >
            <Icon size={20} />
            <span>{label}</span>
        </div>
    );

    return (
        <PharmacyProvider>
            <div className="pharmacy-portal-container">
                <nav className="pharmacy-sidebar">
                    <div className="pharmacy-sidebar-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ width: '40px', height: '40px', background: 'var(--pharmacy-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <Pill size={24} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, lineHeight: 1 }}>MediCare</h2>
                                <span style={{ fontSize: '0.8rem', color: 'var(--pharmacy-text-muted)' }}>Pharmacy</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
                        <NavItem id="dispense" icon={Pill} label="Dispense" />
                        <NavItem id="inventory" icon={Package} label="Inventory" />
                        <NavItem id="orders" icon={ClipboardList} label="Orders" />
                        <NavItem id="reports" icon={FileText} label="Reports" />
                    </div>

                    <div style={{ marginTop: 'auto', borderTop: '1px solid var(--pharmacy-border)', paddingTop: '1rem' }}>
                        <NavItem id="profile" icon={User} label="Profile" />
                        <div className="pharmacy-nav-item" onClick={handleLogout} style={{ color: 'var(--pharmacy-danger)' }}>
                            <LogOut size={20} />
                            <span>Logout</span>
                        </div>
                    </div>
                </nav>

                <main className="pharmacy-main">
                    {renderContent()}
                </main>
            </div>
        </PharmacyProvider>
    );
};

export default PharmacyPortal;
