import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { GlassCard } from '../../components/glass';

const Reviews = () => {
    const [reviews] = useState([
        {
            "_id": "1",
            "name": "Kariuki Mwangi",
            "rating": 5,
            "comment": "This platform helped me recover my lost bag in no time! Excellent service and a very user-friendly interface. Highly recommended!"
        },
        {
            "_id": "2",
            "name": "Amara Ochieng",
            "rating": 5,
            "comment": "Found my missing phone using this platform in just 2 hours. The process was super easy and the community is incredibly helpful!"
        },
        {
            "_id": "3",
            "name": "David Kipchoge",
            "rating": 5,
            "comment": "Amazing! Lost my wallet on campus and got it back within 24 hours. The interface is clean and the notifications are very timely."
        },
        {
            "_id": "4",
            "name": "Fatima Hassan",
            "rating": 4,
            "comment": "Great platform with quick response times. Found someone's keys and was able to return them easily. Very intuitive design!"
        },
        {
            "_id": "5",
            "name": "James Mutua",
            "rating": 5,
            "comment": "Reliable and trustworthy. Posted my lost keys and recovered them the same day. The community spirit here is wonderful."
        },
        {
            "_id": "6",
            "name": "Zara Kamau",
            "rating": 5,
            "comment": "Fantastic experience! Simple interface, quick connections, and my lost backpack was returned within hours. Truly impressed!"
        }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerSlide, setCardsPerSlide] = useState(1);

    const totalReviews = reviews.length;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setCardsPerSlide(3);
            } else if (window.innerWidth >= 768) {
                setCardsPerSlide(2);
            } else {
                setCardsPerSlide(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + cardsPerSlide) % totalReviews);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - cardsPerSlide + totalReviews) % totalReviews);
    };

    const StarRating = ({ rating }) => (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <FaStar
                    key={i}
                    className={i < rating ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-600'}
                    size={16}
                />
            ))}
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
            {/* Header Section */}
            <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
                >
                  What Our Community Says
                </motion.h2>
                <motion.p 
                  className="text-lg text-slate-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Real experiences from Zetech students who have successfully recovered their lost items.
                </motion.p>
            </motion.div>

            {/* Slider Container */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)` }}
                >
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={review._id}
                            className={`flex-shrink-0 w-full px-2 md:px-3 ${
                                cardsPerSlide === 3 ? 'md:w-1/3' : cardsPerSlide === 2 ? 'md:w-1/2' : 'w-full'
                            }`}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                        >
                            <div
                                className="rounded-xl p-6 md:p-7 h-full flex flex-col transition-all duration-300 hover:border-emerald-300 hover:shadow-md bg-white border border-slate-200"
                            >
                                {/* Star Rating */}
                                <div className="mb-3 flex items-center gap-1">
                                    <StarRating rating={review.rating} />
                                </div>

                                {/* Comment */}
                                <p className="text-slate-700 text-sm md:text-base leading-relaxed flex-grow mb-4">
                                    "{review.comment}"
                                </p>

                                {/* Name */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                                    <h3 className="font-semibold text-slate-900">
                                        {review.name}
                                    </h3>
                                    <div className="text-xs font-semibold text-emerald-600">
                                        ★ {review.rating}/5
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPreviousSlide}
                    className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 p-2 md:p-3 z-10 hidden md:flex items-center justify-center text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-300"
                    aria-label="Previous testimonials"
                >
                    <FaChevronLeft size={20} />
                </button>
                <button
                    onClick={goToNextSlide}
                    className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 p-2 md:p-3 z-10 hidden md:flex items-center justify-center text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-300"
                    aria-label="Next testimonials"
                >
                    <FaChevronRight size={20} />
                </button>
            </div>

            {/* Dots Indicator for Mobile */}
            <div className="flex justify-center gap-2 mt-8 md:hidden">
                {[...Array(Math.ceil(totalReviews / cardsPerSlide))].map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx * cardsPerSlide)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            Math.floor(currentIndex / cardsPerSlide) === idx
                                ? 'bg-emerald-600 w-6'
                                : 'bg-slate-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Reviews;

