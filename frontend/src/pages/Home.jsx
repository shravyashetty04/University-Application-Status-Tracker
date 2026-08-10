import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navigation */}
      <Navbar transparent={true} />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="University Campus"
          />
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col items-center sm:items-start z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold tracking-wider mb-4 border border-blue-400/30 backdrop-blur-sm">
            FALL 2026 ADMISSIONS OPEN
          </span>
          <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl lg:text-8xl font-serif">
            <span className="block drop-shadow-lg">Shape Your</span>
            <span className="block text-blue-400 drop-shadow-lg mt-2">Future Here.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-gray-200 sm:text-xl md:mt-8 md:max-w-2xl drop-shadow">
            Discover a world-class education where innovation meets tradition. Join our diverse community of scholars and leaders dedicated to making a difference.
          </p>
          <div className="mt-10 sm:flex sm:justify-start gap-4 w-full justify-center">
            <button
              onClick={() => navigate('/signup')}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-blue-900 bg-white hover:bg-gray-100 md:px-10 shadow-xl transition-transform hover:-translate-y-1"
            >
              Start Application
            </button>
            <button
              onClick={() => navigate('/login')}
              className="mt-4 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white/10 md:px-10 backdrop-blur-sm transition-colors"
            >
              Check Status
            </button>
          </div>
        </div>
      </div>

      {/* Stats/Highlights Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-900 mb-2 font-serif">150+</div>
              <div className="text-gray-600 font-medium uppercase tracking-wide">Undergraduate Majors</div>
            </div>
            <div className="p-6 border-t md:border-t-0 md:border-l border-gray-200">
              <div className="text-5xl font-bold text-blue-900 mb-2 font-serif">12:1</div>
              <div className="text-gray-600 font-medium uppercase tracking-wide">Student-Faculty Ratio</div>
            </div>
            <div className="p-6 border-t md:border-t-0 md:border-l border-gray-200">
              <div className="text-5xl font-bold text-blue-900 mb-2 font-serif">94%</div>
              <div className="text-gray-600 font-medium uppercase tracking-wide">Employed within 6 months</div>
            </div>
          </div>
        </div>
      </div>

      {/* Discover Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-serif">Discover Universitas</h2>
            <p className="mt-4 text-xl text-gray-600">Explore the opportunities that await you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img src="/academics.png" alt="Academics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif group-hover:text-blue-600 transition-colors">Academic Excellence</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">Learn from world-renowned faculty in state-of-the-art facilities designed to foster innovation and critical thinking.</p>
                <Link to="/" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">Learn more <span className="ml-1">→</span></Link>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img src="/campus_life.png" alt="Campus Life" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif group-hover:text-blue-600 transition-colors">Vibrant Campus Life</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">With over 300 student organizations, Greek life, and Division I athletics, there is always something happening on campus.</p>
                <Link to="/campus-life" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">Learn more <span className="ml-1">→</span></Link>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img src="/research.png" alt="Research" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif group-hover:text-blue-600 transition-colors">Global Impact</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">Our research initiatives span the globe, addressing the most pressing challenges of our time through interdisciplinary collaboration.</p>
                <Link to="/research" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">Learn more <span className="ml-1">→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
            <div>
                <h2 className="text-3xl font-extrabold text-white font-serif mb-2">Ready to take the next step?</h2>
                <p className="text-blue-200 text-lg">Start your application today and join the class of 2030.</p>
            </div>
            <div className="mt-8 md:mt-0 flex gap-4">
                <button
                    onClick={() => navigate('/signup')}
                    className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-900 bg-white hover:bg-gray-100 shadow-lg"
                >
                    Apply Now
                </button>
            </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z"/>
                </svg>
                <span className="text-white text-lg font-bold tracking-widest font-serif">UNIVERSITAS</span>
            </div>
            <p className="text-sm">Empowering minds, transforming the future.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Admissions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Undergraduate</a></li>
              <li><a href="#" className="hover:text-white transition">Graduate</a></li>
              <li><a href="#" className="hover:text-white transition">Financial Aid</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Campus Map</a></li>
              <li><a href="#" className="hover:text-white transition">Library</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>1-800-UNIV-EDU</li>
              <li>admissions@universitas.edu</li>
              <li>123 College Ave, City, ST 12345</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between">
            <p>&copy; 2026 Universitas. All rights reserved.</p>
            <div className="space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;