import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-screen-xl mx-auto px-6">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We are passionate about sports and dedicated to bringing you the latest tournaments, events, and everything sports-related.
            </p>
          </div>
          
      
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link to="/tournaments" className="text-gray-400 hover:text-white">Tournaments</Link>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">Email: hiteshghanchi87@gmail.com</p>
            <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
          </div>
        </div>

        
        <div className="mt-8 border-t border-gray-700 pt-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2024 SportHub. All rights reserved.</p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
