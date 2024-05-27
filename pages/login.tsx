import React from 'react';

function Login() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#4a5568' }}>
      <div style={{ width: '24rem', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', borderRadius: '0.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', textAlign: 'center', fontWeight: 'bold', marginBottom: '1.5rem' }}><i className="fas fa-user"></i> Login</h1>
        <hr style={{ margin: '1rem 0' }} />
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="username" style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>Username</label>
          <input type="text" id="username" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #d2d6dc', borderRadius: '0.25rem', outline: 'none' }} placeholder="Enter Username..." />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="password" style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>Password</label>
          <input type="password" id="password" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #d2d6dc', borderRadius: '0.25rem', outline: 'none' }} placeholder="Enter Password..." />
        </div>
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" style={{ marginRight: '0.5rem' }} /> 
            <label style={{ fontSize: '0.875rem' }}>Remember Me</label>
          </div>
          <a href="/register" style={{ fontSize: '0.875rem', color: '#667eea', fontWeight: 'bold' }}>New User?</a>
        </div>
        <div>
          <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#667eea', color: '#fff', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}><i className="fas fa-angle-double-right"></i>&nbsp;&nbsp;Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
