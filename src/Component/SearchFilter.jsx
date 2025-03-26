import React, { useState, useEffect } from "react";
import { FaSearch, FaCarSide, FaGasPump, FaCog } from "react-icons/fa";

const SearchFilter = ({ onSearch, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    transmission: "",
    fuelType: "",
    maxPrice: 5000,
    year: "",
    seating: ""
  });
  const [priceLabel, setPriceLabel] = useState("₱3,000");

  const brands = ["Toyota", "Honda", "Ford", "BMW", "Mercedes", "Audi"];
  const transmissions = ["Automatic", "Manual"];
  const fuelTypes = ["Gasoline", "Diesel", "Hybrid", "Electric"];
  const years = ["2023", "2022", "2021", "2020", "2019"];
  const seatingOptions = ["2", "4", "5", "7", "8+"];
  const maxPriceValue = 5000;

  useEffect(() => {
    // Format the price with peso sign and commas
    setPriceLabel(`₱${Number(filters.maxPrice).toLocaleString()}`);
  }, [filters.maxPrice]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    onFilter({ ...filters, [name]: value });
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({ ...prevFilters, maxPrice: value }));
    onFilter({ ...filters, maxPrice: value });
  };

  const clearFilters = () => {
    const resetFilters = {
      brand: "",
      transmission: "",
      fuelType: "",
      maxPrice: 3000,
      year: "",
      seating: ""
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      {/* Search Input */}
      <div className="relative mb-5">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search cars..."
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />
      </div>

      {/* Filter Section */}
      <div className="space-y-5">
        {/* Brand Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center">
            <FaCarSide className="mr-2 text-gray-500 dark:text-gray-400" />
            Brand
          </label>
          <select
            name="brand"
            value={filters.brand}
            onChange={handleFilterChange}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
          >
            <option value="">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Year Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Year
          </label>
          <select
            name="year"
            value={filters.year}
            onChange={handleFilterChange}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
          >
            <option value="">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Transmission Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center">
            <FaCog className="mr-2 text-gray-500 dark:text-gray-400" />
            Transmission
          </label>
          <select
            name="transmission"
            value={filters.transmission}
            onChange={handleFilterChange}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
          >
            <option value="">All Transmissions</option>
            {transmissions.map((transmission) => (
              <option key={transmission} value={transmission}>{transmission}</option>
            ))}
          </select>
        </div>

        {/* Fuel Type Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center">
            <FaGasPump className="mr-2 text-gray-500 dark:text-gray-400" />
            Fuel Type
          </label>
          <select
            name="fuelType"
            value={filters.fuelType}
            onChange={handleFilterChange}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
          >
            <option value="">All Fuel Types</option>
            {fuelTypes.map((fuelType) => (
              <option key={fuelType} value={fuelType}>{fuelType}</option>
            ))}
          </select>
        </div>

        {/* Seating Capacity */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Seating Capacity
          </label>
          <select
            name="seating"
            value={filters.seating}
            onChange={handleFilterChange}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
          >
            <option value="">Any Capacity</option>
            {seatingOptions.map((option) => (
              <option key={option} value={option}>{option} Seats</option>
            ))}
          </select>
        </div>

        {/* Max Price Filter - Range Slider */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Daily Price</label>
            <span className="text-sm font-medium text-[#1E3A8A] dark:text-blue-400">{priceLabel}</span>
          </div>
          <input
            type="range"
            name="maxPrice"
            min="0"
            max={maxPriceValue}
            step="100"
            value={filters.maxPrice}
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-[#1E3A8A]"
          />
          <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
            <span>₱0</span>
            <span>₱{maxPriceValue.toLocaleString()}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => onFilter(filters)}
            className="w-full py-2 bg-[#1E3A8A] hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Apply Filters
          </button>
          <button
            onClick={clearFilters}
            className="w-full py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;