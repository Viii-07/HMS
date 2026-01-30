import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import hospitalVideo from '../../utils/hospital.mp4';

const PatientForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const initialDoctor = location.state?.doctor || null;

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        contact: '',
        symptoms: '',
        department: initialDoctor ? initialDoctor.department : '',
        doctor: initialDoctor ? initialDoctor.name : ''
    });

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // If arrived without selecting a doctor, that's fine, user can fill it in.
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate local storage submission
        console.log("Patient Registration:", formData);
        setSubmitted(true);
        setTimeout(() => {
            navigate('/patient'); // Go back to portal after success
        }, 3000);
    };

    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
            {/* Background Video */}
            <video
                src={hospitalVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                }}
            />

            {/* Overlay to dim video slightly for readability if needed */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.2)', // Slight dark overlay
                zIndex: 1
            }}></div>

            {/* Content Container - Positioning the form */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end', // Align to far right
                padding: '2rem'
            }}>
                {/* Form Card */}
                {submitted ? (
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '3rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.4)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        maxWidth: '450px',
                        width: '100%',
                        textAlign: 'center',
                        marginRight: '8vw' // Responsive margin from right
                    }}>
                        <h2 style={{ color: '#059669', marginBottom: '1rem', fontSize: '2rem' }}>Success!</h2>
                        <p style={{ color: '#065f46', fontSize: '1.1rem' }}>Your registration is confirmed.</p>
                        <p style={{ marginTop: '1rem', fontWeight: 600, color: '#047857' }}>Redirecting...</p>
                    </div>
                ) : (
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)', // Increased opacity for better contrast
                        padding: '2rem',
                        borderRadius: '20px',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        backdropFilter: 'blur(10px)',
                        maxWidth: '420px', // Slightly narrower to fit well
                        width: '100%',
                        marginRight: '8vw' // Push 8% from the right edge
                    }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#1e3a8a', margin: 0, fontSize: '1.8rem' }}>Book Consultation</h2>
                            <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Fill in your details to secure an appointment.</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem', color: '#334155' }}>Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'rgba(255,255,255,0.8)' }}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem', color: '#334155' }}>Age</label>
                                    <input
                                        required
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'rgba(255,255,255,0.8)' }}
                                        placeholder="Age"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem', color: '#334155' }}>Gender</label>
                                    <select
                                        required
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'rgba(255,255,255,0.8)' }}
                                    >
                                        <option value="">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem', color: '#334155' }}>Phone</label>
                                    <input
                                        required
                                        type="tel"
                                        name="contact"
                                        value={formData.contact}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'rgba(255,255,255,0.8)' }}
                                        placeholder="Phone"
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem', color: '#334155' }}>Department / Doctor</label>
                                <input
                                    type="text"
                                    value={`${formData.doctor ? formData.doctor + ' - ' : ''}${formData.department || 'General Checkup'}`}
                                    disabled
                                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f1f5f9', color: '#64748b' }}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem', color: '#334155' }}>Reason for Visit</label>
                                <textarea
                                    required
                                    name="symptoms"
                                    value={formData.symptoms}
                                    onChange={handleChange}
                                    rows="3"
                                    style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'rgba(255,255,255,0.8)', fontFamily: 'inherit' }}
                                    placeholder="Briefly describe symptoms..."
                                ></textarea>
                            </div>

                            <Button type="submit" style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', fontWeight: '600' }}>
                                Confirm Booking
                            </Button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PatientForm;
