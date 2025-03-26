import { motion } from "framer-motion";
import { 
  Car, 
  MapPin, 
  CreditCard, 
  Shield, 
  Clock 
} from "lucide-react";

const carRentalFeatures = [
  { 
    id: 1, 
    title: "Flexible Pickup", 
    desc: "Multiple locations and convenient pickup options across the city.", 
    icon: <MapPin strokeWidth={1.5} /> 
  },
  { 
    id: 2, 
    title: "Transparent Pricing", 
    desc: "No hidden fees. Clear, upfront rental costs with no surprises.", 
    icon: <CreditCard strokeWidth={1.5} /> 
  },
  { 
    id: 3, 
    title: "Diverse Fleet", 
    desc: "Extensive range of vehicles from compact cars to luxury SUVs.", 
    icon: <Car strokeWidth={1.5} /> 
  },
  { 
    id: 4, 
    title: "24/7 Support", 
    desc: "Round-the-clock customer assistance to support your journey.", 
    icon: <Clock strokeWidth={1.5} /> 
  },
  { 
    id: 5, 
    title: "Safety Guaranteed", 
    desc: "Fully insured vehicles, regularly maintained for your peace of mind.", 
    icon: <Shield strokeWidth={1.5} /> 
  },
];

const FeatureSection = () => {
  return (
    <motion.section 
      className="py-16 bg-white"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">
            Your Journey, Our Commitment
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto">
            Seamless car rental experience with premium service and unmatched convenience.
          </p>
        </div>

        <div className="space-y-8">
          {carRentalFeatures.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="flex items-center p-6 rounded-lg bg-neutral-50 shadow-sm hover:shadow-md transition-all group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 
              }}
            >
              <div className="mr-6 w-16 h-16 flex items-center justify-center text-neutral-700 group-hover:text-blue-600 transition-colors">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeatureSection;