import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchFilter from "../../Component/SearchFilter";

const availableCars = [
  {
    id: 1,
    name: "Toyota Corolla",
    brand: "Toyota",
    price: 2200,
    year: 2022,
    transmission: "Automatic",
    fuelType: "Gasoline",
    seating: 5,
    mileage: 16, // km/L
    topSpeed: 180, // km/h
    airConditioning: "Yes",
    safety: "ABS, Airbags, Lane Assist",
    description: "A fuel-efficient and reliable sedan perfect for daily commutes.",
    imageUrl: "https://images.hgmsites.net/lrg/2022-toyota-corolla-xle-cvt-natl-angular-front-exterior-view_100805096_l.jpg",
  },
  {
    id: 2,
    name: "Honda Accord",
    brand: "Honda",
    price: 2700,
    year: 2023,
    transmission: "Automatic",
    fuelType: "Hybrid",
    seating: 5,
    mileage: 21, // km/L
    topSpeed: 190, // km/h
    airConditioning: "Yes",
    safety: "ABS, Airbags, Adaptive Cruise Control",
    description: "A stylish and powerful sedan with a smooth hybrid engine.",
    imageUrl: "https://www.autodeal.com.ph/custom/blog-post/header/2020-honda-accord-1-5-turbo-cvt-review-5e5d01059073e.jpg",
  },
  {
    id: 3,
    name: "Ford Explorer",
    brand: "Ford",
    price: 3500,
    year: 2021,
    transmission: "Automatic",
    fuelType: "Gasoline",
    seating: 7,
    mileage: 12, // km/L
    topSpeed: 200, // km/h
    airConditioning: "Yes",
    safety: "ABS, Airbags, Blind Spot Monitoring",
    description: "A spacious and powerful SUV built for adventure and family trips.",
    imageUrl: "https://www.autodeal.com.ph/custom/blog-post/header/ford-explorer-timberline-2021-609b30a641e16.jpg",
  },
  {
    id: 4,
    name: "BMW X5",
    brand: "BMW",
    price: 5000,
    year: 2023,
    transmission: "Automatic",
    fuelType: "Diesel",
    seating: 5,
    mileage: 14, // km/L
    topSpeed: 250, // km/h
    airConditioning: "Yes",
    safety: "ABS, Airbags, Collision Warning System",
    description: "A luxurious SUV with top-tier comfort and cutting-edge technology.",
    imageUrl: "https://mystrongad.com/BOL-BMWofLynchburg/Interactive/X5/2023/CAR%20CUTS/23-BMW-X5-Carbon-Black-Metallic.png",
  },
  {
    id: 5,
    name: "Subaru Forester",
    brand: "Subaru",
    price: 2900,
    year: 2023,
    transmission: "Automatic",
    fuelType: "Gasoline",
    seating: 5,
    mileage: 14, // km/L
    topSpeed: 185, // km/h
    airConditioning: "Yes",
    safety: "ABS, Airbags, AWD Stability Control",
    description: "A capable crossover SUV with all-wheel drive for any terrain.",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2025-subaru-forester-sport-front-three-quarters-2-654ab04740826.jpg?crop=0.662xw:0.556xh;0.104xw,0.281xh&resize=2048:*",
  },
  {
    id: 6,
    name: "Nissan Terra",
    brand: "Nissan",
    price: 3400,
    year: 2022,
    transmission: "Automatic",
    fuelType: "Diesel",
    seating: 7,
    mileage: 12, // km/L
    topSpeed: 190, // km/h
    airConditioning: "Yes",
    safety: "ABS, Airbags, Intelligent Cruise Control",
    description: "A robust and comfortable SUV with advanced safety features.",
    imageUrl: "https://i0.wp.com/goflatoutph.com/wp-content/uploads/2021/09/IMG_5555.jpg?fit=3000%2C1734&ssl=1",
  },
];

const BookNow = () => {
  const navigate = useNavigate();
  const [filteredCars, setFilteredCars] = useState(availableCars);
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    setFilteredCars(
      availableCars.filter((car) => car.name.toLowerCase().includes(lowerQuery))
    );
  };

  const handleFilter = (filters) => {
    let filtered = availableCars;
    
    if (filters.brand) filtered = filtered.filter((car) => car.brand === filters.brand);
    if (filters.year) filtered = filtered.filter((car) => car.year.toString() === filters.year);
    if (filters.transmission) filtered = filtered.filter((car) => car.transmission === filters.transmission);
    if (filters.fuelType) filtered = filtered.filter((car) => car.fuelType === filters.fuelType);
    if (filters.seating) filtered = filtered.filter((car) => car.seating.toString() === filters.seating);
    if (filters.maxPrice) filtered = filtered.filter((car) => car.price <= Number(filters.maxPrice));
    
    setFilteredCars(filtered);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="mt-14 min-h-screen text-gray-800 ">
      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800  py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Book Your Ride Now
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Choose from a variety of top-quality cars at affordable rates.
          </p>
        </div>
      </div>

      {/* Mobile Filter Toggle Button - Visible only on small screens */}
      <div className="md:hidden sticky top-0 z-10 bg-white dark:bg-gray-800 p-4 shadow-md">
        <button 
          onClick={toggleFilter}
          className="w-full py-2 bg-[#1E3A8A] text-white rounded-md flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          {isFilterOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Side Filter - Hidden on mobile when toggled off */}
          <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-80 md:w-72 lg:w-80 flex-shrink-0`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 sticky top-20">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Find Your Car
              </h2>
              <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
            </div>
          </aside>

          {/* Car Listing */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Available Cars <span className="text-sm text-gray-500 dark:text-gray-400">({filteredCars.length} found)</span>
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">Sort by:</span>
                <select className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-1 px-3 text-sm">
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <div
                    key={car.id}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg "
                    onClick={() => navigate(`/car-details/${car.id}`, { state: car })}
                  >
                    <div className="relative">
                      <img src={car.imageUrl} alt={car.name} className="w-full h-52 object-cover" />
                      <div className="absolute top-3 right-3 bg-[#1E3A8A] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {car.year}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{car.name}</h2>
                        <p className="text-lg font-bold text-[#1E3A8A] dark:text-blue-400">₱{car.price.toLocaleString()}<span className="text-xs text-gray-500 font-normal">/day</span></p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{car.brand} • {car.transmission} • {car.fuelType}</p>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span>{car.seating} Seats</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span>{car.mileage} km/L</span>
                        </div>
                      </div>
                      
                      <button className="w-full py-2 bg-[#1E3A8A] text-white text-center font-medium rounded-md hover:bg-blue-800 transition flex items-center justify-center gap-2">
                        View Details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-full py-16  bg-white dark:bg-gray-800">
                <svg className="w-20 h-20 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
                <p className="text-gray-600 dark:text-gray-300 text-lg font-semibold mt-4">
                  No cars found.
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Try adjusting your search filters.
                </p>
                <button 
                  onClick={() => setFilteredCars(availableCars)}
                  className="mt-4 px-4 py-2 bg-[#1E3A8A] text-white rounded-md hover:bg-blue-800 transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;