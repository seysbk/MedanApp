import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            padding: '2rem',
            textAlign: 'center',
            backgroundColor: '#F0F0F2',
            borderRadius: '24px',
            margin: '2rem',
        }}>
            <div style={{
                position: 'relative',
                marginBottom: '2rem',
            }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '80px', height: '80px' }}>
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    backgroundColor: '#FF3B30',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>?</span>
                </div>
            </div>
            <h2 style={{
                fontSize: '32px',
                fontWeight: '800',
                marginBottom: '1rem',
                color: '#0D0D0D',
            }}>Oops! Page Not Found</h2>
            <p style={{
                color: '#6B6B6B',
                lineHeight: '1.6',
                fontSize: '16px',
                marginBottom: '2rem',
                maxWidth: '400px',
            }}>
                The page you're looking for doesn't exist.
                <br /> Let's get you back to finding the perfect hostel.
            </p>
            <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
                <Link to="/" style={{
                    background: 'linear-gradient(135deg, #FF3B30 0%, #E02E24 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '24px',
                    fontWeight: '600',
                    fontSize: '16px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(255, 59, 48, 0.3)',
                }}>
                    Go Home
                </Link>
                <Link to="/explore" style={{
                    background: '#4A90E2',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '24px',
                    fontWeight: '600',
                    fontSize: '16px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)',
                }}>
                    Explore Hostels
                </Link>
                <Link to="/register-hostel" style={{
                    background: '#34C759',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '24px',
                    fontWeight: '600',
                    fontSize: '16px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(52, 199, 89, 0.3)',
                }}>
                    Register Hostel
                </Link>
            </div>
        </main>
    );
}