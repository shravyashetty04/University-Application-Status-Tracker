import React, { useState } from 'react';
import axios from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/user/signin', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded max-w-sm w-full space-y-4">
        <h2 className="text-xl font-bold text-center">Login</h2>
        <input name="username" placeholder="Email" className="border p-2 w-full" onChange={handleChange} />
        <input name="password" placeholder="Password" type="password" className="border p-2 w-full" onChange={handleChange} />
        <button className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
}

export default Login;
