import { useState, useEffect, useCallback } from 'react';
import { getData } from '../utils/ApiHelper'; // Assuming the getData function works for tournaments as well
import TournamentCard from '../components/TournamentCard'; // Assuming you have a TournamentCard component
import SearchBar from '../components/SeachBar'; 
import Navbar from '../components/Navbar';

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [filteredTournaments, setFilteredTournaments] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  
  
  const [currentPage, setCurrentPage] = useState(1);
  const [tournamentsPerPage] = useState(6);  

  const fetchTournaments = useCallback(async () => {
    try {
      const response = await getData('tournaments'); // Fetch data for tournaments
      setTournaments(response.data);
      setFilteredTournaments(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch tournaments. Please try again later.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTournaments();
  }, [fetchTournaments]);

  const handleSearch = ({ searchTerm, selectedSport, selectedCountry }) => {
    let filtered = tournaments;

    if (searchTerm) {
      filtered = filtered.filter((tournament) =>
        tournament?.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSport) {
      filtered = filtered.filter((tournament) =>
        tournament?.sport?.toLowerCase() === selectedSport.toLowerCase()
      );
    }

    if (selectedCountry) {
      filtered = filtered.filter((tournament) =>
        tournament?.country?.toLowerCase() === selectedCountry.toLowerCase()
      );
    }

    setFilteredTournaments(filtered);
  };

  const indexOfLastTournament = currentPage * tournamentsPerPage;
  const indexOfFirstTournament = indexOfLastTournament - tournamentsPerPage;
  const currentTournaments = filteredTournaments.slice(indexOfFirstTournament, indexOfLastTournament);

  const totalPages = Math.ceil(filteredTournaments.length / tournamentsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return <div>Loading tournaments...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (filteredTournaments.length === 0) {
    return <div>No tournaments found matching your criteria.</div>;
  }

  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      
      <div className="flex flex-wrap justify-evenly gap-4">
        {currentTournaments.map((tournament) => (
          <div key={tournament.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-4">
            <TournamentCard tournament={tournament} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 text-sm">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-l-lg disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Tournaments;
