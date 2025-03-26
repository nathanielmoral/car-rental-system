import React, { useState, useCallback, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import CarManagement from "../pages/CarManagement";
import Dashboard from "../pages/Dashboard";
import ProfileEdit from "../pages/ProfileEdit";
import UserBookings from "../pages/UserBookings";
import AdminNotificationPage from "../pages/AdminNotificationPage";
import AdminReservationsPage from "../pages/AdminReservationPage";

const AdminLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(window.innerWidth < 1024);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarCollapsed((prev) => !prev);
  }, []);

  // ✅ Apply dark mode class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* ✅ Header with Dark Mode Toggle */}
      <Header isCollapsed={isSidebarCollapsed} onMenuToggle={toggleSidebar} darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex flex-grow pt-16">
        {/* Sidebar */}
        <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main Content Area */}
        <div
          className={`flex-grow bg-white dark:bg-gray-900 overflow-auto transition-all duration-300 ease-in-out ${
            isSidebarCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          <Routes>
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="cars" element={<CarManagement />} />
            <Route path="profile" element={<ProfileEdit />} />
            <Route path="bookings" element={<UserBookings />} />
            <Route path="notifications" element={<AdminNotificationPage />} />
            <Route path="reservations" element={<AdminReservationsPage />} />
          </Routes>
        </div>
      </div>

      <Footer isCollapsed={isSidebarCollapsed} />
    </div>
  );
};

export default AdminLayout;
