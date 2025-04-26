import React from 'react';
import { 
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaEllipsisH, 
  FaLightbulb,
  FaGraduationCap
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  
  const navItems = [
    { icon: <FaHome size={18} />, path: '/', tooltip: 'Home' },
    { icon: <FaUser size={18} />, path: '/profile', tooltip: 'Profile' },
    { icon: <FaLightbulb size={18} />, path: '/skills', tooltip: 'Skills' },
    { icon: <FaGraduationCap size={18} />, path: '/education', tooltip: 'Education' },
    { icon: <FaCode size={18} />, path: '/projects', tooltip: 'Projects' },
    { icon: <FaEnvelope size={18} />, path: '/contact', tooltip: 'Contact' },
    { icon: <FaEllipsisH size={18} />, path: '/more', tooltip: 'More' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed md:top-[3rem] top-[2rem] left-1/2 transform -translate-x-1/2 z-50 sm:px-3">
      <div className="flex items-center md:gap-5 gap-3 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-md border border-gray-200">
        {navItems.map((item, index) => (
          <div key={index} className="relative group">
            <Link
              to={item.path}
              className={`flex items-center justify-center md:w-14 md:h-14 w-10 h-10 hover:scale-150 rounded-full transition-all duration-200
                ${isActive(item.path)
                  ? 'bg-blue-600 text-white shadow-md scale-110'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 '
                }`}
            >
              {item.icon}
            </Link>
            <div className={`absolute md:bottom-[4rem] bottom-[3rem] left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap
                `}>
              {item.tooltip}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nav;
