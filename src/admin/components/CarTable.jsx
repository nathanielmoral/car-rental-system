import React, { useState } from "react";

const CarTable = ({ cars, onEdit, onDelete }) => {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* Table */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {/* Table Head */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Image</th>
            <th className="px-6 py-3">Car Name</th>
            <th className="px-6 py-3">Model</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Price (₱/day)</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {cars.map((car) => (
            <tr
              key={car.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              {/* Car Image - Clickable */}
              <td className="px-6 py-4">
                <img
                  src={car.imageUrl || "https://via.placeholder.com/80"}
                  alt={car.name}
                  className="w-16 h-12 rounded-md object-cover cursor-pointer hover:scale-105 transition"
                  onClick={() => setSelectedCar(car)}
                />
              </td>

              {/* Car Name */}
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {car.name}
              </td>

              {/* Car Model */}
              <td className="px-6 py-4">{car.model}</td>

              {/* Status with Dynamic Badge */}
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 rounded-md text-xs font-semibold ${
                    car.status === "Available"
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                      : car.status === "Rented"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                      : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                  }`}
                >
                  {car.status}
                </span>
              </td>

              {/* Price */}
              <td className="px-6 py-4">₱{car.price}</td>

              {/* Action Buttons */}
              <td className="px-6 py-4 text-center">
                <div className="inline-flex space-x-2">
                  <button
                    onClick={() => setSelectedCar(car)}
                    className="py-2 px-3 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 transition-colors"
                  >
                    View
                  </button>
                  <button
                    onClick={() => onEdit(car)}
                    className="py-2 px-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(car)}
                    className="py-2 px-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-200 dark:focus:ring-red-800 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* View Modal */}
      {selectedCar && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96 relative animate-fadeIn">
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold dark:text-white">{selectedCar.name}</h2>
              <button
                onClick={() => setSelectedCar(null)}
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                ✖
              </button>
            </div>

            {/* Car Image */}
            <img
              src={selectedCar.imageUrl || "https://via.placeholder.com/150"}
              alt={selectedCar.name}
              className="w-full h-48 object-cover rounded-md my-4"
            />

            {/* Car Details */}
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Model:</strong> {selectedCar.model}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Status:</strong> {selectedCar.status}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Price:</strong> ₱{selectedCar.price}/day
            </p>

            {/* Close Button */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setSelectedCar(null)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarTable;
