import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Zap,
  Brain,
  ShoppingCart,
  FileText,
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  MapPin,
  CheckCircle,
  AlertCircle,
  Link,
  GitBranch,
  Send,
  Cloud,
  LayoutGrid,
  BookOpen
} from 'lucide-react';

const PortfolioTwo = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Custom scrollbar styles
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      /* Custom Scrollbar for Main Content */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: ${isDark ? 'rgba(17, 24, 39, 0.3)' : 'rgba(243, 244, 246, 0.3)'};
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #06b6d4, #3b82f6);
        border-radius: 10px;
        border: 2px solid ${isDark ? '#111827' : '#f3f4f6'};
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #0891b2, #2563eb);
        box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
      }
      
      /* Custom Scrollbar for Modal */
      .modal-scroll::-webkit-scrollbar {
        width: 6px;
      }
      
      .modal-scroll::-webkit-scrollbar-track {
        background: ${isDark ? 'rgba(31, 41, 55, 0.3)' : 'rgba(229, 231, 235, 0.3)'};
        border-radius: 8px;
        margin: 8px 0;
      }
      
      .modal-scroll::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #06b6d4, #8b5cf6);
        border-radius: 8px;
        border: 1px solid ${isDark ? '#1f2937' : '#e5e7eb'};
      }
      
      .modal-scroll::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #0891b2, #7c3aed);
        box-shadow: 0 0 8px rgba(139, 92, 246, 0.4);
      }
      
      /* Firefox Scrollbar */
      * {
        scrollbar-width: thin;
        scrollbar-color: #06b6d4 ${isDark ? 'rgba(17, 24, 39, 0.3)' : 'rgba(243, 244, 246, 0.3)'};
      }
      
      .modal-scroll {
        scrollbar-width: thin;
        scrollbar-color: #8b5cf6 ${isDark ? 'rgba(31, 41, 55, 0.3)' : 'rgba(229, 231, 235, 0.3)'};
      }
      
      /* Smooth scrolling behavior */
      html {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar animation */
      @keyframes scrollbar-glow {
        0% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.3); }
        50% { box-shadow: 0 0 15px rgba(6, 182, 212, 0.6); }
        100% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.3); }
      }
      
      ::-webkit-scrollbar-thumb:active {
        animation: scrollbar-glow 0.3s ease-in-out;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [isDark]);

  const skills = [
    // Frontend
    { name: 'React', icon: <Code className="w-8 h-8" />, color: 'from-cyan-400 to-blue-500', category: 'frontend' },
    { name: 'Redux', icon: <Database className="w-8 h-8" />, color: 'from-purple-400 to-indigo-500', category: 'frontend' },
    { name: 'Tailwind CSS', icon: <Smartphone className="w-8 h-8" />, color: 'from-sky-400 to-cyan-500', category: 'frontend' },
    { name: 'Bootstrap', icon: <LayoutGrid className="w-8 h-8" />, color: 'from-violet-500 to-purple-600', category: 'frontend' },
    { name: 'JavaScript', icon: <Zap className="w-8 h-8" />, color: 'from-yellow-400 to-orange-500', category: 'frontend' },

    // Backend
    { name: 'Node.js', icon: <Server className="w-8 h-8" />, color: 'from-green-400 to-emerald-500', category: 'backend' },
    { name: 'Express', icon: <Globe className="w-8 h-8" />, color: 'from-gray-400 to-gray-600', category: 'backend' },
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, color: 'from-green-500 to-teal-500', category: 'backend' },

    // Tools
    { name: 'Git/GitHub', icon: <GitBranch className="w-8 h-8" />, color: 'from-orange-500 to-red-500', category: 'tools' },
    { name: 'Postman', icon: <Send className="w-8 h-8" />, color: 'from-amber-500 to-orange-500', category: 'tools' },
    { name: 'Vercel', icon: <Cloud className="w-8 h-8" />, color: 'from-gray-300 to-gray-500', category: 'tools' },
    { name: 'Netlify', icon: <Globe className="w-8 h-8" />, color: 'from-teal-400 to-cyan-500', category: 'tools' }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered News Aggregator',
      description: 'Real-time AI-driven news aggregator with Gemini AI summarization',
      detailedDescription: 'Designed and developed a real-time AI-driven news aggregator that fetches news from multiple sources, summarizes articles using Gemini AI, and provides personalized recommendations. Implemented advanced features like infinite scrolling with TanStack Query, state management with Redux Toolkit, and schema validation with Zod.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'TanStack Query', 'Redux Toolkit', 'Zod'],
      features: [
        'AI-powered content summarization using Gemini API',
        'Real-time news aggregation from multiple sources',
        'Infinite scrolling with TanStack Query optimization',
        'Redux Toolkit for efficient state management',
        'Zod schema validation for reliable data structures',
        'Personalized news recommendations engine'
      ],
      challenges: 'Implementing efficient AI processing for real-time news summarization while maintaining application performance and ensuring data validation across multiple news sources with varying data structures.',
      demoUrl: 'https://news-aggregator-demo.vercel.app',
      githubUrl: 'https://github.com/harshkumarjangir/ai-news-aggregator',
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-500',
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Food Ecommerce Platform',
      description: 'Full-featured food ordering system with real-time updates and payment integration',
      detailedDescription: 'Built a comprehensive food delivery platform with restaurant management, real-time order tracking, and payment integration. Implemented JWT authentication, role-based access control, and optimized MongoDB queries for performance. Designed a responsive UI with Tailwind CSS and implemented state management with Context API.',
      tech: ['React', 'Express', 'MongoDB', 'Context API', 'JWT', 'REST API', 'Tailwind CSS'],
      features: [
        'User authentication with JWT and role-based access',
        'Restaurant and menu management system',
        'Real-time order tracking with WebSocket integration',
        'Secure payment processing with Stripe API',
        'Admin dashboard with analytics and reporting',
        'Mobile-first responsive design with Tailwind CSS'
      ],
      challenges: 'Building a scalable architecture to handle concurrent orders while maintaining data consistency and implementing real-time features without compromising performance.',
      demoUrl: 'https://food-delivery-demo.vercel.app',
      githubUrl: 'https://github.com/harshkumarjangir/food-ecommerce',
      icon: <ShoppingCart className="w-6 h-6" />,
      gradient: 'from-orange-500 to-red-500',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Redux Ecommerce Store',
      description: 'Modern e-commerce solution with advanced state management',
      detailedDescription: 'Developed a sophisticated e-commerce platform showcasing advanced Redux state management patterns. Implemented complex state interactions, optimistic updates, and seamless user experience with Bootstrap UI components. Added features like product filtering, cart persistence, and checkout flow with form validation.',
      tech: ['React', 'Redux', 'Bootstrap', 'Redux Toolkit', 'Formik', 'Yup'],
      features: [
        'Advanced Redux state management with middleware',
        'Product catalog with filtering and search functionality',
        'Shopping cart with persistent state using localStorage',
        'User authentication and order history tracking',
        'Form validation with Formik and Yup',
        'Performance optimized with code splitting'
      ],
      challenges: 'Implementing complex state management patterns while maintaining code readability and ensuring optimal performance with large product catalogs.',
      demoUrl: 'https://redux-ecommerce-demo.vercel.app',
      githubUrl: 'https://github.com/harshkumarjangir/redux-ecommerce',
      icon: <ShoppingCart className="w-6 h-6" />,
      gradient: 'from-blue-500 to-indigo-600',
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'DOCX to PDF Converter',
      description: 'Fast and reliable document conversion tool with batch processing',
      detailedDescription: 'Created a powerful document conversion tool that transforms DOCX files to PDF format with high fidelity. Implemented batch processing, drag-and-drop interface, format preservation, and download management with progress tracking. Optimized the conversion process for large documents and added error handling for various DOCX formats.',
      tech: ['React', 'Tailwind', 'Express', 'Docx-pdf', 'React Dropzone', 'File-saver'],
      features: [
        'Drag-and-drop file upload interface with React Dropzone',
        'Batch processing for multiple documents',
        'Format and styling preservation during conversion',
        'Real-time conversion progress tracking',
        'Download management with file-saver library',
        'Clean, intuitive Tailwind CSS interface'
      ],
      challenges: 'Ensuring high-fidelity document conversion while handling various DOCX formats and implementing efficient file processing for large documents.',
      demoUrl: 'https://docx-pdf-converter-demo.vercel.app',
      githubUrl: 'https://github.com/harshkumarjangir/docx-pdf-converter',
      icon: <FileText className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-600',
      image: '/api/placeholder/600/400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  const ExperienceSection = ({ isDark }) => {
    return (
      <section id="experience" className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className={`p-8 rounded-3xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold mb-2">Grras Solutions</h3>
                <p className={`text-lg mb-4 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>MERN Stack Trainee</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>2023 - 2024</p>
              </div>

              <div className="md:w-2/3">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Developed and deployed full-stack web applications using MERN stack, ensuring seamless integration between components
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Built RESTful APIs using Express.js and MongoDB, reducing data retrieval times by 30%
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Implemented JWT-based authentication and role-based access control
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Deployed applications to Vercel and Netlify, handling both client and server deployment
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    );
  };

  const EducationSection = ({ isDark }) => {
    return (
      <section id="education" className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>

          <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-start">
              <div className="mr-6">
                <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
                  <BookOpen className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Bachelor of Computer Application</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>S. S. Jain Subodh P. G. (Autonomous) College</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>2021 - 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const filteredSkills = activeSkillCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeSkillCategory);

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 backdrop-blur-lg ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              HKJ
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              <motion.button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`md:hidden ${isDark ? 'bg-gray-900' : 'bg-white'} border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-4 space-y-4">
                {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block hover:text-cyan-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, -50] )}}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Harsh Kumar
              </span>
              <br />
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Jangir</span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center justify-center space-x-2 text-lg md:text-xl mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                Full Stack Developer
              </span>
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>•</span>
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>MERN Stack</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm md:text-base">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Jaipur, Rajasthan</span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl mb-12 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Crafting digital experiences with modern web technologies.
            <br />
            Passionate about building scalable applications that make a difference.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="mailto:harshkumarjangir2002@gmail.com"
              className={`px-8 py-4 rounded-full font-semibold border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 ${isDark ? 'hover:bg-cyan-500' : 'hover:bg-cyan-500'}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            <p className="mb-6">
              I'm a passionate Full Stack Developer specializing in the MERN stack, with a keen eye for creating
              seamless user experiences and robust backend architectures. Based in the vibrant city of Jaipur,
              I bring ideas to life through clean, efficient code.
            </p>
            <p>
              My journey in web development has led me to work on diverse projects ranging from AI-powered applications
              to e-commerce platforms. I believe in continuous learning and staying updated with the latest technologies
              to deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>

          {/* Skill Category Filter */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className={`inline-flex rounded-xl p-1 ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
              {['all', 'frontend', 'backend', 'tools'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveSkillCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg capitalize transition-colors ${activeSkillCategory === category
                      ? `${isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} shadow`
                      : `${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className={`group relative p-6 rounded-2xl backdrop-blur-lg ${isDark ? 'bg-gray-800/50 hover:bg-gray-800/70' : 'bg-white/50 hover:bg-white/70'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-400/50 transition-all duration-300 cursor-pointer`}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} p-3 mb-4 mx-auto flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-center group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <ExperienceSection isDark={isDark} />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`group relative p-8 rounded-3xl backdrop-blur-lg ${isDark ? 'bg-gray-800/50 hover:bg-gray-800/70' : 'bg-white/50 hover:bg-white/70'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-400/50 transition-all duration-500 cursor-pointer overflow-hidden`}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} p-2 mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} group-hover:bg-cyan-400/20 group-hover:text-cyan-400 transition-colors duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="flex items-center space-x-2 text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <EducationSection isDark={isDark} />

      {/* Resume Section */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Download my resume to learn more about my experience and qualifications.
          </p>
          <motion.button
            className="group bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-3 mx-auto hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className={`text-lg mb-12 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="mailto:harshkumarjangir2002@gmail.com"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-3 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </motion.a>

            <div className="flex space-x-4">
              <motion.a
                href="https://linkedin.com/in/harshkumarjangir"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full ${isDark ? 'bg-gray-800 hover:bg-blue-600' : 'bg-gray-200 hover:bg-blue-600'} transition-colors duration-300 hover:text-white`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="https://github.com/harshkumarjangir"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-700'} transition-colors duration-300 hover:text-white`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDark ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-gray-50/50'} backdrop-blur-lg`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <motion.p
            className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 sm:mb-0`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2025 Harsh Kumar Jangir. Crafted with passion in Jaipur.
          </motion.p>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/harshkumarjangir"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/harshkumarjangir"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-scroll rounded-3xl ${isDark ? 'bg-gray-900' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-2xl`}
              initial={{ scale: 0.5, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 15, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className={`absolute top-4 right-4 p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors z-10`}
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Modal Content */}
              <div className="p-8">
                {/* Header */}
                <motion.div
                  className="flex items-start space-x-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedProject.gradient} p-3 flex items-center justify-center text-white flex-shrink-0`}>
                    {selectedProject.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                      {selectedProject.title}
                    </h2>
                    <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {selectedProject.description}
                    </p>
                  </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-gray-800 text-cyan-400 border border-cyan-400/30' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Detailed Description */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                  <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {selectedProject.detailedDescription}
                  </p>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Challenges */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                    <span>Technical Challenges</span>
                  </h3>
                  <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-amber-50 border border-amber-200'}`}>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedProject.challenges}
                    </p>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>

                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 transform-origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default PortfolioTwo;