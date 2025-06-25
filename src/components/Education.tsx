import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence & Machine Learning',
      institution: 'Dayananda Sagar University',
      location: 'Bangalore, Karnataka',
      period: '2023 – Present (Second Year)',
      description: 'Specializing in AI/ML with focus on practical applications and real-world problem solving.',
      highlights: [
        'Strong foundation in AI/ML concepts',
        'Hands-on programming experience',
        'Project-based learning approach',
        'Industry-relevant curriculum'
      ]
    },
    {
      degree: 'Senior Secondary (10+2)',
      institution: 'Evergreen Public School',
      location: 'Delhi, India',
      period: 'Completed',
      description: 'Completed higher secondary education with strong academic performance.',
      highlights: [
        'Strong academic foundation',
        'Active participation in extracurriculars',
        'Leadership roles in school activities',
        'Excellence in science subjects'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-r from-slate-900/40 via-navy-900/40 to-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mx-auto mb-6 shadow-lg shadow-cyan-400/30"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            My educational journey in technology and innovation.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/60 via-navy-800/60 to-slate-800/60 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50 shadow-lg shadow-cyan-400/5 hover:border-cyan-400/30 hover:shadow-cyan-400/10 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                <div className="flex-shrink-0 mb-6 lg:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/30">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-xl text-cyan-400 mb-4">{edu.institution}</h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-4 text-gray-300">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="text-white font-semibold mb-3">Key Highlights:</h5>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400/50"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};