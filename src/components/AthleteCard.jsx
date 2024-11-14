import { Link } from 'react-router-dom';
import { deleteData } from '../utils/ApiHelper';

const AthleteCard = ({ athlete }) => {
  const token = localStorage.getItem("token");
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">

      <div className="w-full h-64 overflow-hidden">
        <img
          src={athlete.photourl || "athleteimage.jpg"}
          alt={athlete.Name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300">{athlete.Name}</h3>
        <p className="text-gray-500 text-sm mt-1">Sport: {athlete.sportName}</p>
        <p className="text-gray-500 text-sm mt-1">Country: {athlete.countryName}</p>
        <p className="text-gray-500 text-sm mt-1">DOB: {athlete.DOB.substring(0, 10)}</p>

        <Link
          to={`/athletes/${athlete.PlayerId}`} 
          className="text-indigo-600 hover:text-indigo-800 mt-3 inline-block text-sm font-medium transition-colors duration-300"
        >
          View Profile
        </Link>
        { token && (
          <button
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 ml-12"
            onClick={async()=>{
              const res = await deleteData(`athletes/${athlete.PlayerId}`)
              console.log(res);
            }}
          > 
            Delete Athlete
          </button>
        )}
      </div>
    </div>
  );
};

export default AthleteCard;
