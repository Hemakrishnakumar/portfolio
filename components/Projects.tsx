'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with real-time inventory management and secure payment processing.',
      techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      githubUrl: 'https://github.com/johndoe/ecommerce',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Talentprise',
      description: 'Talentprise is an AI-driven talent intelligence and recruitment platform that connects organizations with the right candidates. It streamlines the hiring process through smart job matching, personalized onboarding, and real-time insights.',
      techStack: ['React', 'Node.js', 'Express', 'Microservices', 'Postgres', 'Redis', 'Stripe'],      
      liveUrl: 'https://www.talentprise.com/',
      image: '/assets/talentprise_hero.svg'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Data visualization dashboard for weather patterns with interactive charts and forecasting.',
      techStack: ['React', 'D3.js', 'Express.js', 'AWS'],
      githubUrl: 'https://github.com/johndoe/weather-dashboard',
      liveUrl: 'https://weather-analytics-demo.vercel.app',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of recent projects demonstrating my expertise in modern web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-emerald-500 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-800 text-emerald-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.githubUrl && <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </motion.a>}
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;