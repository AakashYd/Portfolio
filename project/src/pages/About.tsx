import { motion } from 'framer-motion';
import { Download, Rocket, Book, Bot, Brain } from 'lucide-react';
import { timeline } from '../data';

export default function About() {
  const funFacts = [
    {
      icon: Rocket,
      text: 'Completed 5+ AI Projects',
    },
    {
      icon: Bot,
      text: 'Built an Arduino Car Project',
    },
    {
      icon: Brain,
      text: 'Designed an AI Drone for Image Collection',
    },
    {
      icon: Book,
      text: 'Interested in Robotics & Deep Learning',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Personal Info</h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li><strong>Name:</strong> Aakash Yadav</li>
                <li><strong>Education:</strong> CSE AI, 6th Semester, Chitkara University</li>
                <li><strong>Focus:</strong> AI, ML, Web Development</li>
                <li><strong>Location:</strong> Punjab, India</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Passions</h2>
              <p className="text-gray-600 dark:text-gray-300">
                I'm passionate about AI, automation, and creating innovative web solutions. 
                My goal is to combine cutting-edge AI technologies with practical applications 
                that solve real-world problems.
              </p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 mt-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Download Resume
                <Download className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Fun Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              >
                <fact.icon className="w-8 h-8 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">{fact.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Timeline</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1" />
                <div className="mb-1 text-sm text-blue-600">{item.date}</div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
