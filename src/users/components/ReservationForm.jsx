import React, { useState } from "react";

const ReservationForm = ({ 
  car = { name: 'Vehicle' }, 
  reservationStatus, 
  onReservationComplete,
  onResetReservation 
}) => {
  const [reservationData, setReservationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    pickupDate: "",
    returnDate: "",
    notes: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'pickupDate', 'returnDate'];
    const isValid = requiredFields.every(field => reservationData[field].trim() !== '');

    if (!isValid) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simulating reservation submission
    setTimeout(() => {
      onReservationComplete();
    }, 2000);
  };

  if (reservationStatus === 'confirmed') {
    return (
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8 text-center">
        <div className="bg-green-50 p-6 rounded-lg">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className="w-16 h-16 mx-auto text-green-600 mb-4"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Booking Confirmed</h2>
          <p className="text-green-700 mb-4">Your booking for {car.name} is complete!</p>
          <button 
            onClick={onResetReservation}
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Reserve {car.name}</h2>
        <p className="text-gray-500 mt-2">Fill out the details below</p>
      </div>

      <form onSubmit={handleReservationSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="w-full p-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
              value={reservationData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="w-full p-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
              value={reservationData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full p-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
          value={reservationData.email}
          onChange={handleInputChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full p-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
          value={reservationData.phone}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          className="w-full p-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
          value={reservationData.address}
          onChange={handleInputChange}
        />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Pickup Date</label>
            <input
              type="date"
              name="pickupDate"
              required
              className="w-full p-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
              value={reservationData.pickupDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Return Date</label>
            <input
              type="date"
              name="returnDate"
              required
              className="w-full p-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
              value={reservationData.returnDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <textarea
          name="notes"
          placeholder="Additional Notes (Optional)"
          rows={4}
          className="w-full p-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors resize-none"
          value={reservationData.notes}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Confirm Reservation
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          By proceeding, you agree to our rental terms and conditions.
        </p>
      </form>
    </div>
  );
};

export default ReservationForm;