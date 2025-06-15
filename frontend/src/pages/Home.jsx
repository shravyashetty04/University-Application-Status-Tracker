import React from 'react';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-20">
        <h2 className="text-4xl font-bold text-gray-800">Track Your University Application</h2>
        <p className="text-lg mt-4 text-gray-600">Stay updated with the latest status of your admission process.</p>
        <div className="mt-8 space-x-4">
          <a href="/signup" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Get Started</a>
          <a href="/login" className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-100">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
