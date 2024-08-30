import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profession, setProfession] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && password && email && phone && profession) {
            // Save the user data to local storage
            const user = { name, password, email, phone, profession };
            localStorage.setItem('user', JSON.stringify(user));

            // Clear the form fields
            setName('');
            setPassword('');
            setEmail('');
            setPhone('');
            setProfession('');

            // Redirect to login page
            navigate('/login');
        } else {
            setError('Please fill in all fields.');
        }
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <select
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                >
                    <option value="">Select Profession</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                    <option value="Other">Other</option>
                </select>
                <button type="submit">Sign Up</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Signup;
