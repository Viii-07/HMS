import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import AuthLayout from '../layouts/AuthLayout';
import ProtectedRoute from '../routes/ProtectedRoute';

// Public Pages
import Home from '../pages/public/Home';
import About from '../pages/public/About';
import Feedback from '../pages/public/Feedback';
import NotFound from '../pages/public/NotFound';
import PatientForm from '../pages/public/PatientForm'; // Future file

// Auth Pages
import Login from '../pages/auth/Login';


// Portals
import AdminPortal from '../pages/portals/AdminPortal';
import DoctorPortal from '../pages/portals/DoctorPortal';
import ReceptionistPortal from '../pages/portals/ReceptionistPortal';
import StaffPortal from '../pages/portals/StaffPortal';
import PharmacyPortal from '../pages/portals/PharmacyPortal';
import PatientPortal from '../pages/portals/PatientPortal'; // Now public-ish logic, but still a portal view

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'feedback', element: <Feedback /> },
            { path: 'patient', element: <PatientPortal /> }, // Public access
            { path: 'patient/form', element: <PatientForm /> }, // Public access
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        // AuthLayout could be used for other auth-related pages if any remain, keeping for safety or future use
        element: <AuthLayout />,
        children: [
            // Empty for now as register is gone
        ],
    },
    {
        path: '/portal',
        element: (
            <ProtectedRoute>
                <Outlet />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Navigate to="/login" replace />,
            },
            {
                path: 'admin',
                element: (
                    <ProtectedRoute allowedRoles={['admin']}>
                        <AdminPortal />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'doctor',
                element: (
                    <ProtectedRoute allowedRoles={['doctor']}>
                        <DoctorPortal />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'receptionist',
                element: (
                    <ProtectedRoute allowedRoles={['receptionist']}>
                        <ReceptionistPortal />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'pharmacy',
                element: (
                    <ProtectedRoute allowedRoles={['pharmacy']}>
                        <PharmacyPortal />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'staff',
                element: (
                    <ProtectedRoute allowedRoles={['staff']}>
                        <StaffPortal />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
