import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';

export const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Mail, href: 'mailto:adityashegde7@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+919013817183', label: 'Phone' },
    { icon: Linkedin, href: 'https://linkedin.com/in/aditya-s-hegde-482979264', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Adi7coder', label: 'GitHub' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-1 shadow-2xl shadow-cyan-400/30"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-black flex items-center justify-center border border-slate-700/50">
              <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">AH</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Aditya S Hegde
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text mb-4 font-light"
          >
            Engineering Student (AI & ML)
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center text-gray-300 mb-8"
          >
            <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
            <span>Bangalore, Karnataka, India</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            An enthusiastic and driven B.Tech student specializing in Artificial Intelligence and Machine Learning, 
            with a strong foundation in programming and web development. Passionate about technology, innovation, 
            and creating meaningful solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-br from-slate-800/80 to-navy-800/80 rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/30"
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-cyan-400 mx-auto shadow-lg shadow-cyan-400/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};