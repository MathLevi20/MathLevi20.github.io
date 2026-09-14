import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
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

  const Resume = "/Curriculo_MatheusLevi_2026_MLEng.pdf";

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled
          ? "rgba(15,26,20,0.92)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(61,107,79,0.2)" : "none",
        boxShadow: isScrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="#"
              className="flex items-center justify-center w-11 h-11 rounded-lg font-mono text-sm font-bold relative"
              style={{
                border: "1.5px solid rgba(107,173,120,0.6)",
                color: "#6bad78",
                background: "rgba(61,107,79,0.1)",
              }}
              whileHover={{
                scale: 1.08,
                rotate: 5,
                borderColor: "rgba(107,173,120,1)",
                boxShadow: "0 0 20px rgba(107,173,120,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 8px rgba(107,173,120,0.15)",
                  "0 0 16px rgba(107,173,120,0.35)",
                  "0 0 8px rgba(107,173,120,0.15)"
                ]
              }}
              transition={{
                boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              ML
              {/* Corner dots */}
              {["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map((pos, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1.5 h-1.5 rounded-full ${pos}`}
                  style={{ background: "#6bad78" }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}
            </motion.a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-7"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="font-mono text-sm transition-colors duration-300"
                style={{ color: "rgba(232,237,228,0.6)" }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  color: "#e8ede4",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span style={{ color: "#6bad78" }}>0{index + 1}.</span>{" "}
                {item.name}
              </motion.a>
            ))}

            <motion.a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300"
              style={{
                border: "1.5px solid rgba(107,173,120,0.6)",
                color: "#6bad78",
                background: "transparent",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(107,173,120,0.1)",
                borderColor: "rgba(107,173,120,1)",
                boxShadow: "0 4px 20px rgba(107,173,120,0.2)",
              }}
              whileTap={{ scale: 0.97 }}
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
              className="p-2 rounded-lg"
              style={{ color: "rgba(232,237,228,0.7)" }}
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.1, color: "#6bad78" }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden px-6 pb-6"
            style={{
              background: "rgba(15,26,20,0.97)",
              borderTop: "1px solid rgba(61,107,79,0.2)",
              backdropFilter: "blur(16px)",
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="font-mono text-sm py-2"
                  style={{ color: "rgba(232,237,228,0.7)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ x: 8, color: "#e8ede4" }}
                >
                  <span style={{ color: "#6bad78" }}>0{index + 1}.</span>{" "}
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg font-mono text-sm text-center mt-2"
                style={{
                  border: "1.5px solid rgba(107,173,120,0.6)",
                  color: "#6bad78",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ backgroundColor: "rgba(107,173,120,0.1)" }}
              >
                Resumo
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navigation;
