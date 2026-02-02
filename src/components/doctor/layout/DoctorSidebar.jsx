import React from 'react';
import { LayoutDashboard, Calendar, Users, FileText, User, LogOut } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const DoctorSidebar = ({ activeTab, setActiveTab }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login', { replace: true });
    };

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'appointments', label: 'Appointments', icon: Calendar },
        { id: 'patients', label: 'My Patients', icon: Users },
        { id: 'records', label: 'Medical Records', icon: FileText },
        { id: 'profile', label: 'Profile', icon: User },
    ];

    return (
        <nav className="doctor-sidebar">
            <div className="doctor-sidebar-header">
                <h2>Doctor Portal</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ flex: 1 }}>
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className={`doctor-nav-item ${activeTab === item.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(item.id)}
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

export default DoctorSidebar;
