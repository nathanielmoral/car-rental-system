import React from "react";
import { 
  FaCar, FaUsers, FaChartLine, FaDollarSign, 
  FaCalendarAlt, FaClipboardList, FaMoneyBillWave,
  FaExclamationTriangle, FaClock, FaCheckCircle 
} from "react-icons/fa";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, 
  XAxis, YAxis, Tooltip, ResponsiveContainer, 
  Legend, Cell, ComposedChart, Area
} from "recharts";

const Dashboard = () => {
  // Expanded Sample Data
  const stats = {
    totalBookings: 420,
    activeRentals: 65,
    earnings: 187500,
    customers: 2100,
    canceledBookings: 25,
    pendingBookings: 30,
    totalScams: 15,
    pendingInvestigations: 5,
    resolvedCases: 10
  };

  const scamTrends = [
    { month: "Jan", reports: 2 },
    { month: "Feb", reports: 3 },
    { month: "Mar", reports: 1 },
    { month: "Apr", reports: 4 },
    { month: "May", reports: 2 },
    { month: "Jun", reports: 3 }
  ];

  const scamTypes = [
    { name: "Fake Listings", value: 6, color: "#EF4444" },
    { name: "Identity Theft", value: 4, color: "#F59E0B" },
    { name: "Payment Fraud", value: 5, color: "#10B981" }
  ];

  const recentScams = [
    { id: 1, user: "Alice Johnson", type: "Fake Listings", date: "Mar 10, 2025", status: "Pending" },
    { id: 2, user: "Bob Smith", type: "Payment Fraud", date: "Mar 8, 2025", status: "Resolved" },
    { id: 3, user: "Charlie Brown", type: "Identity Theft", date: "Mar 5, 2025", status: "Pending" }
  ];

  const revenueData = [
    { month: "Jan", revenue: 12000, bookings: 50 },
    { month: "Feb", revenue: 15000, bookings: 65 },
    { month: "Mar", revenue: 18000, bookings: 75 },
    { month: "Apr", revenue: 22000, bookings: 90 },
    { month: "May", revenue: 20000, bookings: 85 },
    { month: "Jun", revenue: 25000, bookings: 100 },
  ];

  const topCars = [
    { name: "Toyota Corolla", rentals: 75, revenue: 22500 },
    { name: "Honda Civic", rentals: 62, revenue: 18600 },
    { name: "Ford Mustang", rentals: 50, revenue: 25000 },
    { name: "BMW X5", rentals: 45, revenue: 27000 },
  ];

  const bookingTypeData = [
    { name: "Completed", value: 420, color: "#10B981" },
    { name: "Canceled", value: 25, color: "#EF4444" },
    { name: "Pending", value: 30, color: "#F59E0B" },
  ];

  const recentBookings = [
    { id: 1, customer: "John Doe", car: "Honda Civic", date: "Feb 5, 2025", status: "Completed" },
    { id: 2, customer: "Jane Smith", car: "Ford Mustang", date: "Feb 4, 2025", status: "Pending" },
    { id: 3, customer: "Michael Lee", car: "Toyota Corolla", date: "Feb 3, 2025", status: "Completed" },
    { id: 4, customer: "Emily Wong", car: "BMW X5", date: "Feb 2, 2025", status: "Canceled" },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case "Completed": return "bg-green-500";
      case "Pending": return "bg-yellow-500";
      case "Canceled": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Drive Ease Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Comprehensive Car Rental Management</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="card bg-blue-500 text-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
          <div className="flex justify-between items-center">
            <FaCalendarAlt size={30} />
            <div className="text-right">
              <h2 className="text-sm font-semibold">Total Bookings</h2>
              <p className="text-2xl font-bold">{stats.totalBookings}</p>
            </div>
          </div>
        </div>

        <div className="card bg-green-500 text-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
          <div className="flex justify-between items-center">
            <FaCar size={30} />
            <div className="text-right">
              <h2 className="text-sm font-semibold">Active Rentals</h2>
              <p className="text-2xl font-bold">{stats.activeRentals}</p>
            </div>
          </div>
        </div>

        <div className="card bg-yellow-500 text-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
          <div className="flex justify-between items-center">
            <FaMoneyBillWave size={30} />
            <div className="text-right">
              <h2 className="text-sm font-semibold">Total Earnings</h2>
              <p className="text-2xl font-bold">₱{stats.earnings.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="card bg-purple-500 text-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
          <div className="flex justify-between items-center">
            <FaUsers size={30} />
            <div className="text-right">
              <h2 className="text-sm font-semibold">Total Customers</h2>
              <p className="text-2xl font-bold">{stats.customers}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scam Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <FaExclamationTriangle size={30} />
            <div className="text-right">
              <h2 className="text-sm">Total Scam Reports</h2>
              <p className="text-2xl font-bold">{stats.totalScams}</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <FaClock size={30} />
            <div className="text-right">
              <h2 className="text-sm">Pending Investigations</h2>
              <p className="text-2xl font-bold">{stats.pendingInvestigations}</p>
            </div>
          </div>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <FaCheckCircle size={30} />
            <div className="text-right">
              <h2 className="text-sm">Resolved Cases</h2>
              <p className="text-2xl font-bold">{stats.resolvedCases}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Monthly Revenue Chart */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Monthly Revenue & Bookings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" barSize={20} fill="#4F46E5" />
              <Line type="monotone" dataKey="bookings" stroke="#10B981" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Booking Type Distribution */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Booking Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={bookingTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {bookingTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top Rented Cars */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Top Rented Cars</h2>
          <div className="space-y-3">
            {topCars.map((car, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{car.name}</p>
                  <p className="text-sm text-gray-500">{car.rentals} rentals</p>
                </div>
                <span className="font-bold text-green-600">₱{car.revenue.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="p-3 text-left">Customer</th>
                  <th className="p-3 text-left">Car</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b">
                    <td className="p-3">{booking.customer}</td>
                    <td className="p-3">{booking.car}</td>
                    <td className="p-3">{booking.date}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-white text-xs ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Scam Reports Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={scamTrends}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="reports" stroke="#EF4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Scam Type Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie 
                data={scamTypes} 
                cx="50%" 
                cy="50%" 
                outerRadius={80} 
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {scamTypes.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold">Recent Scam Reports</h2>
        <table className="w-full mt-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentScams.map((scam) => (
              <tr key={scam.id} className="border-b">
                <td className="p-3">{scam.user}</td>
                <td className="p-3">{scam.type}</td>
                <td className="p-3">{scam.date}</td>
                <td className="p-3 font-bold">
                  <span className={`px-2 py-1 rounded text-white ${scam.status === "Resolved" ? "bg-green-500" : "bg-yellow-500"}`}>
                    {scam.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;