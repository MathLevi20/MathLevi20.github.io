import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Profile() {
  const Resume =
    "https://firebasestorage.googleapis.com/v0/b/portifolio-2ebbb.appspot.com/o/Curriculos%2FCurriculo_MatheusLevi_Portuguese.pdf?alt=media&token=98182258-7581-4378-8c38-1084f32ded1d";

  // Variantes de animação mais dinâmicas
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const nameVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: 90
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0
    }
  };

  const floatingAnimation = {
    y: [-5, 5, -5]
  };

  return (
    <motion.div
      className="min-h-screen bg-slate-900 text-slate-400 font-mono relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={nameVariants}
            animate={floatingAnimation}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-200 mb-4 relative group cursor-pointer"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(20, 184, 166, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Matheus Levi</span>
              
              {/* Moldura animada de fundo */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-teal-400/10 via-cyan-400/5 to-transparent rounded-lg blur-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0.8, 1.1, 0.8],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.2,
                  transition: { duration: 0.3 }
                }}
              />
              
              {/* Borda animada no hover */}
              <motion.div
                className="absolute -inset-2 border border-teal-400/30 rounded-lg opacity-0"
                whileHover={{
                  opacity: [0, 1, 0],
                  scale: [0.9, 1.05, 1],
                  borderColor: ["rgba(20, 184, 166, 0.3)", "rgba(20, 184, 166, 0.8)", "rgba(20, 184, 166, 0.3)"]
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </motion.h1>
          </motion.div>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              color: "#14b8a6"
            }}
          >
            Software Developer
          </motion.h2>

          <motion.h3
            className="text-lg sm:text-xl text-teal-300 mb-8"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 10px rgba(20, 184, 166, 0.8)"
            }}
          >
            Especialista em Python, IA e Full Stack
          </motion.h3>

          <motion.p
            className="text-lg leading-relaxed mb-8 max-w-2xl"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
          >
            Sou um desenvolvedor Full Stack com especialização em Inteligência Artificial e Python.
            Tenho experiência sólida em desenvolvimento web, ciência de dados e implementação de
            soluções inovadoras usando tecnologias modernas. Atualmente atuo como consultor em
            projetos de IA e processamento de dados.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            variants={itemVariants}
          >
            <motion.a
              href={Resume}
              className="group inline-flex items-center px-6 py-3 border border-teal-400 text-teal-400 
                         rounded-md hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 
                         shadow-lg hover:shadow-teal-400/25 relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Ver Resumo</span>
              <motion.svg
                className="ml-2 h-4 w-4 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </motion.svg>
            </motion.a>

            <motion.a
              href="mailto:matheuslevi2012@gmail.com"
              className="group inline-flex items-center px-6 py-3 border border-slate-400 text-slate-400 
                         rounded-md hover:bg-slate-400 hover:text-slate-900 transition-all duration-300
                         shadow-lg hover:shadow-slate-400/25 relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(148, 163, 184, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Contato</span>
            </motion.a>
          </motion.div>
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/MathLevi20"
              className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/matheus-levi-621125150/"
              className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://matheus-levi.netlify.app"
              className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
              aria-label="Website"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

      </div>

    </motion.div>
  )
}

export default Profile;
