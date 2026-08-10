import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Research = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar transparent={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 font-serif mb-6">Global Impact Research</h1>
          <p className="text-lg text-gray-600 mb-8">
            Our research initiatives span the globe, addressing the most pressing challenges of our time through interdisciplinary collaboration. We are committed to making a difference.
          </p>
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">State-of-the-Art Facilities</h3>
                <p className="text-blue-800">Explore our cutting-edge laboratories and centers of excellence equipped with the latest technology for groundbreaking discoveries.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <img src="/research.png" alt="Research" className="w-full h-80 object-cover rounded-xl shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
