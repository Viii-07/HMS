import React from 'react';
import { LayoutDashboard, Calendar, UserPlus, Users, FileText, User, LogOut } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ReceptionSidebar = ({ activeTab, setActiveTab }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'appointments', label: 'Appointments', icon: Calendar },
        { id: 'registration', label: 'Patient Registration', icon: UserPlus },
        { id: 'queue', label: 'Queue Management', icon: Users },
        { id: 'billing', label: 'Billing', icon: FileText },
        { id: 'profile', label: 'Profile', icon: User },
    ];

    return (
        <nav className="reception-sidebar">
            <div className="reception-sidebar-header">
                <h2>Reception</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ flex: 1 }}>
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className={`reception-nav-item ${activeTab === item.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(item.id)}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="reception-sidebar-footer">
                    <div className="reception-nav-item" onClick={handleLogout} style={{ color: '#ef4444' }}>
                        <LogOut size={20} />
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default ReceptionSidebar;
