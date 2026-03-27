import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

// Import your Lottie JSON animations
import animation1 from '../../assets/slide2.json';
import animation2 from '../../assets/slide4.json';
import animation3 from '../../assets/slide3.json';
import animation4 from '../../assets/slide1.json';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
  };

  const slides = [
    {
      title: "Where's Your Lost Item?",
      description: "Can't find your belongings? Post it here and let our community help you track it down. Lost items deserve to be found.",
      animation: animation1,
    },
    {
      title: "Found Something? Make a Difference",
      description: "Discover items waiting to be returned to their owners. Be a hero by reuniting lost belongings with the people who cherish them.",
      animation: animation2,
    },
    {
      title: "Your Campus, Your Community",
      description: "We're building a connected network where nothing stays lost for long. Report, search, and recover with just a few clicks.",
      animation: animation3,
    },
    {
      title: "Every Item Has a Story",
      description: "From keys to gadgets, we help bring meaningful items back home. Trust our community to get what matters most back to you.",
      animation: animation4,
    },
  ];

  return (
    <div className="py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <Slider {...settings} className="slick-slider-custom">
          {slides.map((slide, index) => (
            <div key={index} className="p-6 md:p-12 h-auto md:h-[500px] bg-gradient-to-r from-white to-emerald-50">
              <motion.div
                className="flex flex-col md:flex-row justify-between items-center h-full gap-8"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
              >
              <div className="w-full md:w-1/2 text-left">
                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0, duration: 0.3 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="text-slate-600 text-base md:text-lg leading-relaxed"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0, duration: 0.3 }}
                >
                  {slide.description}
                </motion.p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <motion.div
                  className="bg-white rounded-full p-4 md:p-6 shadow-sm"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0, duration: 0.3 }}
                >
                  <Lottie className="w-full max-w-xs" animationData={slide.animation} loop={true} />
                </motion.div>
              </div>
              </motion.div>
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
