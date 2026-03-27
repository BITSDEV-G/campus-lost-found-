import React from 'react';
import { motion } from 'framer-motion';
import { FaPen, FaBell, FaVerified, FaHandshake } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: FaPen,
      number: '01',
      title: 'Report an Item',
      description: 'Sign in and report your lost or found item with details, photos, location, and date.'
    },
    {
      icon: FaBell,
      number: '02',
      title: 'Get Notified',
      description: 'Receive real-time notifications when matching items are found or when someone claims your item.'
    },
    {
      icon: FaVerified,
      number: '03',
      title: 'Verification',
      description: 'Security office verifies ownership with security questions to prevent fraud and protect users.'
    },
    {
      icon: FaHandshake,
      number: '04',
      title: 'Recovery',
      description: 'Coordinate with finders or collect your item from the Lost & Found office on campus.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 md:px-6 bg-slate-50">
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
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A simple four-step process to reunite you with your belongings
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-white rounded-xl p-6 border border-slate-200 h-full">
                  {/* Step Number Circle */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="pt-4 pb-4">
                    <div className="p-3 rounded-lg bg-emerald-50 w-fit">
                      <Icon className="text-emerald-600 text-xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-slate-900 mb-2 text-lg">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-emerald-200 text-2xl">
                    →
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
