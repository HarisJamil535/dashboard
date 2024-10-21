import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Main from "./Pages/Main";
import Settings from "./Pages/Settings";
import Templates from "./Pages/Templates";
import Tags from "./Pages/Tags";
import Prospectus from "./Pages/Prospectus";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar open/close state

  // Sidebar toggle function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sidebar close function
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        {isLoggedIn && (
          <>
            <Navbar toggleSidebar={toggleSidebar} />

            
         
          </>
        )}

           {/* Sidebar */}
           
           <div className="flex ">
            {isLoggedIn&&
           <Sidebar
              isOpen={isSidebarOpen}
              onClose={closeSidebar}
              toggleSidebar={toggleSidebar}
            />
          }

        <div className={`flex-1  ${isLoggedIn ? "" : ""}`}>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Protected Routes (only accessible when logged in) */}
            {isLoggedIn ? (
              <>
                <Route path="/main" element={<Main />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/tags" element={<Tags />} />
                <Route path="/prospectus" element={<Prospectus />} />
                <Route path="/" element={<Navigate to="/main" />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
