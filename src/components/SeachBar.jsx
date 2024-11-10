import { useState ,useEffect } from 'react';
import { getData } from '../utils/ApiHelper';

function Searchbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [allCountries, setAllCountries] = useState([]);
  const [allSports, setAllSports] = useState([]);

  const fetchAllCountries = async () => {
    try {
      const response = await getData('countries');
    //   console.log(response.data);
      setAllCountries(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAllSports = async () => {
    try {
      const response = await getData('sports');
    //   console.log(response.data);
      setAllSports(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllCountries();
    fetchAllSports();
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSportChange = (e) => {
    setSelectedSport(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        searchTerm,
        selectedSport,
        selectedCountry,
      });
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <form onSubmit={handleSearch} className="flex space-x-2 items-center w-full max-w-4xl bg-gray-100 p-2 rounded-full shadow-md">
        {/* Search input */}
        <div className="flex-grow">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search by name..."
            className="w-full px-4 py-2 text-gray-700 bg-transparent focus:outline-none focus:ring-0"
          />
        </div>

        {/* Sport Filter */}
        <div className="flex items-center">
          <label className="sr-only">Filter by Sport</label>
          <select
            value={selectedSport}
            onChange={handleSportChange}
            className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Sports</option>
            {allSports.map((sport) => (
              <option key={sport.SportId} value={sport.Name}>
                {sport.Name}
              </option>
            ))}
          </select>
        </div>

        {/* Country Filter */}
        <div className="flex items-center">
          <label className="sr-only">Filter by Country</label>
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Countries</option>
            {allCountries.map((country) => (
              <option key={country.countryId} value={country.name}>
                {country.name}
              </option>
            ))}
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300 focus:outline-none"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
