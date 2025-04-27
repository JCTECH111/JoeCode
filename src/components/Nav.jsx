import React, { useEffect, useState } from 'react';
import { 
  FaHome, FaUser, FaCode, FaEnvelope, 
  FaLightbulb, FaGraduationCap, FaTimes, FaBars
} from 'react-icons/fa';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { icon: <FaHome />, sectionId: 'home', tooltip: 'Home' },
    { icon: <FaUser />, sectionId: 'profile', tooltip: 'Profile' },
    { icon: <FaLightbulb />, sectionId: 'skills', tooltip: 'Skills' },
    { icon: <FaCode />, sectionId: 'projects', tooltip: 'Projects' },
    { icon: <FaEnvelope />, sectionId: 'contact', tooltip: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.sectionId);
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 p-3 flex justify-between items-center md:hidden">
        <div className="font-bold text-xl">Joecode</div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors hover:translate-y-[-3px]"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-5 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div className="font-bold text-xl">YourLogo</div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-1 rounded-full hover:bg-gray-200 hover:translate-y-[-3px] transition-transform"
            >
              <FaTimes size={18} />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col gap-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.sectionId)}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all text-left
                  ${activeSection === item.sectionId ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-gray-100'} hover:translate-y-[-2px]`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.tooltip}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="fixed md:top-[3rem] top-[4rem] left-1/2 transform -translate-x-1/2 z-50 sm:px-3 hidden md:block">
        <div className="flex items-center md:gap-5 gap-3 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-md border border-gray-200">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                onClick={() => scrollToSection(item.sectionId)}
                className={`flex items-center justify-center md:w-14 md:h-14 w-10 h-10 rounded-full transition-all duration-200
                  ${activeSection === item.sectionId ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                  hover:translate-y-[-3px] hover:scale-110`}
              >
                {item.icon}
              </button>
              <div className="absolute md:bottom-[4rem] bottom-[3rem] left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {item.tooltip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Nav;
