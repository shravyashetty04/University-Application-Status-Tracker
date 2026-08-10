import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = ({ transparent = false }) => {
  const navigate = useNavigate();

  const navClass = transparent 
    ? "absolute top-0 w-full z-50 bg-transparent border-b border-white/20 transition-all duration-300"
    : "sticky top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300";

  const textColor = transparent ? "text-white hover:text-blue-200" : "text-gray-700 hover:text-blue-600";
  const logoText = transparent ? "text-white" : "text-blue-900";
  const logoIcon = transparent ? "text-blue-400" : "text-blue-600";
  const dividerColor = transparent ? "bg-white/30" : "bg-gray-300";

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <svg className={`w-8 h-8 ${logoIcon}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
            <span className={`${logoText} text-2xl font-bold tracking-widest font-serif`}>UNIVERSITAS</span>
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`${textColor} font-medium transition`}>Academics</Link>
            <Link to="/admissions" className={`${textColor} font-medium transition`}>Admissions</Link>
            <Link to="/campus-life" className={`${textColor} font-medium transition`}>Campus Life</Link>
            <Link to="/research" className={`${textColor} font-medium transition`}>Research</Link>
            <div className={`h-6 w-px mx-2 ${dividerColor}`}></div>
            <button 
              onClick={() => navigate('/login')}
              className={`${textColor} font-medium transition`}
            >
              Sign In
            </button>
            <button 
              onClick={() => navigate('/signup')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium transition shadow-lg shadow-blue-900/20"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
