import React, { useState } from 'react';
import { 
  Calendar, 
  Car, 
  CheckCircle, 
  AlertCircle 
} from 'lucide-react';

const AdminReservationsPage = () => {
  const [reservations, setReservations] = useState([
    {
      id: '234',
      customer: 'John Doe',
      vehicle: {
        model: 'Toyota Camry',
        year: 2022,
        color: 'Silver'
      },
      dates: {
        start: '2024-03-28',
        end: '2024-04-02'
      },
      status: 'pending',
      totalCost: 450.00
    },
    {
      id: '235',
      customer: 'Jane Smith',
      vehicle: {
        model: 'Honda CR-V',
        year: 2023,
        color: 'Blue'
      },
      dates: {
        start: '2024-04-05',
        end: '2024-04-10'
      },
      status: 'confirmed',
      totalCost: 525.00
    },
    {
      id: '236',
      customer: 'Mike Johnson',
      vehicle: {
        model: 'Ford Mustang',
        year: 2022,
        color: 'Red'
      },
      dates: {
        start: '2024-04-15',
        end: '2024-04-20'
      },
      status: 'pending',
      totalCost: 675.00
    }
  ]);

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending':
        return <AlertCircle className="text-yellow-500 dark:text-yellow-300 w-5 h-5" />;
      case 'confirmed':
        return <CheckCircle className="text-green-500 dark:text-green-300 w-5 h-5" />;
      default:
        return <AlertCircle className="text-gray-500 dark:text-gray-300 w-5 h-5" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f6f9] dark:bg-gray-900 p-8">
      <div className="max-w-full mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center space-x-3">
            <Calendar className="text-gray-600 dark:text-gray-300 w-6 h-6" />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Reservations</h1>
          </div>
        </div>

        {/* Reservations Content */}
        <div className="p-6">
          <div className="space-y-4">
            {reservations.map((reservation) => (
              <div 
                key={reservation.id} 
                className="bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-xl p-4 flex items-center justify-between transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(reservation.status)}
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2">
                      <Car className="text-gray-500 dark:text-gray-300 w-5 h-5" />
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {reservation.vehicle.model}
                      </h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${getStatusColor(reservation.status)}`}>
                        {reservation.status}
                      </span>
                    </div>
                    <div className="mt-1">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Renter: {reservation.customer}
                      </p>
                      <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center space-x-2 mt-1">
                        <span>{reservation.dates.start}</span>
                        <span>-</span>
                        <span>{reservation.dates.end}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    ${reservation.totalCost.toFixed(2)}
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900 px-3 py-1 rounded-md text-sm">
                      Details
                    </button>
                    {reservation.status === 'pending' && (
                      <>
                        <button className="text-green-600 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900 px-3 py-1 rounded-md text-sm">
                          Approve
                        </button>
                        <button className="text-red-600 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-900 px-3 py-1 rounded-md text-sm">
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReservationsPage;