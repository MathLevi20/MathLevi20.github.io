import React, { useState } from "react";
import { motion } from "framer-motion";

function Profile() {
  const Resume = "/Curriculo_MatheusLevi_2026_MLEng.pdf";

  const [isImageHovered, setIsImageHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f1a14 0%, #14281c 50%, #0f1a14 100%)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background forest pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial glow top */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #7cb9e8 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6bad78 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #3d6b4f 0%, transparent 70%)" }}
        />

        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? "3px" : "2px",
              height: i % 3 === 0 ? "3px" : "2px",
              background: i % 2 === 0 ? "#6bad78" : "#7cb9e8",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Thin horizontal lines - forest effect */}
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(61,107,79,0.03) 80px, rgba(61,107,79,0.03) 81px)"
        }} />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, staggerChildren: 0.15 }}
          >
            {/* Tag line */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10" style={{ background: "#6bad78" }} />
              <span
                className="text-sm font-mono tracking-widest uppercase"
                style={{ color: "#6bad78" }}
              >
                Olá, eu sou
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              style={{ color: "#e8ede4" }}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 30px rgba(107,173,120,0.4)",
                transition: { duration: 0.3 }
              }}
            >
              Matheus{" "}
              <span>Levi</span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3"
              style={{ color: "#6bad78" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              Machine Learning Engineer
            </motion.h2>

            {/* Speciality */}
            <motion.h3
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg font-mono mb-6"
              style={{ color: "#6bad78" }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              ▸ Infraestrutura de LLMs & Data Engineering
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base leading-relaxed mb-8 max-w-lg"
              style={{ color: "rgba(232,237,228,0.75)" }}
            >
              Engenheiro de Machine Learning com atuação focada em Inteligência Artificial, LLMs, IA Generativa e Engenharia de Dados. Experiência na construção de datasets, pipelines de agentes autônomos e infraestrutura de inferência em produção.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a
                href={Resume}
                className="group inline-flex items-center px-6 py-3 rounded-lg font-mono text-sm relative overflow-hidden"
                style={{
                  border: "1.5px solid #6bad78",
                  color: "#6bad78",
                  background: "transparent",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 30px rgba(107,173,120,0.25)",
                  backgroundColor: "rgba(107,173,120,0.1)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(107,173,120,0.08), transparent)" }}
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
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </motion.svg>
              </motion.a>

              <motion.a
                href="mailto:matheuslevi2012@gmail.com"
                className="inline-flex items-center px-6 py-3 rounded-lg font-mono text-sm relative overflow-hidden"
                style={{
                  border: "1.5px solid rgba(168,200,232,0.5)",
                  color: "#a8c8e8",
                  background: "transparent",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 30px rgba(124,185,232,0.2)",
                  backgroundColor: "rgba(124,185,232,0.08)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(124,185,232,0.08), transparent)" }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Contato</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a
                href="https://github.com/MathLevi20"
                style={{ color: "rgba(232,237,228,0.5)" }}
                aria-label="GitHub"
                whileHover={{ scale: 1.2, color: "#6bad78", rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/matheus-levi-621125150/"
                style={{ color: "rgba(232,237,228,0.5)" }}
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, color: "#7cb9e8", rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://matheus-levi.netlify.app"
                style={{ color: "rgba(232,237,228,0.5)" }}
                aria-label="Website"
                whileHover={{ scale: 1.2, color: "#a8c8e8", rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            {/* Decorative ring */}
            <motion.div
              className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full"
              style={{
                border: "1px solid rgba(107,173,120,0.2)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full"
              style={{
                border: "1px dashed rgba(124,185,232,0.15)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Glow orb behind photo */}
            <div
              className="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
              style={{
                background: "radial-gradient(circle, #6bad78 0%, #3d6b4f 40%, transparent 70%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />

            {/* Photo Container */}
            <div className="relative z-10 max-w-xs w-full">
              {/* Background frame */}
              <motion.div
                className="aspect-square rounded-2xl"
                style={{ background: "linear-gradient(135deg, #3d6b4f, #7cb9e8)", opacity: 0.6 }}
                initial={{ rotate: 4 }}
                animate={{
                  rotate: isImageHovered ? 7 : 4,
                  scale: isImageHovered ? 1.03 : 1,
                  boxShadow: isImageHovered
                    ? "0 25px 60px rgba(61,107,79,0.4)"
                    : "0 15px 40px rgba(61,107,79,0.2)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              {/* Main image */}
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer"
                style={{ background: "#14281c" }}
                initial={{ rotate: -4 }}
                animate={{
                  rotate: isImageHovered ? 0 : -4,
                  scale: isImageHovered ? 1.03 : 1,
                  boxShadow: isImageHovered
                    ? "0 30px 60px rgba(0,0,0,0.5)"
                    : "0 20px 40px rgba(0,0,0,0.3)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <motion.img
                  src="/profile-primary.png"
                  alt="Matheus Levi"
                  className="w-full h-full object-cover object-center rounded-2xl"
                  style={{ objectPosition: "center 22%" }}
                  animate={{
                    scale: isImageHovered ? 1.05 : 1,
                    filter: isImageHovered
                      ? "brightness(1.1) contrast(1.05) saturate(1.1)"
                      : "brightness(0.95) contrast(1) saturate(0.9)",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Green overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: "linear-gradient(to top, rgba(20,40,28,0.5) 0%, transparent 60%)" }}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isImageHovered ? 0.3 : 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ border: "2px solid transparent" }}
                  animate={{
                    borderColor: isImageHovered ? "rgba(107,173,120,0.7)" : "transparent",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Stats badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl font-mono text-xs z-20"
                style={{
                  background: "rgba(15,26,20,0.9)",
                  border: "1px solid rgba(107,173,120,0.4)",
                  color: "#6bad78",
                  backdropFilter: "blur(12px)",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(107,173,120,0.8)",
                  boxShadow: "0 4px 20px rgba(107,173,120,0.2)",
                }}
              >
                <span style={{ color: "#6bad78" }}>▸</span>{" "}
                <span style={{ color: "#e8ede4" }}>Especialista</span> em IA / ML
              </motion.div>

              {/* Tech badge */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl font-mono text-xs z-20"
                style={{
                  background: "rgba(15,26,20,0.9)",
                  border: "1px solid rgba(124,185,232,0.4)",
                  color: "#7cb9e8",
                  backdropFilter: "blur(12px)",
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(124,185,232,0.8)",
                  boxShadow: "0 4px 20px rgba(124,185,232,0.2)",
                }}
              >
                AI & Full Stack
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className="text-xs font-mono tracking-widest" style={{ color: "rgba(107,173,120,0.5)" }}>
            SCROLL
          </span>
          <motion.div
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, rgba(107,173,120,0.6), transparent)" }}
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Profile;
