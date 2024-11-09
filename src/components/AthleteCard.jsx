import { Link } from 'react-router-dom';

const AthleteCard = ({ athlete }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={athlete.image} // Assuming each athlete has an image URL
        alt={athlete.name}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300">{athlete.name}</h3>
        <p className="text-gray-500 text-sm mt-2">Sport: {athlete.sport}</p>
        <p className="text-gray-500 text-sm mt-2">Country: {athlete.country}</p>
        <p className="text-gray-500 text-sm mt-2">Best Score: {athlete.best_score}</p>

        <Link
          to={`/athletes/${athlete.id}`} // Link to athlete's details page
          className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block text-sm font-medium transition-colors duration-300"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default AthleteCard;
