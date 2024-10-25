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
      { tag_id: 2, name: "Tag 2", color_hex_code: "#33a4ff" },
      { tag_id: 3, name: "Tag 3", color_hex_code: "#cfeb34" }
    ]
  };

  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(mockApiResponse.tags);
  }, []);

  const handleDelete = (tag_id) => {
    setTags(tags.filter(tag => tag.tag_id !== tag_id));
  };

  return (
    <div className="tags-page p-4">
      <h1 className="text-2xl font-semibold mb-4">Tags</h1>
      <ul>
        {tags.map((tag) => (
          <li
            key={tag.tag_id}
            className="flex items-center justify-between py-2 px-3 mb-2 rounded-md border text-gray-700 max-w-xs custom-bg-gradient"
            style={{
              borderColor: '#D63384',  // Use the border color specified in your CSS or custom color here
              borderWidth: '1px',       // Explicit border width for visibility
              borderStyle: 'solid'      // Ensure a solid border all around
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
    </div>
  );
};

export default Tags;
