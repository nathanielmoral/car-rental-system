import React from "react";

const DeleteModal = ({ show, onClose, onConfirm, car }) => {
  if (!show) return null; // If 'show' is false, do not render anything

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
            Delete Car
          </h3>
          {/* Close Button */}
          <button
            onClick={onClose}
            type="button"
            className="ml-auto inline-flex items-center p-1.5 text-sm text-gray-400 
                       bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 
                       dark:hover:bg-gray-700 dark:hover:text-white"
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
                d="M4.293 4.293a1 
                   1 0 011.414 0L10 8.586l4.293-4.293a1 
                   1 0 011.414 1.414L11.414 10l4.293 
                   4.293a1 1 0 01-1.414 1.414L10 
                   11.414l-4.293 4.293a1 1 0 
                   01-1.414-1.414L8.586 10 
                   4.293 5.707a1 1 0 010-1.414z"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <p className="text-gray-700 dark:text-gray-200">
            Are you sure you want to delete{" "}
            <strong>{car?.name}</strong>?<br />
            This action cannot be undone.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b
                        dark:border-gray-700">
          {/* Delete Button */}
          <button
            type="button"
            onClick={() => onConfirm(car.id)}
            className="px-5 py-2.5 text-sm font-medium text-center text-white
                       bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4
                       focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700
                       dark:focus:ring-red-800"
          >
            Delete
          </button>
          {/* Cancel Button */}
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-gray-500
                       bg-white border border-gray-200 rounded-lg hover:bg-gray-100 
                       hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200
                       dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500
                       dark:hover:bg-gray-600 dark:hover:text-white 
                       dark:focus:ring-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
