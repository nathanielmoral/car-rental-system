import React from "react";
import { Link } from "react-router-dom";

const SidebarProfile = ({ name = "Nathaniel Moral", role = "Administrator", image = "/images/profile-pic.jpg" }) => {
  return (
    <div className="flex flex-col items-center px-4 pt-4 mt-4 border-gray-800">
      <img src={image} alt="Profile" className="w-16 h-16 rounded-full" />
      <div className="ml-3 text-center ">
        <p className=" text-gray-600 dark:text-gray-300 text-sm font-semibold">{name}</p>
        <p className="text-gray-600 dark:text-gray-300 text-xs">{role}</p>
        {/* ✅ Clickable View Profile Link */}
        <Link to="/admin/profile" className="text-xs text-violet-800 dark:text-violet-400 hover:underline">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default SidebarProfile;
