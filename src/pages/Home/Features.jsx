import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaBell, FaShieldAlt, FaCheckCircle, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: FaSearch,
      title: 'Smart Search',
      description: 'Quickly search for lost items across campus with filters for category, location, and date.'
    },
    {
      icon: FaBell,
      title: 'Real-Time Notifications',
      description: 'Get notified instantly when items matching your lost items are found.'
    },
    {
      icon: FaShieldAlt,
      title: 'Secure Verification',
      description: 'Security office verification ensures items are returned to their rightful owners.'
    },
    {
      icon: FaCheckCircle,
      title: 'Easy Claiming',
      description: 'Simple verification process to claim your lost items or return found items.'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location Tracking',
      description: 'View where items were found to help with recovery and identification.'
    },
    {
      icon: FaUserFriends,
      title: 'Community Driven',
      description: 'Connect with your campus community to reunite with lost belongings.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to quickly find or report lost items on campus
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-emerald-200 hover:shadow-md transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-emerald-100">
                    <Icon className="text-emerald-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
