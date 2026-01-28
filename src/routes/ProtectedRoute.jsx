import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        // Not logged in -> Redirect to login
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        // Logged in but wrong role -> Redirect to their specific dashboard
        // Prevent infinite loop if they are already on their dashboard but something is misconfigured (unlikely with this logic but good to keep in mind)
        return <Navigate to={`/portal/${user.role}`} replace />;
    }

    return children;
};

export default ProtectedRoute;
