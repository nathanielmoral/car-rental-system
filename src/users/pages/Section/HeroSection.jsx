import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <motion.section
      id="hero-section"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-6 md:px-12 overflow-hidden"
      style={{ backgroundImage: "url('/images/COVER.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Dark Background Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Subtle Car-Themed Motion Elements */}
      <motion.div 
        className="absolute top-10 left-16 w-24 h-12 bg-blue-600/50 rounded-lg blur-2xl"
        animate={{ x: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-16 right-20 w-32 h-14 bg-red-600/50 rounded-lg blur-2xl"
        animate={{ x: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-3xl">
        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Drive Your Dream Car Today
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-4 text-lg md:text-xl font-light text-gray-300 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Rent premium cars at unbeatable prices. Safe, reliable, and ready for your next journey.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <ScrollLink
            to="/book-now"
            smooth={true}
            duration={500}
            className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-xl"
          >
            Book Now <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
          </ScrollLink>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
