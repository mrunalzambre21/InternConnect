import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate ,useLocation} from 'react-router-dom';

const VerifyAdmin = () => {
    const location =useLocation();
    const token =new URLSearchParams(location.search).get('token');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true); // Loading state
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Token retrieved:',token);
        const verifyToken = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/admin/verify?token=${token}`);
                setMessage(response.data.message || 'Admin verified successfully! You can now enter your details.');
                
                // Redirect to login after 3 seconds on successful verification
                setTimeout(() => {
                    navigate('/admin/signin');
                }, 3000);
            } catch (error) {
                setError(error.response?.data?.message || 'Verification failed. Invalid or expired token.');
            } finally {
                setLoading(false); // End loading state
            }
        };

        verifyToken();
    }, [token, navigate]);

    return (
        <div>
            <h2>Verification Status</h2>
            {loading ? (
                <p>Verifying your email, please wait...</p>
            ) : (
                <>
                    {message && <p>{message}</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {message && !error && <p>Redirecting to login...</p>}
                </>
            )}
        </div>
    );
};

export default VerifyAdmin;
