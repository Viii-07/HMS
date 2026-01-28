import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, MapPin, Phone, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const DUMMY_DOCTORS = [
    { id: 1, name: "Dr. Sarah Smith", specialization: "Cardiologist", department: "Cardiology", availability: "Today, 9AM - 2PM" },
    { id: 2, name: "Dr. James Wilson", specialization: "Neurologist", department: "Neurology", availability: "Today, 11AM - 4PM" },
    { id: 3, name: "Dr. Emily Chen", specialization: "Pediatrician", department: "Pediatrics", availability: "Tomorrow, 8AM - 1PM" },
    { id: 4, name: "Dr. Michael Brown", specialization: "Orthopedic", department: "Orthopedics", availability: "Today, 10AM - 3PM" },
    { id: 5, name: "Dr. Lisa Taylor", specialization: "Dermatologist", department: "Dermatology", availability: "Thu, 9AM - 5PM" },
    { id: 6, name: "Dr. Robert King", specialization: "General Physician", department: "General Medicine", availability: "Daily, 8AM - 8PM" }
];

const PatientPortal = () => {
    const navigate = useNavigate();

    const handleConsult = (doctor) => {
        navigate('/patient/form', { state: { doctor } });
    };

    return (
        <div style={{ paddingBottom: '4rem' }}>
            {/* Hospital Info Header */}
            <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '3rem 0' }}>
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: '1.5rem' }}>ProHealth Hospital Services</h1>
                    <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <Clock size={24} color="#60a5fa" />
                            <div>
                                <h3 style={{ color: 'white', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Working Hours</h3>
                                <p style={{ color: '#bfdbfe', margin: 0 }}>Open 24/7 for Emergency</p>
                                <p style={{ color: '#bfdbfe', margin: 0 }}>OPD: 8:00 AM - 8:00 PM</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <Phone size={24} color="#60a5fa" />
                            <div>
                                <h3 style={{ color: 'white', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Emergency Contact</h3>
                                <p style={{ color: '#bfdbfe', margin: 0 }}>+1 (800) 123-4567</p>
                                <p style={{ color: '#bfdbfe', margin: 0 }}>ambulance@prohealth.com</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <MapPin size={24} color="#60a5fa" />
                            <div>
                                <h3 style={{ color: 'white', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Location</h3>
                                <p style={{ color: '#bfdbfe', margin: 0 }}>123 Health Avenue,</p>
                                <p style={{ color: '#bfdbfe', margin: 0 }}>Medical District, NY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctor Cards */}
            <section className="container" style={{ marginTop: '3rem' }}>
                <h2 style={{ marginBottom: '2rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', display: 'inline-block' }}>
                    Find a Specialist
                </h2>

                <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
                    {DUMMY_DOCTORS.map(doctor => (
                        <div key={doctor.id} style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            border: '1px solid #e2e8f0',
                            overflow: 'hidden',
                            transition: 'transform 0.2s',
                            cursor: 'default'
                        }}>
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <span style={{
                                        backgroundColor: '#eff6ff',
                                        color: '#1d4ed8',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '20px',
                                        fontSize: '0.875rem',
                                        fontWeight: 500
                                    }}>
                                        {doctor.department}
                                    </span>
                                </div>
                                <h3 style={{ marginBottom: '0.25rem', fontSize: '1.25rem' }}>{doctor.name}</h3>
                                <p style={{ color: '#64748b', marginBottom: '1rem', fontWeight: 500 }}>{doctor.specialization}</p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#059669', fontSize: '0.9rem' }}>
                                    <Clock size={16} />
                                    <span>Available: {doctor.availability}</span>
                                </div>

                                <Button
                                    onClick={() => handleConsult(doctor)}
                                    style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    Book Consultation <ArrowRight size={18} />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PatientPortal;
