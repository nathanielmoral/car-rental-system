import React from "react";

const CarDetailsSection = ({ car }) => {
  const specifications = [
    { label: "Brand", value: car.brand },
    { label: "Transmission", value: car.transmission },
    { label: "Fuel Type", value: car.fuelType },
    { label: "Seating", value: `${car.seating} persons` },
    { label: "Mileage", value: `${car.mileage} km/L` },
    { label: "Top Speed", value: `${car.topSpeed} km/h` },
    { label: "Air Conditioning", value: car.airConditioning },
    { label: "Safety", value: car.safety },
  ];

  return (
    <div className="space-y-8">
      <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
        <img 
          src={car.imageUrl} 
          alt={car.name} 
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h1 className="text-3xl font-medium text-gray-900">{car.name}</h1>
        <p className="text-2xl font-light text-gray-600 mt-1">₱{car.price}/day</p>

        <div className="mt-6">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Specifications</h2>
          <div className="grid grid-cols-2 gap-y-4 text-sm">
            {specifications.map((spec, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-gray-500">{spec.label}</span>
                <span className="text-gray-900 font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsSection;