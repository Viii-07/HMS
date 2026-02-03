import React from 'react';
import { LayoutDashboard, Users, ScrollText, DollarSign, Settings, LogOut, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login', { replace: true });
    };

    const menuItems = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'users', label: 'User Management', icon: Users },
        { id: 'logs', label: 'System Logs', icon: ScrollText },
        { id: 'finance', label: 'Finance', icon: DollarSign },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <nav className="doctor-sidebar">
            <div className="doctor-sidebar-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ padding: '0.5rem', background: '#1e293b', borderRadius: '8px', color: 'white' }}>
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.25rem', color: '#1e293b', margin: 0 }}>Admin</h2>
                        <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, fontWeight: 600 }}>CONTROL CENTER</p>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ flex: 1 }}>
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;
                        return (
                            <div
                                key={item.id}
                                className={`doctor-nav-item ${isActive ? 'active' : ''}`}
                                onClick={() => setActiveTab(item.id)}
                                style={isActive ? { backgroundColor: '#1e293b', color: 'white' } : {}}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="doctor-sidebar-footer">
                    <div className="doctor-nav-item" onClick={handleLogout} style={{ color: '#ef4444' }}>
                        <LogOut size={20} />
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminSidebar;
