import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Heart, Trophy, Camera, Palette, Users, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Trophy,
      title: 'Competitive Spirit',
      description: '80+ competitions across school, zonal, state, national, and international levels'
    },
    {
      icon: Camera,
      title: 'Creative Vision',
      description: 'Wildlife photography, painting, and artistic expression fuel lateral thinking'
    },
    {
      icon: Users,
      title: 'Leadership & Service',
      description: 'Active involvement with CPA and DSU Student Affairs, driving cultural initiatives'
    },
    {
      icon: TrendingUp,
      title: 'Disciplined Growth',
      description: 'Daily journaling, habit tracking, and structured lifestyle for intentional progress'
    }
  ];

  const journeySections = [
    {
      title: 'My Journey',
      content: `Currently pursuing B.Tech in Artificial Intelligence and Machine Learning at Dayananda Sagar University, 
      I'm passionate about leveraging technology to solve real-world problems. My journey blends technical depth, 
      creative expression, self-discipline, and leadership—all driven by a desire to grow and contribute meaningfully.`
    },
    {
      title: 'Laying the Foundation',
      content: `Since childhood, I've been driven to explore challenges. I've participated in 80+ competitions throughout 
      my school life, spanning school, zonal, state, national, and international levels. These formative experiences 
      developed my confidence, problem-solving mindset, and performance under pressure.`
    },
    {
      title: 'Beyond the Code',
      content: `Outside academics, I draw energy and creativity from wildlife photography, painting, and public speaking. 
      Photography sharpens my observational skills, painting sparks artistic insight, and public speaking enhances my 
      articulation and leadership presence. These passions empower me to think laterally and connect across disciplines.`
    },
    {
      title: 'Disciplined Leadership & Growth',
      content: `I believe that consistency builds character. I follow a structured lifestyle rooted in daily journaling, 
      book reading, and habit tracking to ensure I'm progressing intentionally. I keep a close watch on my fitness, 
      nutrition, sleep, and productivity, minimizing distractions like social media to stay focused.

      Currently, I'm also actively involved with the CPA (Centre for Performing Arts) at DSU and DSU Student Affairs, 
      where I contribute to cultural and student engagement initiatives. These roles, combined with my disciplined habits, 
      reflect my commitment to personal leadership, self-improvement, and purposeful contribution.`
    },
    {
      title: 'Vision Forward',
      content: `I aspire to gather as much knowledge as I can, and channel it toward either building a meaningful company 
      or offering exceptional value to the organization I serve. I believe in pairing curiosity with consistency, 
      and knowledge with execution, to make an enduring impact.`
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mx-auto shadow-lg shadow-cyan-400/30"></div>
        </motion.div>

        {/* Journey Sections */}
        <div className="mb-16">
          {journeySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="bg-gradient-to-r from-slate-800/60 via-navy-800/60 to-slate-800/60 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50 shadow-lg shadow-cyan-400/5 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 shadow-lg shadow-cyan-400/50"></div>
                  {section.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-800/60 via-navy-800/60 to-slate-800/60 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 shadow-lg shadow-cyan-400/5 hover:border-cyan-400/30 hover:shadow-cyan-400/10 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/30 group-hover:shadow-cyan-400/50 transition-all duration-300">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300">{highlight.title}</h4>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{highlight.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};