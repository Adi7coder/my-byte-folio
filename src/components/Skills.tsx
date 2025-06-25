import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Users, Lightbulb, Camera, Palette } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C', level: 75 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'React.js', level: 75 },
        { name: 'Node.js', level: 70 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Communication', level: 90 },
        { name: 'Teamwork', level: 85 },
        { name: 'Public Speaking', level: 88 },
        { name: 'Quick Learning', level: 92 },
        { name: 'Problem Solving', level: 85 }
      ]
    },
    {
      title: 'Creative Skills',
      icon: Palette,
      skills: [
        { name: 'Wildlife Photography', level: 80 },
        { name: 'Painting', level: 75 },
        { name: 'Sketching', level: 78 },
        { name: 'Oration', level: 85 }
      ]
    }
  ];

  const languages = [
    { name: 'English', level: 'Full Professional Proficiency' },
    { name: 'Hindi', level: 'Full Professional Proficiency' },
    { name: 'Kannada', level: 'Full Professional Proficiency' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-slate-900/40 via-navy-900/40 to-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mx-auto shadow-lg shadow-cyan-400/30"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/60 via-navy-800/60 to-slate-800/60 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 shadow-lg shadow-cyan-400/5 hover:border-cyan-400/30 hover:shadow-cyan-400/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-cyan-400/30">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 h-2 rounded-full shadow-lg shadow-cyan-400/30"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800/60 via-navy-800/60 to-slate-800/60 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50 shadow-lg shadow-cyan-400/5 hover:border-cyan-400/30 hover:shadow-cyan-400/10 transition-all duration-300"
        >
          <div className="flex items-center mb-6">
            <Globe className="w-8 h-8 text-cyan-400 mr-4 shadow-lg shadow-cyan-400/30" />
            <h3 className="text-2xl font-bold text-white">Languages</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gradient-to-br from-slate-700/60 to-navy-700/60 rounded-lg border border-slate-600/30 shadow-lg shadow-cyan-400/5 hover:border-cyan-400/30 hover:shadow-cyan-400/10 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{language.name}</h4>
                <p className="text-cyan-400 text-sm">{language.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};