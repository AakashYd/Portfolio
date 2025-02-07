import { Project, Skill, TimelineItem } from '../types';
import { Brain, Code2, Cpu, Globe, Gamepad, FlaskRound as Flask, Camera, Laptop } from 'lucide-react';

export const projects: Project[] = [
  {
    title: 'Electric Car Website',
    description: 'Interactive full-stack web application showcasing electric cars with advanced animations and sleek user experience.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80',
    tags: ['ReactJS', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/AakashYd/FULL-stack-',
    // demo: 'https://electric-car-demo.com'
  },
  {
    title: 'Gesture Validation',
    description: 'Real-time hand gesture recognition system classifying gestures using machine learning.',
    image: 'https://images.unsplash.com/photo-1516981879613-9f5da904015f?auto=format&fit=crop&q=80',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
    github: 'https://github.com/AakashYd/Gestures-Validation-Using-Machine-Learning',
    // demo: 'https://gesture-demo.com'
  },
  {
    title: 'Hand Gesture Control',
    description: 'Control your system using AI-powered hand gestures for media and volume control.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'CustomTkinter'],
    github: 'https://github.com/AakashYd/Hand-Gesture-Control-System'
  },
  {
    title: 'AI Drone',
    description: 'Advanced drone system with computer vision and autonomous navigation capabilities.',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Arduino'],
    newgeniedc: 'https://newgeniedc.chitkara.edu.in/project/ai-drone/',
    demo: 'https://www.youtube.com/watch?v=AOrXxNf4ufI'
  },
  {
    title: 'Skin Disease Prediction',
    description: 'Deep learning model for accurate skin disease classification and diagnosis.',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80',
    tags: ['Python', 'TensorFlow', 'CNN', 'Streamlit'],
    // github: 'https://github.com/aakash/skin-disease'
  },
  {
    title: 'Laptop Price Prediction',
    description: 'ML model to predict laptop prices based on specifications.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80',
    tags: ['Python', 'Scikit-learn', 'Flask', 'Pandas'],
    // github: 'https://github.com/aakash/laptop-price'
  },
  {
    title: 'Iris Flower Classifier',
    description: 'GUI-based classifier for predicting Iris flower species using SVM.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80',
    tags: ['Python', 'Tkinter', 'Scikit-learn', 'SVM'],
    github: 'https://github.com/AakashYd/Iris-Flower-Classifier'
  },
  {
    title: 'Jumping Jak Game',
    description: 'Fun endless runner game with multiple modes and power-ups.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
    tags: ['Java', 'OOP', 'GUI Development'],
    github: 'https://github.com/AakashYd/jumping-jak',
    // demo: 'https://jumping-jak-demo.com'
  }
];

export const skills: Skill[] = [
  { name: 'C++', level: 90, category: 'programming' },
  { name: 'Python', level: 95, category: 'programming' },
  { name: 'Java', level: 85, category: 'programming' },
  { name: 'React', level: 90, category: 'web' },
  { name: 'Node.js', level: 88, category: 'web' },
  { name: 'MongoDB', level: 85, category: 'web' },
  { name: 'TailwindCSS', level: 92, category: 'web' },
  { name: 'Deep Learning', level: 85, category: 'ai' },
  { name: 'TensorFlow', level: 88, category: 'ai' },
  { name: 'OpenCV', level: 90, category: 'ai' },
  { name: 'MediaPipe', level: 87, category: 'ai' },
  { name: 'Arduino', level: 95, category: 'hardware' },
  { name: 'Raspberry Pi', level: 90, category: 'hardware' },
  { name: 'Drone Tech', level: 85, category: 'hardware' }
];

export const timeline: TimelineItem[] = [
  {
    date: '2024',
    title: 'AI Research Intern',
    description: 'Worked on cutting-edge AI projects at Tech Innovation Labs.'
  },
  {
    date: '2023',
    title: 'First Place - National Hackathon',
    description: 'Won first place for AI Drone project implementation.'
  },
  {
    date: '2023',
    title: 'Published Research Paper',
    description: 'Research on Hand Gesture Recognition published in IEEE conference.'
  },
  {
    date: '2022',
    title: 'Started Computer Science Degree',
    description: 'Began journey in Computer Science at Chitkara University.'
  }
];

export const skillCategories = [
  {
    name: 'Programming',
    icon: Code2,
    color: 'text-purple-500'
  },
  {
    name: 'Web Development',
    icon: Globe,
    color: 'text-blue-500'
  },
  {
    name: 'AI/ML',
    icon: Brain,
    color: 'text-green-500'
  },
  {
    name: 'Hardware',
    icon: Cpu,
    color: 'text-red-500'
  }
];
