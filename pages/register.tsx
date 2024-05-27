import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Link } from 'lucide-react';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reg', formData); 
      alert(response.data.message);
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#4a5568' }}>
      <div style={{ width: '24rem', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', borderRadius: '0.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', textAlign: 'center', fontWeight: 'bold', marginBottom: '1.5rem' }}><i className="fas fa-user"></i> Register</h1>
        <hr style={{ margin: '1rem 0' }} />
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="firstName" style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #d2d6dc', borderRadius: '0.25rem', outline: 'none' }}
              placeholder="Enter First Name..."
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="lastName" style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #d2d6dc', borderRadius: '0.25rem', outline: 'none' }}
              placeholder="Enter Last Name..."
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="username" style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #d2d6dc', borderRadius: '0.25rem', outline: 'none' }}
              placeholder="Enter Username..."
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="password" style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #d2d6dc', borderRadius: '0.25rem', outline: 'none' }}
              placeholder="Enter Password..."
            />
          </div>
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" style={{ marginRight: '0.5rem' }} /> 
              <label style={{ fontSize: '0.875rem' }}>Remember Me</label>
            </div>
            <Link href="/login" style={{ fontSize: '0.875rem', color: '#667eea', fontWeight: 'bold' }}>Already have an account?</Link>
          </div>
          <div>
            <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#667eea', color: '#fff', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}>
              <i className="fas fa-angle-double-right"></i>&nbsp;&nbsp;Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
