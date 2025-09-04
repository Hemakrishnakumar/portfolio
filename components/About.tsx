'use client';

import { motion } from 'framer-motion';
import { Code, Database, Server, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      icon: <Server className="w-6 h-6" />,
      technologies: ['Node.js', 'Express.js', 'Python', 'Docker']
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6" />,
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase']
    },
    {
      category: 'DevOps',
      icon: <Code className="w-6 h-6" />,
      technologies: ['AWS', 'CI/CD', 'Git', 'Linux']
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate Full Stack Developer with 5+ years of experience creating 
            innovative web applications. I specialize in building scalable, user-friendly 
            solutions that drive business growth and enhance user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              Started my development journey with a passion for creating digital solutions 
              that matter. I have worked with startups and established companies, helping 
              them build robust applications that scale and perform under pressure.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and staying current with 
              the latest technologies and best practices in the rapidly evolving 
              world of web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-emerald-500 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="text-emerald-400 mr-3">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-white">{skill.category}</h4>
                </div>
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="inline-block bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;