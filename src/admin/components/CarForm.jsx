import React, { useState } from "react";

const CarForm = ({ show, onClose, onSave, car }) => {
  // Pre-fill form if editing an existing car, otherwise use defaults
  const [formData, setFormData] = useState(
    car || { name: "", model: "", status: "Available", price: "" }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Simple validation (optional)
    if (!formData.name || !formData.model || !formData.price) {
      alert("Please fill in all required fields.");
      return;
    }
    onSave(formData);
    // Optionally close after save
    onClose();
  };

  // If `show` is false, don't render the modal
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {car ? "Edit Car" : "Add New Car"}
          </h3>
          <button
            onClick={onClose}
            type="button"
            className="ml-auto inline-flex items-center p-1.5 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 
                8.586l4.293-4.293a1 1 0 011.414 
                1.414L11.414 10l4.293 4.293a1 1 0 
                01-1.414 1.414L10 11.414l-4.293 
                4.293a1 1 0 01-1.414-1.414L8.586 
                10 4.293 5.707a1 1 0 010-1.414z"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {/* Car Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Car Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-lg p-2.5 text-sm
                         text-gray-900 focus:ring-blue-500 focus:border-blue-500
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white
                         dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* Model */}
          <div>
            <label
              htmlFor="model"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Model
            </label>
            <input
              id="model"
              name="model"
              type="text"
              required
              value={formData.model}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-lg p-2.5 text-sm
                         text-gray-900 focus:ring-blue-500 focus:border-blue-500
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white
                         dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-lg p-2.5 text-sm
                         text-gray-900 focus:ring-blue-500 focus:border-blue-500
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white
                         dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Available">Available</option>
              <option value="Rented">Rented</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Price (₱/day)
            </label>
            <input
              id="price"
              name="price"
              type="number"
              required
              min="0"
              value={formData.price}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-lg p-2.5 text-sm
                         text-gray-900 focus:ring-blue-500 focus:border-blue-500
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white
                         dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700
                       rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                       dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {car ? "Update Car" : "Add Car"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-gray-500 bg-white border
                       border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900
                       focus:z-10 focus:ring-4 focus:ring-blue-300 dark:bg-gray-700
                       dark:text-gray-300 dark:border-gray-500 dark:hover:text-white
                       dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarForm;
