import React from "react";
import { motion } from "framer-motion";

function Loading() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5, ease: "easeInOut" as const }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
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
      transition: { duration: 2.5, ease: "easeInOut" as const }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{ background: "linear-gradient(160deg, #0f1a14 0%, #14281c 50%, #0a1209 100%)" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(61,107,79,0.15) 0%, transparent 60%)"
        }}
      />

      {/* Logo animado */}
      <motion.div variants={logoVariants} className="mb-10 relative">
        <div className="relative">
          {/* Main box */}
          <motion.div
            className="w-20 h-20 rounded-xl flex items-center justify-center relative z-10"
            style={{
              border: "2px solid rgba(107,173,120,0.7)",
              background: "rgba(61,107,79,0.1)",
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(107,173,120,0.2)",
                "0 0 40px rgba(107,173,120,0.5)",
                "0 0 20px rgba(107,173,120,0.2)"
              ]
            }}
            transition={{ boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
          >
            <motion.span
              className="text-2xl font-bold font-mono"
              style={{ color: "#6bad78" }}
              animate={{ color: ["#6bad78", "#7cb9e8", "#6bad78"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ML
            </motion.span>

            {/* Corner dots */}
            {["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${pos}`}
                style={{ background: "#6bad78" }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}
          </motion.div>

          {/* Orbiting dots */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                background: i % 2 === 0 ? "#6bad78" : "#7cb9e8",
                top: "50%",
                left: "50%",
                transformOrigin: "50% -48px"
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: "linear", delay: i * (1 / 6) },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 },
                opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Loading text */}
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h2 className="text-xl font-semibold mb-2" style={{ color: "#e8ede4" }}>
          Matheus Levi
        </h2>
        <motion.p
          className="font-mono text-sm"
          style={{ color: "#6bad78" }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Carregando portfólio...
        </motion.p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        variants={itemVariants}
        className="w-56 h-0.5 rounded-full overflow-hidden"
        style={{ background: "rgba(61,107,79,0.2)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #3d6b4f, #6bad78, #7cb9e8)" }}
          variants={progressVariants}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "2px",
            height: "2px",
            background: i % 3 === 0 ? "#6bad78" : i % 3 === 1 ? "#7cb9e8" : "#a8c8e8",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3
          }}
          animate={{ y: [0, -80, 0], opacity: [0, 0.5, 0], scale: [0, 1, 0] }}
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
