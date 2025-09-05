'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

type Exp = {
  company: string;
  logo: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
};

export default function Experience() {
  const experiences: Exp[] = [
  {
    company: 'Ahex Technologies',
    logo: '/assets/ahex.jpg',
    position: 'Software Engineer',
    period: 'Jan 2025 - Present',
    location: 'India',
    achievements: [
      'Led migration from a monolithic app to a microservices architecture serving 50k+ users.',
      'Built scalable Next.js/React frontends and Node.js microservices with emphasis on reliability and observability.',
      'Introduced monitoring and alerting practices to reduce incident detection and resolution time.',
      'Mentored junior engineers and helped establish code review, testing and release best practices.'
    ],
  },
  {
    company: 'Accenture',
    logo: '/assets/accenture_logo.jpg',
    position: 'Software Engineer',
    period: 'Sep 2021 - Jan 2025',
    location: 'India',
    achievements: [
      'Delivered multiple client-facing web applications using React and TypeScript, focusing on responsive, accessible UIs.',
      'Built reusable component libraries & design-system primitives to speed up cross-team development.',
      'Integrated third-party services and payment systems for clients, and implemented secure API integrations.',
      'Optimized backend endpoints and database queries to improve performance and reduce latency for client apps.',
    ],
  },
];


  const [activeIndex, setActiveIndex] = useState(0);

  // refs to measure positions
  const listRef = useRef<HTMLDivElement | null>(null);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);
  btnRefs.current = [];

  // highlight geometry state
  const [highlight, setHighlight] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  // measure the active button and set highlight geometry
  useLayoutEffect(() => {
    const update = () => {
      const container = listRef.current;
      const btn = btnRefs.current[activeIndex];
      if (!container || !btn) return;
      const cRect = container.getBoundingClientRect();
      const bRect = btn.getBoundingClientRect();

      setHighlight({
        top: bRect.top - cRect.top,
        left: bRect.left - cRect.left,
        width: bRect.width,
        height: bRect.height,
      });
    };

    update();
    // update on resize
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [activeIndex, experiences.length]);

  const addBtnRef = (el: HTMLButtonElement | null) => {
    if (!el) return;
    btnRefs.current.push(el);
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
       <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
          Professional <span className="text-emerald-400">Experience</span>
        </h2>
        <p className="text-lg text-gray-400">
          Companies I&apos;ve worked with and the impact I made along the way.
        </p>
      </div>
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="flex w-full max-w-4xl items-start">
          {/* Left column (centered block) */}
          <div
            className="relative flex flex-col w-52 shrink-0 gap-3 py-1"
            ref={listRef}
            aria-hidden={false}
          >
            {/* animated highlight positioned exactly under active button */}
            <motion.div
              initial={false}
              animate={highlight}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              style={{
                position: 'absolute',
                pointerEvents: 'none',
                transform: 'translateZ(0)',
              }}
              className="bg-gray-800 rounded-xl z-0"
            />

            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                ref={addBtnRef}
                onClick={() => setActiveIndex(index)}
                className={`relative z-10 flex items-center space-x-3 px-4 h-12 rounded-xl transition-colors duration-150 w-full text-left ${
                  activeIndex === index ? 'text-white' : 'text-gray-400'
                }`}
                type="button"
              >
                <div className="w-7 h-7 relative shrink-0">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    sizes="28px"
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="font-medium leading-5">{exp.company}</span>
              </button>
            ))}
          </div>

          {/* Right column content (static, no animation) */}
          <div className="flex-1 pl-12">
            <h3 className="text-2xl font-bold text-white mb-2">
              {experiences[activeIndex].position}{' '}
              <span className="text-emerald-400">
                @{experiences[activeIndex].company}
              </span>
            </h3>

            <p className="text-gray-400 mb-6">{experiences[activeIndex].period}</p>

            <div className="flex items-center text-gray-400 mb-6">
              <MapPin className="w-4 h-4 mr-2 text-emerald-400" />
              {experiences[activeIndex].location}
            </div>

            <ul className="space-y-3">
              {experiences[activeIndex].achievements.map((point, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="text-emerald-400 mr-2">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
