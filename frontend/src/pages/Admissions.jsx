import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Admissions = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar transparent={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 font-serif mb-6">Admissions</h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to the admissions process. We are looking for students who are passionate, driven, and ready to make an impact. Review our requirements and deadlines below.
          </p>
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Early Action Deadline</h3>
              <p className="text-blue-800">November 1, 2026</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Regular Decision Deadline</h3>
              <p className="text-gray-600">January 15, 2027</p>
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={() => navigate('/signup')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition shadow-lg"
            >
              Start Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
