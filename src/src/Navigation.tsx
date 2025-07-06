import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Sobre", href: "#about" },
    { name: "Experiência", href: "#experience" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" }
  ];

  const Resume = "https://firebasestorage.googleapis.com/v0/b/portifolio-2ebbb.appspot.com/o/Curriculos%2FCurriculo_MatheusLevi_Portuguese.pdf?alt=media&token=98182258-7581-4378-8c38-1084f32ded1d";

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="text-teal-400 font-mono text-lg font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a 
              href="#" 
              className="hover:text-teal-300 transition-colors duration-300 flex items-center justify-center w-12 h-12 border-2 border-teal-400 rounded-lg relative"
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 0 20px rgba(45, 212, 191, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 10px rgba(45, 212, 191, 0.2)",
                  "0 0 20px rgba(45, 212, 191, 0.4)",
                  "0 0 10px rgba(45, 212, 191, 0.2)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <span className="text-lg font-bold">ML</span>
              
              {/* Pontos decorativos */}
              <motion.div
                className="absolute -top-1 -left-1 w-2 h-2 bg-teal-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-teal-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-2 h-2 bg-teal-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute -bottom-1 -right-1 w-2 h-2 bg-teal-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </motion.a>
          </motion.div>

          {/* Navigation Items */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-mono text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-teal-400 mr-1">0{index + 1}.</span>
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 border border-teal-400 text-teal-400 rounded 
                         hover:bg-teal-400 hover:text-slate-900 transition-colors duration-300 
                         font-mono text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resumo
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
              aria-label="Menu"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navigation;
