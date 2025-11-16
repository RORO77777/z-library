import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 to-blue-100">
      <div className="card bg-white p-8 rounded-2xl shadow-xl border border-base-300 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-gray-700">Email</span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="input input-bordered focus:outline-primary transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text text-gray-700">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered focus:outline-primary transition-all duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full hover:btn-primary-focus transition-all duration-200">
            Logout
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account? <Link to="/register" className="link link-primary hover:link-primary-focus transition-all duration-200">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;