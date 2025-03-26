import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (target) => {
    if (!isHomePage) {
      window.location.href = `/#${target}`;
    }
    setIsMobileMenuOpen(false);
  };

  const NavLinks = ({ isMobile = false }) => {
    const linkStyle = isMobile 
      ? "w-full text-left py-3 px-6 hover:bg-neutral-100/10 transition-colors"
      : "hover:text-amber-400 transition-colors";

    return (
      <div className={`flex ${isMobile ? 'flex-col' : 'items-center space-x-6'}`}>
        {isHomePage ? (
          <>
            <ScrollLink 
              to="hero-section" 
              smooth={true} 
              duration={500}
              className={`cursor-pointer ${linkStyle}`}
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
              Home
            </ScrollLink>
            <ScrollLink 
              to="about-section" 
              smooth={true} 
              duration={500}
              className={`cursor-pointer ${linkStyle}`}
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
              About Us
            </ScrollLink>
            <ScrollLink 
              to="contact-section" 
              smooth={true} 
              duration={500}
              className={`cursor-pointer ${linkStyle}`}
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
              Contact
            </ScrollLink>
          </>
        ) : (
          <>
            <RouterLink 
              to="/" 
              onClick={() => handleNavigation("hero-section")} 
              className={linkStyle}
            >
              Home
            </RouterLink>
            <RouterLink 
              to="/" 
              onClick={() => handleNavigation("about-section")} 
              className={linkStyle}
            >
              About Us
            </RouterLink>
            <RouterLink 
              to="/" 
              onClick={() => handleNavigation("contact-section")} 
              className={linkStyle}
            >
              Contact
            </RouterLink>
          </>
        )}
        <RouterLink
          to="/book-now"
          className={`${
            isMobile 
              ? "w-full text-center bg-amber-400 text-blue-900 py-3 px-6 hover:bg-amber-500" 
              : "bg-amber-400 text-blue-900 px-4 py-2 rounded-lg hover:bg-amber-500"
          } transition-colors`}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          Book Now
        </RouterLink>
      </div>
    );
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 py-4 ${
        scrolling ? "bg-blue-900 shadow-lg" : "bg-blue-900"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <RouterLink to="/" className="text-3xl font-bold tracking-wide">
          <span className="text-white">Drive</span>
          <span className="text-amber-400">Ease</span>
        </RouterLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          <NavLinks />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-in */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black md:hidden z-40"
            />
            
            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              className="fixed top-0 right-0 w-64 h-full bg-blue-900 z-50 shadow-lg"
            >
              {/* Close Button */}
              <div className="p-4 flex justify-end">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white focus:outline-none"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div className="flex flex-col text-white mt-4">
                <NavLinks isMobile={true} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;