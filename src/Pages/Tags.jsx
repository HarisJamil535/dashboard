import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import '../App.css'; 

const Tags = () => {
  // Mock API response
  const mockApiResponse = {
    nb_tag: 3,
    tags: [
      { tag_id: 1, name: "Tag 1", color_hex_code: "green" },
      { tag_id: 2, name: "Tag 2", color_hex_code: "#ff5733" },
      { tag_id: 3, name: "Tag 3", color_hex_code: "#33c4ff" },
    ]
  };

  const [tags, setTags] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTagName, setNewTagName] = useState('');
  const [newTagColor, setNewTagColor] = useState('#000000'); // Default color

  useEffect(() => {
    setTags(mockApiResponse.tags);
  }, []);

  const handleDelete = (tag_id) => {
    setTags(tags.filter(tag => tag.tag_id !== tag_id));
  };

  const handleAddTag = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!newTagName) {
      alert("Tag name is required"); // Custom error handling
      return;
    }

    const newTag = {
      tag_id: Date.now(),  // Unique id
      name: newTagName,
      color_hex_code: newTagColor
    };
    setTags([...tags, newTag]);
    setIsModalOpen(false);
    setNewTagName('');
    setNewTagColor('#000000'); // Reset to default color
  };

  return (
    <div className="tags-page p-4">
      <h1 className="text-2xl font-semibold">Tags</h1>

      <button
        className="bg-custom-gradient text-white px-4 py-2 text-[13px] mt-3 rounded hover:bg-blue-400"
        onClick={() => setIsModalOpen(true)}
      >
        Add New Tag
      </button>

      <ul className="mt-3">
        {tags.map((tag) => (
          <li
            key={tag.tag_id}
            className="flex items-center justify-between py-2 px-3 mb-2 rounded-md border text-gray-700 max-w-xs custom-bg-gradient"
            style={{
              borderColor: '#D63384',
              borderWidth: '1px',
              borderStyle: 'solid'
            }}
          >
            <div className="flex items-center space-x-3">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: tag.color_hex_code }}
              ></span>
              <span className="tag-name font-medium">{tag.name}</span>
            </div>
            
            <button
              className="text-red-500 hover:text-red-300"
              onClick={() => handleDelete(tag.tag_id)}
            >
              <FaTrash size={14} />
            </button>
          </li>
        ))}
      </ul>

      {/* Modal for adding a new tag */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300">
          <div className="custom-bg-gradient p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-300 scale-100">
            <h2 className="text-lg font-semibold mb-4">Add New Tag</h2>
            <form onSubmit={handleAddTag}> {/* Wrap input in a form */}
              <input
                type="text"
                placeholder="Tag Name"
                required
                value={newTagName}
                onChange={(e) => setNewTagName(e.target.value)}
                className="w-full p-2 mb-3 border rounded"
              />
              <div className="mb-4">
                <label className="block mb-1">Tag Color:</label>
                <input
                  type="color" 
                  value={newTagColor}
                  onChange={(e) => setNewTagColor(e.target.value)}
                  className="w-16 h-10 rounded-none appearance-none border-none" // Custom styles
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit" // Set type to submit
                  className="bg-custom-gradient text-white px-4 py-2 rounded"
                >
                  Add Tag
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tags; 
