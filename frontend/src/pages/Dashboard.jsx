import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [application, setApplication] = useState(null);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [courseInput, setCourseInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetchApplication();
  }, []);

  const fetchApplication = async () => {
    const token = localStorage.getItem('token');
    
    try {
      const response = await fetch('http://localhost:3000/api/v1/application', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setApplication(data.application);
      } else if (response.status === 403 || response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
      }
    } catch (err) {
      setError('Failed to fetch application data');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitApplication = async () => {
    if (!courseInput.trim()) {
      setError('Please enter a course name');
      return;
    }

    setSubmitting(true);
    setError('');
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:3000/api/v1/application', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ course: courseInput }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Application submitted successfully!');
        setApplication(data.application);
        setShowSubmitForm(false);
        setCourseInput('');
      } else {
        setError(data.message || 'Failed to submit application');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-800 border border-green-200 shadow-sm">Approved</span>;
      case 'Rejected':
        return <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-red-100 text-red-800 border border-red-200 shadow-sm">Rejected</span>;
      case 'Pending':
      default:
        return <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800 border border-yellow-200 shadow-sm">Pending Review</span>;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans">
        <div className="flex flex-col items-center space-y-4 text-blue-900">
          <svg className="animate-spin h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="font-semibold tracking-wide uppercase text-sm">Loading Portal...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation */}
      <nav className="bg-blue-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              <h1 className="text-xl font-bold text-white tracking-widest font-serif">UNIVERSITAS</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200 text-sm hidden sm:block">Student Portal</span>
              <button
                onClick={handleLogout}
                className="bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium text-white transition duration-200 border border-blue-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 font-serif">Welcome to your Dashboard</h2>
            <p className="mt-1 text-gray-500 text-lg">Manage your university applications and check your admission status.</p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 shadow-sm flex justify-between items-center">
            <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-medium text-green-800">{success}</span>
            </div>
            <button onClick={() => setSuccess('')} className="text-green-600 hover:text-green-800 font-bold">×</button>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 shadow-sm flex justify-between items-center">
             <div className="flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-medium text-red-800">{error}</span>
            </div>
            <button onClick={() => setError('')} className="text-red-600 hover:text-red-800 font-bold">×</button>
          </div>
        )}

        <div className="bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
            {!application ? (
              // No application submitted yet
              <div className="text-center py-16 px-6">
                <div className="mx-auto h-24 w-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                    <svg className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-serif mb-2">No Application Found</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-8">
                  You haven't submitted an application yet. Start your journey with Universitas by applying for your desired program today.
                </p>
                <button
                  onClick={() => setShowSubmitForm(true)}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  Start New Application
                </button>
              </div>
            ) : (
              // Application exists
              <div className="p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-serif">Application Status</h3>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                        ID: {application._id}
                    </p>
                  </div>
                  <div>
                    {getStatusBadge(application.status)}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Intended Major / Course</label>
                    <p className="text-xl font-bold text-blue-900">{application.course}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Term</label>
                    <p className="text-xl font-bold text-gray-800">Fall 2026</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
                        Important Notice
                    </h4>
                    <p className="text-sm text-blue-800 leading-relaxed">
                      {application.status === 'Pending' && 'Your application is currently under review by the admissions committee. We will notify you via email once a decision has been finalized. Thank you for your patience.'}
                      {application.status === 'Approved' && 'Congratulations! The admissions committee has reviewed your application and we are thrilled to offer you admission to Universitas. Check your email for next steps regarding enrollment.'}
                      {application.status === 'Rejected' && 'After careful review of your application, we regret to inform you that we cannot offer you admission at this time. We wish you the best in your future academic endeavors.'}
                    </p>
                </div>
              </div>
            )}
        </div>

        {/* Submit Application Modal */}
        {showSubmitForm && (
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
            <div className="relative mx-auto w-full max-w-md shadow-2xl rounded-2xl bg-white overflow-hidden">
              <div className="bg-blue-900 px-6 py-4">
                <h3 className="text-xl font-bold text-white font-serif">New Application</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-6">Select your intended major to begin the application process.</p>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Course / Major Name
                  </label>
                  <input
                    type="text"
                    value={courseInput}
                    onChange={(e) => setCourseInput(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow shadow-sm"
                    placeholder="e.g. Computer Science, B.S."
                  />
                </div>
                <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => {
                      setShowSubmitForm(false);
                      setCourseInput('');
                      setError('');
                    }}
                    className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 focus:outline-none transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitApplication}
                    disabled={submitting}
                    className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;