import React, { useState, useEffect } from 'react';
import { useDeviceDetection } from '../../hooks/useDeviceDetection';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const deviceType = useDeviceDetection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = deviceType === 'mobile' ? 60 : 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className={`flex items-center gap-3 text-xl font-bold transition-colors ${
            isScrolled ? 'text-amber-900' : 'text-white'
          }`}>
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">🥤</span>
            </div>
            <div>
              <div className="leading-tight">
                <div className="text-sm font-semibold opacity-90">Cajuína</div>
                <div className="text-base">Dona Júlia</div>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:text-amber-600 relative group ${
                  isScrolled ? 'text-amber-800' : 'text-white'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:scale-105"
            >
              Pedir Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden flex flex-col gap-1 p-3 rounded-lg transition-colors ${
              isScrolled ? 'bg-amber-100' : 'bg-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 transition-all ${
              isScrolled ? 'bg-amber-800' : 'bg-white'
            } ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 transition-all ${
              isScrolled ? 'bg-amber-800' : 'bg-white'
            } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 transition-all ${
              isScrolled ? 'bg-amber-800' : 'bg-white'
            } ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-amber-200 transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col p-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-amber-800 font-medium hover:text-amber-600 transition-colors py-4 text-left border-b border-amber-100 last:border-b-0 hover:bg-amber-50 rounded-lg px-4"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-amber-500 text-white py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors mt-2"
            >
              Pedir Agora
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;