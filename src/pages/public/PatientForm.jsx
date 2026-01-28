import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

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

    if (submitted) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#ecfdf5', padding: '2rem', borderRadius: '12px', border: '1px solid #d1fae5', maxWidth: '600px', margin: '0 auto' }}>
                    <h2 style={{ color: '#059669', marginBottom: '1rem' }}>Registration Successful!</h2>
                    <p style={{ color: '#065f46' }}>Your information has been received. Please head to the reception for your queue token.</p>
                    <p style={{ marginTop: '1rem', fontWeight: 600 }}>Redirecting to portal...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '2rem 0', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', color: '#1e3a8a' }}>Patient Registration Form</h1>

            <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                <div className="grid grid-cols-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name</label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input-field"
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Age</label>
                        <input
                            required
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                            placeholder="e.g. 30"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Gender</label>
                        <select
                            required
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: 'white' }}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Contact Number</label>
                        <input
                            required
                            type="tel"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                            placeholder="(123) 456-7890"
                        />
                    </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Selected Doctor / Department</label>
                    <input
                        type="text"
                        value={`${formData.doctor ? formData.doctor + ' - ' : ''}${formData.department || 'General'}`}
                        disabled
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#64748b' }}
                    />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Symptoms / Reason for Visit</label>
                    <textarea
                        required
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleChange}
                        rows="4"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontFamily: 'inherit' }}
                        placeholder="Briefly describe your condition..."
                    ></textarea>
                </div>

                <Button type="submit" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                    Submit Registration
                </Button>
            </form>
        </div>
    );
};

export default PatientForm;
