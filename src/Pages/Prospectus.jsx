import React, { useEffect, useState } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import '../App.css';

const Prospects = () => {
  // Mock API response
  const mockApiResponse = {
    tags: [1, 2, 3],
    prospects: [
      { email: "user1@example.com", phone: "123-456-7890", notes: "Important client" },
      { email: "user2@example.com", phone: "234-567-8901", notes: "Follow up next week" },
      { email: "user3@example.com", phone: "345-678-9012", notes: "Interested in premium plan" }
    ]
  };

  const [prospects, setProspects] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProspect, setSelectedProspect] = useState(null);
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPhone, setUpdatedPhone] = useState('');
  const [updatedNotes, setUpdatedNotes] = useState('');

  useEffect(() => {
    const fetchProspects = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProspects(mockApiResponse.prospects);
    };
    fetchProspects();
  }, []);

  const handleDelete = (email) => {
    setProspects(prospects.filter(prospect => prospect.email !== email));
  };

  const openEditModal = (prospect) => {
    setSelectedProspect(prospect);
    setUpdatedEmail(prospect.email);
    setUpdatedPhone(prospect.phone);
    setUpdatedNotes(prospect.notes);
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = () => {
    setProspects(prospects.map(prospect => 
      prospect.email === selectedProspect.email
        ? { ...prospect, email: updatedEmail, phone: updatedPhone, notes: updatedNotes }
        : prospect
    ));
    setIsEditModalOpen(false);
  };

  return (
    <div className="prospects-page p-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">Prospects</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="custom-bg-gradient">
            <th className="py-2 px-4 border text-gray-600">Email</th>
            <th className="py-2 px-4 border text-gray-600">Phone</th>
            <th className="py-2 px-4 border text-gray-600">Notes</th>
            <th className="py-2 px-4 border text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {prospects.map((prospect) => (
            <tr key={prospect.email} className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center border">{prospect.email}</td>
              <td className="py-2 px-4 text-center border">{prospect.phone}</td>
              <td className="py-2 px-4 text-center border">{prospect.notes}</td>
              <td className="py-2 px-4 text-center border">
                <button
                  className="text-red-500 hover:text-red-300 mr-2"
                  onClick={() => handleDelete(prospect.email)}
                >
                  <FaTrash size={14} />
                </button>
                <button
                  className="text-blue-500 hover:text-blue-300"
                  onClick={() => openEditModal(prospect)}
                >
                  <FaPen size={14} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for editing a prospect */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300">
          <div className="custom-bg-gradient p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-300 scale-100">
            <h2 className="text-lg font-semibold mb-4">Edit Prospect</h2>
            <input
              type="email"
              placeholder="Email"
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
              className="w-full p-2 mb-3 border rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              value={updatedPhone}
              onChange={(e) => setUpdatedPhone(e.target.value)}
              className="w-full p-2 mb-3 border rounded"
            />
            <textarea
              placeholder="Notes"
              value={updatedNotes}
              onChange={(e) => setUpdatedNotes(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
              rows="3"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSubmit}
                className="bg-custom-gradient text-white px-4 py-2 rounded "
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prospects;
