import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { FaBell } from 'react-icons/fa';
import { schoolConfig } from '../../config/schoolConfig';
import { GlassCard, GlassInput, GlassButton } from '../../components/glass';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: 'Subscribed!',
                text: 'You will receive notifications about matching items.',
                position: 'top',
                toast: true,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });

            setEmail('');
            setIsSubmitting(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 500);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeInOut', staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.section
            className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <div className="rounded-2xl p-8 md:p-14 bg-emerald-600 text-white">
                <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
                    {/* Icon */}
                    <div className="mb-6 p-3 rounded-full bg-white/20">
                        <FaBell className="text-white text-2xl" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Get Updates on Campus Items
                    </h2>

                    {/* Description */}
                    <p className="text-emerald-100 text-lg mb-8 max-w-2xl">
                        Subscribe to get instant notifications when items matching your lost items are found on campus.
                    </p>

                    {/* Form */}
                    <form
                        className="flex flex-col sm:flex-row gap-3 w-full max-w-xl"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChange}
                            required
                            className="flex-1 px-5 py-3 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-8 py-3 rounded-lg bg-white text-emerald-600 font-semibold transition-all duration-300 hover:bg-emerald-50 disabled:opacity-70"
                        >
                            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>

                    {/* Trust Message */}
                    <p className="text-sm text-emerald-100 mt-6">
                        We respect your privacy. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default Newsletter;
