import { Link } from "react-router-dom"; 
import logo from '../assets/vite.svg';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token"); 
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
         
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              <img
                src={logo} 
                alt="Logo"
                className="h-12 w-12 mr-2" 
              />
              <span className="text-2xl font-semibold text-gray-800">SportHub</span> 
            </Link>
          </div>

          
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/athletes"
              className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Athletes
            </Link>
            <Link
              to="/tournaments"
              className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Tournaments
            </Link>
            <Link
              to="/refrees"
              className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Refrees
            </Link>
            <Link
              to="/coaches"
              className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Coaches
            </Link>
            

            {/* Admin Button or Become Admin Button */}
            {token ? (
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
                className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                LogOut
              </button>
            ) : (
              <Link
                to="/login"
                className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                Become Admin
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
