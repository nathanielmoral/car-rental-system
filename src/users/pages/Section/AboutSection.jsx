import { motion } from "framer-motion";
import { FaCheckCircle, FaMobileAlt, FaHeadset, FaShieldAlt } from "react-icons/fa";

const AboutSection = () => {
  const features = [
    { 
      title: "Premium Fleet", 
      text: "Well-maintained and clean vehicles for a comfortable journey.", 
      icon: <FaCheckCircle /> 
    },
    { 
      title: "Seamless Booking", 
      text: "Easy online booking system optimized for all devices.", 
      icon: <FaMobileAlt /> 
    },
    { 
      title: "24/7 Support", 
      text: "Round-the-clock customer service and roadside assistance.", 
      icon: <FaHeadset /> 
    },
    { 
      title: "Safety First", 
      text: "Regularly inspected vehicles with comprehensive insurance coverage.", 
      icon: <FaShieldAlt /> 
    }
  ];
  
  return (
    <section id="about-section" className="bg-white dark:from-gray-900 dark:to-gray-800 py-24">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About <span className="text-blue-600 dark:text-blue-400">DriveEase</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Your trusted partner for hassle-free car rentals. We provide a premium selection of vehicles tailored to your travel needs with transparent pricing and exceptional service.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 dark:text-blue-400 text-2xl p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </motion.div>
    </section>
  );
};

export default AboutSection;