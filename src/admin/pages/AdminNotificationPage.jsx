import React from 'react';
import { 
  Bell, 
  AlertCircle, 
  CheckCircle, 
  XCircle 
} from 'lucide-react';

const AdminNotificationPage = () => {
  const notifications = [
    { 
      id: 1, 
      type: 'reservation', 
      title: 'New Reservation', 
      description: 'Toyota Camry - Pending Confirmation', 
      date: '2024-03-26', 
      status: 'pending' 
    },
    { 
      id: 2, 
      type: 'maintenance', 
      title: 'Vehicle Maintenance', 
      description: 'Car #45 requires immediate service', 
      date: '2024-03-25', 
      status: 'urgent' 
    },
    { 
      id: 3, 
      type: 'payment', 
      title: 'Payment Reminder', 
      description: 'Incomplete payment for Reservation #234', 
      date: '2024-03-24', 
      status: 'warning' 
    }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending':
        return <AlertCircle className="text-blue-500 dark:text-blue-300 w-5 h-5" />;
      case 'urgent':
        return <XCircle className="text-red-500 dark:text-red-300 w-5 h-5" />;
      case 'warning':
        return <AlertCircle className="text-yellow-500 dark:text-yellow-300 w-5 h-5" />;
      default:
        return <CheckCircle className="text-green-500 dark:text-green-300 w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f6f9] dark:bg-gray-900 p-8">
      <div className="max-w-full mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center space-x-3">
            <Bell className="text-gray-600 dark:text-gray-300 w-6 h-6" />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Notifications</h1>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className="bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-xl p-4 flex items-center justify-between transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(notification.status)}
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{notification.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{notification.description}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">{notification.date}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900 px-3 py-1 rounded-md text-sm">
                    Details
                  </button>
                  <button className="text-green-600 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900 px-3 py-1 rounded-md text-sm">
                    Resolve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNotificationPage;