'use client';

import { PERSONAL_INFO, WELCOME_GREET } from '@/lib/constants';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-5xl mx-auto text-center px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.h1
            className="mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Greeting */}
            <span className="block text-2xl sm:text-3xl text-gray-300 italic mb-3">
              {WELCOME_GREET}
            </span>

            {/* Name */}
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold">
              <span className="text-emerald-400">
                {PERSONAL_INFO.first_name.toLocaleUpperCase()}
              </span>
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Freelance Full-Stack Developer 🚀
          </motion.h2>

          {/* Short intro */}
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I help startups, businesses, and creators bring their ideas to life
            through fast, scalable, and modern web applications. From frontend
            design to backend architecture — I build solutions that deliver real
            results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
              className="px-8 py-3 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Work together
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
