import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Youtube, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <ParticlesBackground />
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="pic.jpeg"
            alt="Aakash Yadav"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-lg"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-600">Aakash Yadav</span> 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
        >
          A Passionate Developer | AI & ML Enthusiast | Web Designer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          I specialize in AI, Machine Learning, and Web Development. With experience in creating intelligent systems and stunning websites, I turn ideas into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <a
            href="https://github.com/aakash"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/aakash"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://youtube.com/@aakash"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <Youtube className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com/aakash"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <Twitter className="w-8 h-8" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
          >
            Download Resume
            <Download className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
