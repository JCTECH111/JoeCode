import React from 'react';
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaEnvelope,
  FaGithub,
  FaLinkedin 
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation()
    const isActive = (path) => {
        // For external links, never mark as active
        if (path.startsWith('http')) return false;
        return location.pathname === path;
      };
  const navItems = [
    { icon: <FaHome />, label: 'Home', path: '/' },
    { icon: <FaUser />, label: 'About', path: '/about' },
    { icon: <FaCode />, label: 'Projects', path: '/projects' },
    { icon: <FaEnvelope />, label: 'Contact', path: '/contact' },
    { icon: <FaGithub />, label: 'GitHub', path: 'https://github.com' },
    { icon: <FaLinkedin />, label: 'LinkedIn', path: 'https://linkedin.com' }
  ];

  return (
    <div className="fixed top-4 left-0 md:left-100 right-0 z-50 px-4 overflow-x-visible md:p-0 shadow-sm w-full md:w-[12cm] md:rounded-4xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-16">
        <div className="flex items-center gap-4 md:gap-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                target={item.path.startsWith('http') ? '_blank' : '_self'}
                className="group relative transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className={`p-3 rounded-full  bg-gray-100  transition-all duration-300 group-hover:scale-170
                    ${isActive(item.path) 
                      ? 'border-2  border-blue-700 dark:border-blue-500 bg-blue-100' 
                      : 'bg-gray-100 dark:bg-gray-100 '
                    }`}
                  >
                    <span className={`text-2xl transition-colors duration-300
                      ${isActive(item.path)
                        ? 'text-blue-700 dark:text-blue-400'
                        : 'text-gray-800 dark:text-gray-800 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
                      }`}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <span className="absolute top-full mt-6 px-2 py-1 text-xs font-medium text-gray-800  rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {item.label}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-100 transform rotate-45"></span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;