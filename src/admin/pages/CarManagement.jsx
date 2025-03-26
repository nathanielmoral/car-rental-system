import { useState } from "react";
import CarTable from "../components/CarTable";
import CarForm from "../components/CarForm";
import DeleteModal from "../components/DeleteModal";

const CarManagement = () => {
  const [cars, setCars] = useState([
 {
    id: 1,
    name: "Toyota Corolla",
    model: "2022",
    status: "Available",
    price: 2200,
    imageUrl: "https://images.hgmsites.net/lrg/2022-toyota-corolla-xle-cvt-natl-angular-front-exterior-view_100805096_l.jpg",
  },
  {
    id: 2,
    name: "Honda Accord",
    model: "2020",
    status: "Rented",
    price: 2700,
    imageUrl: "https://www.autodeal.com.ph/custom/blog-post/header/2020-honda-accord-1-5-turbo-cvt-review-5e5d01059073e.jpg",
  },
  {
    id: 3,
    name: "Ford Explorer",
    model: "2023",
    status: "Maintenance",
    price: 3500,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VUOyBBaq8ymiseFJ_D2uON5bjQTALI8mqw&s",
  },
  {
    id: 4,
    name: "BMW X5",
    model: "2021",
    status: "Available",
    price: 5000,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGXe4N-_y8NRHlJkZirdIuYMHLurAkIpztg&s",
  },
  {
    id: 5,
    name: "Mercedes-Benz C-Class",
    model: "2019",
    status: "Rented",
    price: 4800,
    imageUrl: "https://www.motortrend.com/uploads/sites/10/2018/11/2019-mercedes-benz-c-class-c300-sedan-angular-front.png",
  },
  {
    id: 6,
    name: "Hyundai Tucson",
    model: "2022",
    status: "Available",
    price: 2600,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPMBTtV1VdsyLrWsp0Gh-GlzYEJgxGciYkw&s",
  },
  {
    id: 7,
    name: "Chevrolet Suburban",
    model: "2023",
    status: "Rented",
    price: 4000,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFiBMHoG-4wVoYLNKWp9IAWyF2Uhop6UoJxQ&s",
  },
  {
    id: 8,
    name: "Nissan Navara",
    model: "2021",
    status: "Maintenance",
    price: 3000,
    imageUrl: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/nissan-navara-my21-index-1.png",
  },
  {
    id: 9,
    name: "Tesla Model 3",
    model: "2022",
    status: "Available",
    price: 6000,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVvlcdbio8DDEyQoHVQAFv_j9fuhy8dTScig&s",
  },
  {
    id: 10,
    name: "Mazda CX-5",
    model: "2020",
    status: "Rented",
    price: 3200,
    imageUrl: "https://images.summitmedia-digital.com/topgear/images/2020/12/17/mazda-cx5-2020-main-1608201371.jpg",
  },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editCar, setEditCar] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteCar, setDeleteCar] = useState(null);

  // Add new car
  const handleAddCar = (newCar) => {
    setCars([...cars, { id: cars.length + 1, ...newCar }]);
    setShowForm(false);
  };

  // Open form to edit existing car
  const handleEditCar = (car) => {
    setEditCar(car);
    setShowForm(true);
  };

  // Confirm delete action
  const confirmDeleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
    setShowDeleteModal(false);
  };

  return (
    <div className=" w-full">
      {/* Header */}
      <div className=" p-6 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Car Management</h2>
          {/* Add Car Button */}
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-700
                      rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                      transition-colors" 
          >
            Add New Car
          </button>
        </div>

        {/* Car Table */}
        <CarTable
          cars={cars}
          onEdit={handleEditCar}
          onDelete={(car) => {
            setDeleteCar(car);
            setShowDeleteModal(true);
          }}
        />
      </div>

      {/* Car Form Modal */}
      {showForm && (
        <CarForm
          show={showForm}
          car={editCar}
          onSave={handleAddCar}
          onClose={() => {
            setShowForm(false);
            setEditCar(null);
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteModal
          show={showDeleteModal}
          car={deleteCar}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={confirmDeleteCar}
        />
      )}
    </div>
  );
};

export default CarManagement;
