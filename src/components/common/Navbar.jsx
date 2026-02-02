import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Button from '../ui/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();

    return (
        <nav style={{
            backgroundColor: 'white',
            borderBottom: '1px solid var(--border-color)',
            position: 'sticky',
            top: 0,
            zIndex: 50
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'var(--header-height)' }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ backgroundColor: 'var(--primary-color)', padding: '0.25rem', borderRadius: '4px', display: 'flex' }}>
                        <Activity color="white" size={24} />
                    </div>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-color)' }}>HMS</span>
                </Link>

                {/* Desktop Menu */}
                <div className="flex gap-lg hidden md-flex">
                    {/* Navigation items can go here if needed later */}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <Link to="/" style={{ fontWeight: 500 }}>Home</Link>
                    <Link to="/about" style={{ fontWeight: 500 }}>About</Link>

                    {user ? (
                        <Link to="/portal">
                            <Button>Dashboard</Button>
                        </Link>
                    ) : (
                        <div className="flex gap-sm" style={{ gap: '0.5rem' }}>
                            <Link to="/login" style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--primary-color)' }}>Staff Login</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
