import React, { useState } from "react";
import { Bell, Moon, Sun,Menu } from "lucide-react";

const Header = ({ onMenuToggle, isCollapsed, darkMode, setDarkMode }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New Pending Booking", time: "2 mins ago" },
    { id: 2, message: "Payment Successfull", time: "1 hour ago" }
  ]);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <header
      className={`bg-white dark:bg-gray-900 shadow-sm h-16 flex items-center fixed justify-between z-50 w-full top-0 left-0 px-6 transition-all ${
        isCollapsed ? "ml-16" : "ml-64"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Left Section: Sidebar Toggle + Brand */}
        <div className="flex items-center">
          {/* Sidebar Toggle Button (Visible Only on Small Screens) */}
          <button
            onClick={onMenuToggle}
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 focus:outline-none p-2 rounded md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Brand / Logo */}
          <div className="text-xl font-semibold ml-4 flex items-center space-x-2">
            <span className="text-blue-600 dark:text-blue-400">Drive</span>
            <span className="text-gray-800 dark:text-gray-200">Ease</span>
          </div>
        </div>

        {/* Fixed Right Section: Notifications and Dark Mode */}
        <div className="fixed right-6 top-4 flex items-center space-x-4">
          {/* Notification Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </button>

            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg">
                <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Notifications</h3>
                  <button 
                    className="text-xs text-blue-600 dark:text-blue-400"
                    onClick={() => setNotifications([])}
                  >
                    Clear All
                  </button>
                </div>
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                    No new notifications
                  </div>
                ) : (
                  <ul className="divide-y dark:divide-gray-700">
                    {notifications.map((notification) => (
                      <li 
                        key={notification.id} 
                        className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                      >
                        <div className="flex justify-between">
                          <p className="text-sm text-gray-700 dark:text-gray-200">{notification.message}</p>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? (
              <Moon className="text-gray-500 dark:text-gray-300 w-5 h-5" />
            ) : (
              <Sun className="text-yellow-500 w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;