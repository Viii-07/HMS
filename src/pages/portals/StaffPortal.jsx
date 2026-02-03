import React, { useState } from 'react';
import '../../styles/doctor-portal.css';
import StaffSidebar from '../../components/staff/layout/StaffSidebar';
import StaffDashboard from '../../components/staff/pages/StaffDashboard';
import StaffTasks from '../../components/staff/pages/StaffTasks';
import StaffSchedule from '../../components/staff/pages/StaffSchedule';
import StaffProfile from '../../components/staff/pages/StaffProfile';
import { StaffProvider } from '../../context/StaffContext';

const StaffPortal = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <StaffDashboard setActiveTab={setActiveTab} />;
            case 'tasks':
                return <StaffTasks />;
            case 'schedule':
                return <StaffSchedule />;
            case 'profile':
                return <StaffProfile />;
            default:
                return <StaffDashboard setActiveTab={setActiveTab} />;
        }
    };

    return (
        <StaffProvider>
            <div className="doctor-portal-container">
                <StaffSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                <main className="doctor-main">
                    {renderContent()}
                </main>
            </div>
        </StaffProvider>
    );
};

export default StaffPortal;
