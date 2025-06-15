import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get('/user/bulk');
        setUser(res.data.user[0]); // dummy data
      } catch {
        alert("Authentication required");
      }
    };

    getUser();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>
      {user ? (
        <div className="bg-white shadow p-4 rounded w-fit">
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.username}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
