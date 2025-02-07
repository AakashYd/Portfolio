import { Github, Linkedin, Youtube, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/AakashYd/',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aakash--yadav/',
      label: 'LinkedIn',
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@aakash',
      label: 'YouTube',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/aakash',
      label: 'Twitter',
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="font-bold text-xl mb-4 block">
              Aakash<span className="text-blue-600">Yadav</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Turning ideas into reality through code and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Punjab, India</li>
              <li>aakash@example.com</li>
              <li>+91 XXXXXXXXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t dark:border-gray-700 mt-12 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>© 2025 Aakash Yadav. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
