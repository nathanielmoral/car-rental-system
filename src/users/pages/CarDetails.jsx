import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CarDetailsSection from "../components/CarDetailsSection";
import ReservationForm from "../components/ReservationForm";
import CustomerReviews from "../components/CustomerReviews";

const CarDetails = () => {
  const location = useLocation();
  const car = location.state;

  const [reservationStatus, setReservationStatus] = useState('idle');

  if (!car) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-xl text-gray-600">Car details are not available</p>
      </div>
    );
  }

  const handleReservationComplete = () => {
    setReservationStatus('confirmed');
  };

  const resetReservation = () => {
    setReservationStatus('idle');
  };

  return (
<div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <CarDetailsSection car={car} />
          <ReservationForm 
            car={car} 
            reservationStatus={reservationStatus}
            onReservationComplete={handleReservationComplete}
            onResetReservation={resetReservation}
          />
        </div>

         {/* Add a break line */}
         <div className="border-t border-gray-500 my-8"></div>
        
        {/* Add CustomerReviews component */}
        <CustomerReviews carId={car.id} />
      </div>
    </div>
  );
};

export default CarDetails;