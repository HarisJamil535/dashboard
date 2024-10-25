import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import '../App.css'; 

const Prospects = () => {
  // Mock API response
  const mockApiResponse = {
    tags: [1, 2, 3],
    prospects: [
      { username: "User 1", full_name: "User One" },
      { username: "User 2", full_name: "User Two" },
      { username: "User 3", full_name: "User Three" }
    ]
  };

  const [prospects, setProspects] = useState([]);

  useEffect(() => {
    // Simulate an API call
    const fetchProspects = async () => {
      // Mocking a delay to simulate an API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setProspects(mockApiResponse.prospects);
    };

    fetchProspects();
  }, []);

  const handleDelete = (username) => {
    setProspects(prospects.filter(prospect => prospect.username !== username));
  };

  return (
    <div className="prospects-page p-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">Prospects</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="custom-bg-gradient">
            <th className="py-2 px-4 border text-gray-600">Username</th>
            <th className="py-2 px-4 border text-gray-600">Full Name</th>
            <th className="py-2 px-4 border text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {prospects.map((prospect) => (
            <tr key={prospect.username} className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center border">{prospect.username}</td>
              <td className="py-2 px-4 text-center border">{prospect.full_name}</td>
              <td className="py-2 px-4 text-center border">
                <button
                  className="text-red-500 hover:text-red-300"
                  onClick={() => handleDelete(prospect.username)}
                >
                  <FaTrash size={14} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prospects;
