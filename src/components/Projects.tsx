import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, CheckSquare } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'InvestAI',
      subtitle: 'Personalized Investment Portfolio Recommendation Tool',
      description: 'Developed a CLI-based tool to provide tailored investment recommendations based on individual risk tolerance. Built using NumPy, Pandas, and Matplotlib for data analysis and visualization.',
      icon: TrendingUp,
      technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/Adi7coder/InvestAI',
      features: [
        'Risk tolerance assessment',
        'Personalized portfolio recommendations',
        'Data visualization with charts',
        'CLI-based interface'
      ]
    },
    {
      title: 'Task Manager',
      subtitle: 'Web-based Productivity Tool',
      description: 'Developed a responsive task management web application using modern web technologies. Enhanced with Bolt for improved functionality and user experience.',
      icon: CheckSquare,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js'],
      github: 'https://github.com/Adi7coder/Task-Manager',
      features: [
        'Add, delete, and mark tasks complete',
        'Intuitive user interface',
        'Responsive design',
        'Enhanced with Bolt integration'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mx-auto mb-6 shadow-lg shadow-cyan-400/30"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in AI/ML, web development, and problem-solving.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/60 via-navy-800/60 to-slate-800/60 backdrop-blur-sm rounded-lg border border-slate-700/50 overflow-hidden hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-cyan-400/30 group-hover:shadow-cyan-400/50 transition-all duration-300">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">{project.title}</h3>
                    <p className="text-cyan-400 text-sm">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center group-hover:text-gray-200 transition-colors duration-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400/50"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-slate-700/60 to-navy-700/60 text-cyan-400 rounded-full text-sm border border-slate-600/30 shadow-sm shadow-cyan-400/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-slate-700/60 to-navy-700/60 text-white rounded-lg hover:from-cyan-400/20 hover:to-blue-500/20 hover:border-cyan-400/50 border border-slate-600/30 transition-all duration-300 shadow-sm shadow-cyan-400/10 hover:shadow-cyan-400/20"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
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