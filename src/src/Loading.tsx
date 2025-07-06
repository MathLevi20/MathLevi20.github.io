import React from "react";
import { motion } from "framer-motion";

function Loading() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2.5,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Logo animado */}
      <motion.div
        variants={logoVariants}
        className="mb-8"
      >
        <div className="relative">
          {/* Caixa externa */}
          <motion.div
            className="w-20 h-20 border-2 border-teal-400 rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(45, 212, 191, 0.3)",
                "0 0 40px rgba(45, 212, 191, 0.6)",
                "0 0 20px rgba(45, 212, 191, 0.3)"
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
            {/* Letra ML */}
            <motion.span
              className="text-2xl font-bold text-teal-400 font-mono"
              animate={{
                color: ["#2dd4bf", "#0891b2", "#2dd4bf"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ML
            </motion.span>
          </motion.div>
          
          {/* Pontos animados ao redor */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-teal-400 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: "50% -40px"
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.125
                },
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.125
                },
                opacity: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.125
                }
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Texto de loading */}
      <motion.div
        variants={itemVariants}
        className="text-center mb-8"
      >
        <h2 className="text-xl font-semibold text-slate-200 mb-2">
          Matheus Levi
        </h2>
        <motion.p
          className="text-slate-400 font-mono text-sm"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Carregando portfólio...
        </motion.p>
      </motion.div>

      {/* Barra de progresso */}
      <motion.div
        variants={itemVariants}
        className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
          variants={progressVariants}
        />
      </motion.div>

      {/* Partículas flutuantes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
}

export default Loading;
