import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const CampusLife = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar transparent={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 font-serif mb-6">Campus Life</h1>
          <p className="text-lg text-gray-600 mb-8">
            Experience a vibrant community with endless opportunities to grow, connect, and thrive. From student organizations to division athletics, there is something for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-green-50 rounded-xl border border-green-100">
              <h3 className="text-2xl font-bold text-green-900 mb-3">Student Organizations</h3>
              <p className="text-green-800">Join over 300 clubs and organizations to pursue your passions, develop leadership skills, and make lifelong friends.</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
              <h3 className="text-2xl font-bold text-purple-900 mb-3">Athletics & Recreation</h3>
              <p className="text-purple-800">Cheer on our Division I teams or stay active with intramural sports and state-of-the-art fitness centers.</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <img src="/campus_life.png" alt="Campus Life" className="w-full h-64 object-cover rounded-xl shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
