import React from "react";

const Footer = ({ isCollapsed }) => {
  return (
    <footer
      className={`bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-4 mt-auto transition-all duration-300 ease-in-out ${
        isCollapsed ? "ml-16" : "ml-64"
      }`}
    >
      <div className="mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Car Rental System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
