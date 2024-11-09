import { Link } from "react-router-dom";

function Upcomingtourney() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">Upcoming Tournaments </h2>
      <div className="flex justify-center">
        <div className="w-full max-w-7xl flex gap-8 justify-center">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-800">Tournament Name</h3>
            <p className="text-gray-600 mt-2">Date: 2024-12-15 | Location: Stadium XYZ</p>
            <Link
              to="/event-details"
              className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-300"
            >
              View Details
            </Link>
          </div>
          <div className="flex-1 bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-800">Tournament Name</h3>
            <p className="text-gray-600 mt-2">Date: 2024-12-20 | Location: Arena ABC</p>
            <Link
              to="/event-details"
              className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Upcomingtourney;
