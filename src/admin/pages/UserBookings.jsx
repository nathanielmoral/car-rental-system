import React, { useState } from "react";

const UserBookings = () => {
  const [pendingUsers, setPendingUsers] = useState([
    {
      id: 1,
      fullName: "John Doe",
      contact: "09123456789",
      email: "johndoe@example.com",
      validId: "https://via.placeholder.com/150", // Placeholder ID image
      status: "Pending",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      contact: "09234567890",
      email: "janesmith@example.com",
      validId: "https://via.placeholder.com/150",
      status: "Pending",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    car: "",
    startDate: "",
    endDate: "",
  });

  // Accept or Reject ID Validation
  const handleValidation = (id, isValid) => {
    setPendingUsers(
      pendingUsers.map((user) =>
        user.id === id ? { ...user, status: isValid ? "Accepted" : "Rejected" } : user
      )
    );
  };

  // Handle input changes for booking
  const handleBookingInputChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  // Submit Booking
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Booking added for ${selectedUser.fullName}!`);
    setIsBooking(false);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold">User Bookings</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Manage and validate user bookings</p>

      {/* Pending Users Table */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Contact</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Valid ID</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingUsers.map((user) => (
              <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{user.fullName}</td>
                <td className="px-6 py-4">{user.contact}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <img
                    src={user.validId}
                    alt="Valid ID"
                    className="w-16 h-12 rounded-md object-cover cursor-pointer hover:scale-105 transition"
                    onClick={() => setSelectedUser(user)}
                  />
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-semibold ${
                      user.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                        : user.status === "Accepted"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center space-x-2">
                  {user.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleValidation(user.id, true)}
                        className="py-2 px-3 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 transition"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleValidation(user.id, false)}
                        className="py-2 px-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-200 dark:focus:ring-red-800 transition"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {user.status === "Accepted" && (
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setIsBooking(true);
                      }}
                      className="py-2 px-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 transition"
                    >
                      Add Booking
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booking Modal */}
      {isBooking && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold dark:text-white">Add Booking for {selectedUser.fullName}</h2>

            <form className="mt-4" onSubmit={handleBookingSubmit}>
              {/* Select Car */}
              <label className="block text-gray-700 dark:text-gray-300">Select Car</label>
              <input
                type="text"
                name="car"
                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                placeholder="Enter Car Name or ID"
                required
                onChange={handleBookingInputChange}
              />

              {/* Rental Dates */}
              <label className="block text-gray-700 dark:text-gray-300 mt-2">Start Date</label>
              <input
                type="date"
                name="startDate"
                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
                onChange={handleBookingInputChange}
              />

              <label className="block text-gray-700 dark:text-gray-300 mt-2">End Date</label>
              <input
                type="date"
                name="endDate"
                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
                onChange={handleBookingInputChange}
              />

              {/* Buttons */}
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Confirm Booking
                </button>
                <button
                  type="button"
                  onClick={() => setIsBooking(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBookings;
