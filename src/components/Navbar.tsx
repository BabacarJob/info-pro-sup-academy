
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Orientation', path: '/orientation' },
    { name: 'Formations', path: '/formations' },
    { name: 'Bibliothèque', path: '/bibliotheque' },
    { name: 'Bourses', path: '/bourses' },
    { name: 'Concours', path: '/concours' },
    { name: 'Stages', path: '/stages' },
    { name: 'Partenaires', path: '/partenaires' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/3001bd7e-62c0-4b7e-a038-485c3c6a0f27.png" 
                alt="Info Pro Sup Logo" 
                className="h-12 mr-2" 
              />
              <span className="hidden sm:block font-poppins font-bold text-ipro-navy text-xl">Info Pro Sup</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className="px-3 py-2 font-medium text-ipro-navy hover:text-ipro-teal transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute w-full bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out",
        isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="container mx-auto px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block py-2 px-4 text-ipro-navy hover:text-ipro-teal hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
