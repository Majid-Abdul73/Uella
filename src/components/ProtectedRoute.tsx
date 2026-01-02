import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const isAuthenticated = localStorage.getItem('uella_auth') === 'true';

    if (!isAuthenticated) {
        return <Navigate to="/welcome" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
