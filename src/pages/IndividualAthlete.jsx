import { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getData } from '../utils/ApiHelper';

function IndividualAthlete() {
  const { id } = useParams(); // Fetch athlete ID from URL
  const token = localStorage.getItem('token'); // Retrieve token from localStorage
  const [athleteData, setAthleteData] = useState(null);
  const [eventInfo, setEventInfo] = useState(null);
  const [disqualifiedEvents, setDisqualifiedEvents] = useState([]);
  const [athleteHistory, setAthleteHistory] = useState({});

  const fetchAthleteData = useCallback(async () => {
    try {
      const response = await getData(`athletes/${id}`);
      setAthleteData(response.data);
    
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  const fetchAthleteHistory = useCallback(async () => {
    try {
      const response = await getData(`athletes/history/${id}`);
      setAthleteHistory(response.data[0]);
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  const fetchEventInfo = useCallback(async () => {
    try {
      const response = await getData(`athletes/events/${id}`);
      setEventInfo(response.data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  const fetchDisqualifiedEvents = async () => {
    try {
      const response = await getData(`disqualifications`);
      setDisqualifiedEvents(
        response?.data?.filter((event) => event.playerId == id)
      );
      console.log(response.data)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAthleteData();
    fetchEventInfo();
    fetchAthleteHistory();
  }, [fetchAthleteData, fetchEventInfo, fetchAthleteHistory]);

  useEffect(() => {
    fetchDisqualifiedEvents();
  }, []);

  return (
    <div className="container mx-auto p-6">
        <Navbar/> 
      {athleteData ? (
        <>
          {/* Basic Info with Photo on the Right */} 
<div className="bg-white shadow-md p-6 rounded-lg mb-8 flex justify-between items-start">
  {/* Athlete's Info */}
  <div className="w-2/3">
    <h1 className="text-3xl font-semibold mb-2">{athleteData.Name}</h1>
    <p><strong>Sport:</strong> {athleteData.sportName}</p>
    <p><strong>Country:</strong> {athleteData.countryName}</p>
    <p><strong>Coach:</strong> {athleteData.coachName}</p>
    <p><strong>Date of Birth:</strong> {athleteData.DOB.substring(0, 10)}</p>
    <p><strong>Height:</strong> {athleteData.Height} cm</p>
    <p><strong>Weight:</strong> {athleteData.Weight} kg</p>

    {token && (
      <Link
        to={`/athletes/update/${id}`}
        className="mt-4 inline-block bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Update Athlete Profile
      </Link>
    )}
  </div>

  {/* Athlete's Photo */}
  <div className="w-1/3 flex justify-end">
    <img
      src={athleteData.photourl || 'defaultProfileImage.jpg'}
      alt={athleteData.Name}
      className="rounded-md h-48 w-48 object-cover shadow-md"
    />
  </div>
</div>

          {/* Performance Stats */}
          <div className="bg-white shadow-md p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Performance Stats</h2>
            <p><strong>Best Score:</strong> {athleteHistory.best_score}</p>
            <p><strong>Gold Medals:</strong> {athleteHistory.gold}</p>
            <p><strong>Silver Medals:</strong> {athleteHistory.silver}</p>
            <p><strong>Bronze Medals:</strong> {athleteHistory.bronze}</p>
          </div>

          {/* Tournament Table */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Tournament History</h2>
            <table className="table-auto w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">Tournament Name</th>
                  <th className="px-4 py-2">Event ID</th>
                  <th className='px-4 py-2'>Referee</th>
                  <th className="px-4 py-2">Standing</th>
                </tr>
              </thead>
              <tbody>
                {console.log(disqualifiedEvents)}
                {eventInfo && eventInfo.map((event) => (
                  <tr key={event.eventId}>
                    <td className="border px-4 py-2">{event.tournamentName}</td>
                    <td className="border px-4 py-2">{event.eventId}</td>
                    <td className="border px-4 py-2">{event.refereeName}</td>
                    <td className="border px-4 py-2">
                      {disqualifiedEvents.some((disqualifiedEvent) => disqualifiedEvent.eventId === event.eventId)
                        ? 'Disqualified'
                        : event.standing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default IndividualAthlete;
