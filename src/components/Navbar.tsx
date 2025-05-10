
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { title: 'Басты бет', path: '/' },
    { title: 'Жоба туралы', path: '/about' },
    { title: 'Модельдеу процесі', path: '/modeling' },
    { title: 'Нәтижелер', path: '/results' },
    { title: 'Технологиялар', path: '/technologies' },
    { title: 'Байланыс', path: '/contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="container-custom mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-benzol-primary to-benzol-accent flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <span className="ml-2 text-xl font-bold gradient-text hidden md:block">Бензол ИИ</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-3 py-2 rounded-md text-sm font-medium text-benzol-dark hover:text-benzol-primary transition-colors duration-200 highlight"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="container-custom mx-auto py-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-3 text-base font-medium text-benzol-dark hover:text-benzol-primary border-b border-gray-100"
                onClick={toggleMenu}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
