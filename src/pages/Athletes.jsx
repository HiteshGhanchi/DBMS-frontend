import { useState, useEffect, useCallback } from 'react';
import { getData } from '../utils/ApiHelper';
import AthleteCard from '../components/AthleteCard';
import SearchBar from '../components/SeachBar'; 
import Navbar from '../components/Navbar';

function Athletes() {
  const [athletes, setAthletes] = useState([]);
  const [filteredAthletes, setFilteredAthletes] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const [athletesPerPage] = useState(6);  

  const fetchAthletes = useCallback(async () => {
    try {
      const response = await getData('athletes');
      setAthletes(response.data);
      setFilteredAthletes(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch athletes. Please try again later.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAthletes();
  }, [fetchAthletes]);

  const handleSearch = ({ searchTerm, selectedSport, selectedCountry }) => {
    let filtered = athletes;

    if (searchTerm) {
      filtered = filtered.filter((athlete) =>
        athlete?.Name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSport) {
      filtered = filtered.filter((athlete) =>
        athlete?.sportName?.toLowerCase() === selectedSport.toLowerCase()
      );
    }

    if (selectedCountry) {
      filtered = filtered.filter((athlete) =>
        athlete?.countryName?.toLowerCase() === selectedCountry.toLowerCase()
      );
    }

    setFilteredAthletes(filtered);
  };

  const indexOfLastAthlete = currentPage * athletesPerPage;
  const indexOfFirstAthlete = indexOfLastAthlete - athletesPerPage;
  const currentAthletes = filteredAthletes.slice(indexOfFirstAthlete, indexOfLastAthlete);

  const totalPages = Math.ceil(filteredAthletes.length / athletesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return <div>Loading athletes...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (filteredAthletes.length === 0) {
    return <div>No athletes found matching your criteria.</div>;
  }

  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      
      <div className="flex flex-wrap justify-evenly gap-4">
        {currentAthletes.map((athlete) => (
          <div key={athlete.PlayerId} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-4">
            <AthleteCard athlete={athlete} />
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

export default Athletes;
