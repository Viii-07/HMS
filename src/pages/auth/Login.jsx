import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ShieldCheck, Lock, AlertCircle, LogOut } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    // Form State
    const [role, setRole] = useState('doctor');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = await login(role, id, password);

        if (result.success) {
            navigate(`/portal/${role}`);
        } else {
            setError(result.error);
            setLoading(false);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                {/* Header Section */}
                <div className="login-header">
                    <h1 className="login-brand">ProHealth HMS</h1>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="error-message">
                        <AlertCircle size={18} />
                        <span>{error}</span>
                    </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label className="form-label">Select Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="form-select"
                        >
                            <option value="doctor">Doctor</option>
                            <option value="receptionist">Receptionist</option>
                            <option value="pharmacy">Pharmacy</option>
                            <option value="staff">Staff</option>
                            <option value="admin">Administrator</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">User ID</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                placeholder="e.g. DOC001"
                                className="form-input"
                                autoFocus
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="form-input"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="login-btn"
                    >
                        {loading ? 'Authenticating...' : 'Login to Dashboard'}
                    </button>
                </form>

                {/* Footer Section */}
                <div className="login-footer">
                    <div className="security-notice">
                        <Lock size={12} />
                        Authorized Personnel Only • 256-bit Encryption
                    </div>

                    <button
                        onClick={() => navigate('/')}
                        className="btn-ghost"
                    >
                        <LogOut size={14} />
                        Exit to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
