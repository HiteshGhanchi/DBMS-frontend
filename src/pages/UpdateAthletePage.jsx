import { useState, useEffect } from 'react';
import { getData, putData } from '../utils/ApiHelper'; // Assuming you have an API helper for making requests
import { useParams } from 'react-router-dom'; // To get athleteId from URL
import Navbar from '../components/Navbar';

function UpdateAthletePage() {
  const { id } = useParams(); // Get athlete ID from the URL
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedCoach, setSelectedCoach] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [photo, setPhoto] = useState(null);

  const [sports, setSports] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filteredCoaches, setFilteredCoaches] = useState([]);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Fetch athlete data on page load
  useEffect(() => {
    // console.log(id)
    const fetchAthleteData = async () => {
      try {
        const athleteData = await getData(`athletes/${id}`); 
        // console.log(athleteData.data)
        const sportsData = await getData('sports');
        const coachesData = await getData('coaches');
        const countriesData = await getData('countries');

        setSports(sportsData.data);
        setCoaches(coachesData.data);
        setCountries(countriesData.data);

        // Pre-fill the form fields with the fetched data
        setName(athleteData.data.athleteName);
        setDob(athleteData.data.DOB.split('T')[0]);
        setHeight(athleteData.data.Height);
        setWeight(athleteData.data.Weight);
        setSelectedSport(athleteData.data.sportId);
        setSelectedCoach(athleteData.data.coachId);
        setSelectedCountry(athleteData.data.countryId);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch athlete data');
      }
    };
    fetchAthleteData();
  }, [id]);

  useEffect(() => {
    if (selectedSport) {
      const filteredCoaches = coaches.filter((coach) => coach.SportId === selectedSport);
      setFilteredCoaches(filteredCoaches);
    } else {
      setFilteredCoaches(coaches);
    }
  }, [selectedSport, coaches]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData to send updated data including image
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('DOB', dob);
    formData.append('Height', height);
    formData.append('Weight', weight);
    formData.append('SportId', selectedSport);
    formData.append('coachId', selectedCoach);
    formData.append('countryId', selectedCountry);

    if (photo) {
      formData.append('photo', photo); 
    }

    try {
      const res = await putData(`athletes/${id}`, formData, true); 
      console.log(res)
      if (res.status === 200) {
        setSuccess(true);
        setError(null);
      } else {
        setError(res.response.data.message);
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to update profile');
      setSuccess(false);
    }
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Update Player Profile</h1>

        {success && <p className="text-green-500">Player profile updated successfully!</p>}
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium">Date of Birth (DOB):</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium">Height (in cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium">Weight (in kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          {/* Dropdown for Sports */}
          <div>
            <label className="block text-sm font-medium">Sport:</label>
            <select
              value={selectedSport}
              onChange={(e) => setSelectedSport(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            >
              <option value="">Select Sport</option>
              {sports.map((sport) => (
                <option key={sport.SportId} value={sport.SportId}>
                  {sport.Name}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown for Coaches */}
          <div>
            <label className="block text-sm font-medium">Coach:</label>
            <select
              value={selectedCoach}
              onChange={(e) => setSelectedCoach(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            >
              <option value="">Select Coach</option>
              {filteredCoaches.map((coach) => (
                <option key={coach.coachId} value={coach.coachId}>
                  {coach.name}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown for Countries */}
          <div>
            <label className="block text-sm font-medium">Country:</label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.countryId} value={country.countryId}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium">Upload Photo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Update Profile
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateAthletePage;
