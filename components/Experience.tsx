'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Ahex Technlogies',
      position: 'Full Stack Developer',
      period: 'Jan 2025- Present',
      location: 'Hyderabad, Telangana',
      description: 'Led development of microservices architecture serving 100k+ users. Implemented CI/CD pipelines reducing deployment time by 60%.',
      achievements: [
        'Architected scalable React applications with Next.js',
        'Optimized database queries improving performance by 40%',
        'Mentored junior developers and established coding standards'
      ]
    },
    {
      company: 'Accenture',
      position: 'Software Engineer',
      period: 'Sep 2021 - Jan 2025',
      location: 'Hyderabad, Telangana',
      description: 'Developed and maintained multiple client projects using React, Node.js, and cloud technologies.',
      achievements: [
        'Built responsive web applications with React and TypeScript',
        'Integrated third-party APIs and payment systems',
        'Collaborated with design teams to implement pixel-perfect UIs'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Professional <span className="text-emerald-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-400">
            A timeline of my professional journey and key achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-emerald-400"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-black"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-emerald-500 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <div className="flex items-center text-emerald-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-400 mb-4">
                    <h4 className="font-semibold">{exp.company}</h4>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-emerald-400 mr-2">▸</span>
                        <span className="text-gray-400 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;