import React, { useState } from 'react';
import Accounts from './Accounts';
import Hashtag from './Hashtags';
import Posts from './Posts';
import List from './List';
import '../App.css'
const Tabs = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mb-4 ">
      <ul
        className="flex flex-wrap -mb-px text-sm justify-center font-medium text-center"
        role="tablist"
      >
        <li className="me-2" role="presentation">
          <button
            className={`inline-block p-3 border-b-2 rounded-t-lg ${
              activeTab === 'profile'
                ? 'text-[#fe2dbc] border-[#fe2dbc] custom-bg-gradient'
                : 'text-gray-500 hover:text-gray-600 border-transparent'
            }`}
            onClick={() => handleTabClick('profile')}
            role="tab"
          >
            Accounts
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className={`inline-block p-3 border-b-2 rounded-t-lg ${
              activeTab === 'dashboard'
                ? 'text-[#fe2dbc] border-[#fe2dbc] custom-bg-gradient'
                : 'text-gray-500 hover:text-gray-600 border-transparent'
            }`}
            onClick={() => handleTabClick('dashboard')}
            role="tab"
          >
            Hashtags
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className={`inline-block p-3  border-b-2 rounded-t-lg ${
              activeTab === 'settings'
                ? 'text-[#fe2dbc] border-[#fe2dbc] custom-bg-gradient '
                : 'text-gray-500 hover:text-gray-600 border-transparent'
            }`}
            onClick={() => handleTabClick('settings')}
            role="tab"
          >
            Posts
          </button>
        </li>
        <li role="presentation">
          <button
            className={`inline-block p-3 border-b-2 rounded-t-lg ${
              activeTab === 'contacts'
                ? 'text-[#fe2dbc] border-[#fe2dbc] custom-bg-gradient'
                : 'text-gray-500 hover:text-gray-600 border-transparent'
            }`}
            onClick={() => handleTabClick('contacts')}
            role="tab"
          >
            List
          </button>
        </li>
      </ul>
      <div>
        {activeTab === 'profile' && (
          <div className="p-4 w-full rounded-lg  dark:bg-gray-800">
            
             <Accounts/>
            
          </div>
        )}
        {activeTab === 'dashboard' && (
          <div className="p-4 rounded-lg w-full dark:bg-gray-800">

            <Hashtag/>
            
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="p-4 rounded-lg  dark:bg-gray-800">
            <Posts/>
          </div>
        )}
        {activeTab === 'contacts' && (
          <div className="p-4 rounded-lg  dark:bg-gray-800">
           <List/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
