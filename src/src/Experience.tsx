import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Experience() {
  const [activeJob, setActiveJob] = useState(0);

  const jobs = [
    {
      id: 0,
      company: "AWTech",
      title: "Consultor em Desenvolvimento",
      period: "Setembro 2024 - Presente",
      location: "Híbrido - Piauí, Brasil",
      description: [
        "Consultor em projetos de Inteligência Artificial e Processamento de Dados, focando no desenvolvimento de soluções para análise médica e modelagem de nuvens de pontos com LiDAR",
        "Implementei LLMs combinados com Retrieval-Augmented Generation (RAG) para extração e análise de textos médicos",
        "Utilizei PostgreSQL para gerenciamento de dados e FastAPI para backend, com Docker e Docker Compose para deploy",
        "Desenvolvi soluções com FastAPI, SQLAlchemy, Alembic para processamento de dados LiDAR",
        "Modelei visualizações interativas com Flutter e Swift, utilizando Three.js para reconstrução 3D"
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "Docker Compose","LLMs", "RAG", "Flutter", "Three.js"]
    },
    {
      id: 1,
      company: "Alva",
      title: "Desenvolvedor Python Full Stack",
      period: "Fevereiro 2024 - Abril 2025",
      location: "Remoto - São Paulo, Brasil",
      description: [
        "Trabalhei em empresa focada em Ciência de Dados e Desenvolvimento Full Stack utilizando Django",
        "Participei na criação de aplicações web completas, desde o design do banco de dados até implementação do frontend e backend",
        "Colaborei com equipe de Ciência de Dados para desenvolver modelos de análise utilizando Pandas, NumPy e scikit-learn",
        "Apliquei técnicas de IA generativa, como GPT-4 e DALL·E 3, para criar soluções inteligentes e criativas",
        "Desenvolvi visualizações personalizadas otimizando a interpretação dos resultados para stakeholders"
      ],
      technologies: ["Django", "Python", "JavaScript", "Bootstrap", "Pandas", "NumPy", "scikit-learn", "GPT-4"]
    },
    {
      id: 2,
      company: "Novos Negócios TIC",
      title: "Mobile Developer",
      period: "Julho 2023 - Dezembro 2023",
      location: "Remoto",
      description: [
        "Participei de capacitação em Novos Negócios TIC através da Comunicare Solutions",
        "Desenvolvi o aplicativo Amidote, um app iOS focado na adoção de animais",
        "Utilizei Swift, Firebase, SwiftKit e SwiftUI para construir plataforma intuitiva e funcional",
        "Explorei o potencial do NoSQL para otimização da aplicação",
        "Tive papel chave no desenvolvimento com foco na criação de funcionalidades essenciais"
      ],
      technologies: ["Swift", "SwiftUI", "Firebase", "SwiftKit", "NoSQL", "iOS"]
    },
    {
      id: 3,
      company: "Comunicare Solutions",
      title: "Desenvolvedor Python Back-end",
      period: "Janeiro 2022 - Março 2024",
      location: "Piauí, Brasil",
      description: [
        "Empresa especializada em soluções para tratamento fonoaudiológico usando Inteligência Artificial",
        "Desenvolvi API em Flask para reconhecimento de voz incorporando modelos de IA",
        "Utilizei Whisper e Wav2Vec para transcrição de fala em texto",
        "Implementei Nvidia Triton para otimizar inferência de modelos com solução escalável",
        "Gerenciei recursos na Google Cloud Platform (GCP) e AWS",
        "Implementei testes unitários com Pytest e testes de stress com k6"
      ],
      technologies: ["Flask", "Python", "Whisper", "Wav2Vec", "Nvidia Triton", "GCP", "AWS", "Pytest", "Next.js"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut" as const
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.4,
        ease: "easeIn" as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const
      }
    }
  };

  const tabVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "transparent"
    },
    active: {
      scale: 1.02,
      backgroundColor: "rgba(45, 212, 191, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.05,
      x: 8,
      backgroundColor: "rgba(45, 212, 191, 0.05)",
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.section 
      id="experience" 
      className="bg-slate-900 text-slate-400 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-2xl font-bold text-slate-200 mb-12 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-teal-400 font-mono text-lg mr-2"
            animate={{
              color: ["#2dd4bf", "#0891b2", "#2dd4bf"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            02.
          </motion.span>
          Onde trabalhei
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Job Tabs */}
          <motion.div 
            className="lg:w-1/4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
              {jobs.map((job, index) => (
                <motion.button
                  key={job.id}
                  onClick={() => setActiveJob(index)}
                  className={`text-left p-4 whitespace-nowrap lg:whitespace-normal border-l-2 lg:border-l-2 lg:border-b-0 border-b-2 transition-colors duration-300 relative ${
                    activeJob === index
                      ? "border-teal-400 text-teal-400"
                      : "border-slate-600 text-slate-400 hover:text-teal-400 hover:bg-slate-800/50"
                  }`}
                  variants={tabVariants}
                  initial="inactive"
                  animate={activeJob === index ? "active" : "inactive"}
                  whileHover={activeJob !== index ? "hover" : "active"}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  {/* Indicador de seleção animado */}
                  {activeJob === index && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-teal-400"
                      layoutId="activeTab"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                  <div className="font-mono text-sm relative z-10">{job.company}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Job Content */}
          <motion.div 
            className="lg:w-3/4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJob}
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div variants={itemVariants}>
                  <motion.h3 
                    className="text-xl font-semibold text-slate-200"
                    layoutId={`title-${activeJob}`}
                  >
                    {jobs[activeJob].title}{" "}
                    <motion.span 
                      className="text-teal-400"
                      animate={{
                        color: ["#2dd4bf", "#0891b2", "#2dd4bf"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    >
                      @ {jobs[activeJob].company}
                    </motion.span>
                  </motion.h3>
                  <motion.p 
                    className="text-sm font-mono text-slate-400 mt-1"
                    layoutId={`period-${activeJob}`}
                  >
                    {jobs[activeJob].period}
                  </motion.p>
                  <motion.p 
                    className="text-sm text-slate-500 mt-1"
                    layoutId={`location-${activeJob}`}
                  >
                    {jobs[activeJob].location}
                  </motion.p>
                </motion.div>

                <motion.ul 
                  className="space-y-3"
                  variants={containerVariants}
                >
                  {jobs[activeJob].description.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start group"
                      variants={itemVariants}
                      whileHover={{ 
                        x: 8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.span 
                        className="text-teal-400 mr-3 mt-2 text-sm"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      >
                        ▸
                      </motion.span>
                      <span className="leading-relaxed group-hover:text-slate-300 transition-colors duration-200">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div 
                  className="flex flex-wrap gap-2 pt-4"
                  variants={containerVariants}
                >
                  {jobs[activeJob].technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="bg-teal-400/10 text-teal-400 px-3 py-1 rounded-full text-sm font-mono cursor-pointer"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(45, 212, 191, 0.2)",
                        y: -2,
                        boxShadow: "0 4px 8px rgba(45, 212, 191, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ 
                        duration: 0.2,
                        type: "spring",
                        stiffness: 300
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
