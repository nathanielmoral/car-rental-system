import React, { useState } from 'react';
import { Star, CheckCircle, UserCircle } from 'lucide-react';

const CustomerReviews = ({ carId }) => {
  const [reviews] = useState([
    {
      id: 1,
      name: 'Juan Dela Cruz',
      rating: 5,
      date: '2024-03-15',
      comment: 'Napakaganda ng kotse. Smooth ang drive at walang problema.',
      verified: true,
      rental: {
        duration: '3 days',
        model: 'Toyota Vios'
      }
    },
    {
      id: 2,
      name: 'Maria Santos',
      rating: 4,
      date: '2024-02-28',
      comment: 'Maganda ang kondisyon. Konting gastos sa maintenance pero okay naman.',
      verified: true,
      rental: {
        duration: '5 days',
        model: 'Honda City'
      }
    },
    {
      id: 3,
      name: 'Pedro Reyes',
      rating: 5,
      date: '2024-01-10',
      comment: 'Lubos akong nasisiyahan sa aking rental experience.',
      verified: true,
      rental: {
        duration: '2 days',
        model: 'Mitsubishi Mirage'
      }
    }
  ]);

  // Calculate average rating
  const averageRating = reviews.length 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : '0.0';

  return (
    <div className="bg-white p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Customer Reviews
        </h2>
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 ${i < Math.round(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-gray-600 font-medium">
            {averageRating} ({reviews.length} reviews)
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="border-b pb-4 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-3">
                <UserCircle className="h-8 w-8 text-gray-500" />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-800">{review.name}</span>
                    {review.verified && (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-2">{review.comment}</p>
            <div className="text-xs text-gray-500">
              <span>Rental: {review.rental.model}</span>
              <span className="mx-2">•</span>
              <span>Duration: {review.rental.duration}</span>
            </div>
          </div>
        ))}
      </div>

      {reviews.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No reviews yet for this car.
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;