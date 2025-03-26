import "flowbite/dist/flowbite.css";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./admin/layouts/AdminLayout";
import BookNow from "./users/pages/BookNow";
import UserLayout from "./users/UserLayout";
import Home from "./users/pages/Section/Home";
import CarDetails from "./users/pages/CarDetails";

function App() {
  return (
    <div className="min-h-screen flex-grow">
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/" element={<UserLayout><Home /></UserLayout>} />
        <Route path="/book-now" element={<UserLayout><BookNow /></UserLayout>} />
        <Route path="/car-details/:id" element={<UserLayout><CarDetails /></UserLayout>} />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </div>
  );
}

export default App;
