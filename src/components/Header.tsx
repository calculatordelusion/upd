import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-amber-800 text-amber-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold hover:text-amber-200 transition-colors">
            <Cookie size={32} className="text-amber-200" />
            <span className="text-amber-100">Cookie Clicker Unblocked</span>
          </Link>
          
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-amber-200">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Game
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header