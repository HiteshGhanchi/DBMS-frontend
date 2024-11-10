import { Link } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import { getData } from "../utils/ApiHelper"; // Make sure getData is correctly imported

function Upcomingtourney() {

  const [upcomingTournaments, setUpcomingTournaments] = useState([]);

  const getUpcomingTournament = useCallback(async () => {
    try {
      const response = await getData("tournaments/upcoming");
      setUpcomingTournaments(response.data?.slice(0, 3)); 
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getUpcomingTournament();
  }, [getUpcomingTournament]);

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Upcoming Tournaments</h2>
      <div className="flex justify-center">
        <div className="w-full max-w-7xl flex gap-8 justify-center">
          {upcomingTournaments.map((tournament) => (
            <div key={tournament.tournamentId} className="flex-1 bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-gray-800">{tournament.tournament_name}</h3>
              <p className="text-gray-600 mt-2">
                Date: {new Date(tournament.start_date).toLocaleDateString()}
              </p>
              <Link
                to="/event-details"
                className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Upcomingtourney;
