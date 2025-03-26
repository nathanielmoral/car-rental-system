import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiCreditCard, HiCalendar, HiBell, HiCog,HiUserGroup } from "react-icons/hi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SidebarProfile from "../components/SidebarProfile";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const location = useLocation();

  return (
    <div
      className={`fixed inset-y-0 left-0 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-lg z-50 transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-64"
      } flex flex-col justify-between`}
      style={{ maxHeight: "calc(110vh - 4rem)" }}
    >
      {/* ✅ Brand / Logo - Centered & Responsive */}
      <div className="flex items-center justify-center py-4 border-b border-gray-400 dark:border-gray-300 text-gray-600 dark:text-gray-300">
        {!isCollapsed ? (
          <SidebarProfile />
        ) : (
          <img src="/images/profile-pic.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
        )}
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-12 right-0 transform translate-x-1/2 bg-gray-100 dark:bg-gray-700 p-2 rounded-full shadow-lg border-2 border-gray-300 dark:border-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
      >
        {isCollapsed ? (
          <BsChevronRight className="text-gray-700 dark:text-gray-300 w-5 h-5" />
        ) : (
          <BsChevronLeft className="text-gray-700 dark:text-gray-300 w-5 h-5" />
        )}
      </button>

      {/* ✅ Sidebar Navigation */}
      <nav className="flex flex-col mt-6 space-y-1 flex-grow">
      <SidebarItem
          to="/admin/dashboard"
          icon={
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clipRule="evenodd"/>
            </svg>
          }
          text="Dashboard"
          isCollapsed={isCollapsed}
          activePath={location.pathname}
        />
        <SidebarItem to="/admin/cars" icon={<HiCreditCard />} text="Car Management" isCollapsed={isCollapsed} activePath={location.pathname} />
        <SidebarItem to="/admin/bookings" icon={<HiUserGroup />} text="User Bookings" isCollapsed={isCollapsed} activePath={location.pathname} />
        <SidebarItem to="/admin/notifications" icon={<HiBell />} text="Notification" isCollapsed={isCollapsed} activePath={location.pathname} />
        <SidebarItem to="/admin/reservations" icon={<HiCalendar />} text="reservations" isCollapsed={isCollapsed} activePath={location.pathname} />
        <SidebarItem to="/admin/settings" icon={<HiCog />} text="Settings" isCollapsed={isCollapsed} activePath={location.pathname} />
      </nav>


    </div>
  );
};

const SidebarItem = ({ to, icon, text, isCollapsed, activePath }) => {
  const isActive = activePath === to;
  return (
    <Link
      to={to}
      className={`flex items-center py-3 px-5 w-full rounded-lg transition-all duration-300 ${
        isActive
          ? "text-violet-800 font-semibold bg-white  dark:text-violet-400 dark:bg-gray-700"
          : "text-gray-600 dark:text-gray-300 hover:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700"
      }`}
    >
      <span className="text-2xl">{icon}</span>
      {!isCollapsed && <span className="ml-3 text-[15px] tracking-wide">{text}</span>}
    </Link>
  );
};

export default Sidebar;
