function TournamentCard({ tournament }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
        <h2 className="text-xl font-semibold mb-2">{tournament.name}</h2>
        <p className="text-gray-600">Sport: {tournament.sport}</p>
        <p className="text-gray-600">Country: {tournament.country}</p>
        <p className="text-sm text-gray-500">Date: {new Date(tournament.date).toLocaleDateString()}</p>
      </div>
    );
  }
  
  export default TournamentCard;
  