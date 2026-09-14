import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Experience() {
  const [activeJob, setActiveJob] = useState(0);

  const jobs = [
    {
      id: 0,
      company: "SoberanIA",
      title: "Engenheiro de Machine Learning Pleno",
      period: "Novembro 2025 - Presente",
      location: "Remoto - São Paulo, Brasil",
      description: [
        "Projeto de IA soberana brasileira focado em LLMs, engenharia de dados e infraestrutura de inferência",
        "Projetei e implementei pipelines de agentes de IA para curadoria e geração de dados em larga escala, com observabilidade e contingência para continuidade do sistema",
        "Servi modelos de linguagem via vLLM com quantização de KV cache em produção, ampliando capacidade e concorrência",
        "Desenvolvi plataforma de segurança de modelos de linguagem (red-teaming defensivo), incluindo documentação técnica e dashboard de resultados",
        "Criei leaderboard público para modelos em português brasileiro, com autenticação institucional e infraestrutura em nuvem",
        "Construí sistemas de ingestão multimodal (texto, áudio, imagem) e pipelines de coleta e processamento de dados distribuídos"
      ],
      technologies: ["Python", "vLLM", "LangGraph", "Langfuse", "FastAPI", "ClickHouse", "AWS", "Docker"]
    },
    {
      id: 1,
      company: "AWTech",
      title: "Engenheiro de Software / Consultor PJ",
      period: "Setembro 2024 - Presente",
      location: "Híbrido - Piauí, Brasil",
      description: [
        "Consultor PJ em projetos de P&D em IA e processamento de dados, com foco em análise documental e reconstrução tridimensional",
        "Projetei soluções de análise documental com LLMs, RAG e LangChain para textos médicos, jurídicos e técnicos",
        "Desenvolvi backends com Python, FastAPI e PostgreSQL, padronizados com Docker e Docker Compose para deploy",
        "Desenvolvi frontend em Angular com TypeScript e Tailwind CSS, integrado às APIs do backend",
        "Desenvolvi pipelines de persistência de dados LiDAR com FastAPI, SQLAlchemy, Alembic e PostgreSQL",
        "Modelei visualizações interativas com Next.js, Flutter e Swift, utilizando Three.js para nuvens de pontos"
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "LLMs", "RAG", "LangChain", "Three.js", "Flutter"]
    },
    {
      id: 2,
      company: "Alva",
      title: "Engenheiro de Software Full Stack & Dados",
      period: "Fevereiro 2024 - Abril 2025",
      location: "Remoto - São Paulo, Brasil",
      description: [
        "Atuei de ponta a ponta no desenvolvimento Full Stack, da modelagem do banco de dados à entrega de frontend e backend",
        "Construí aplicações com Django, JavaScript e Bootstrap, conduzindo migração para Next.js, Tailwind CSS e Node.js com CI/CD",
        "Desenvolvi pipeline mensal de reconciliação fiscal cruzando XMLs de NFe contra registros SPED com distância de Levenshtein",
        "Modelei análises de dados com Python, Pandas, NumPy e Scikit-learn, transformando dados brutos em decisões de negócio",
        "Apliquei IA Generativa para acelerar a geração de insights e análises a partir de grandes volumes de dados"
      ],
      technologies: ["Django", "Python", "Next.js", "Pandas", "NumPy", "Scikit-learn", "Tailwind CSS"]
    },
    {
      id: 3,
      company: "Novos Negócios TIC",
      title: "Mobile Developer",
      period: "Julho 2023 - Dezembro 2023",
      location: "Remoto",
      description: [
        "Desenvolvi do zero aplicativo iOS (Amidote) de adoção de animais com Swift, SwiftUI e SwiftKit",
        "Integrei o app a banco de dados NoSQL (Firebase) e otimizei performance para reduzir tempo de carregamento",
        "Projetei interfaces intuitivas, responsivas e funcionais para o público-alvo do app"
      ],
      technologies: ["Swift", "SwiftUI", "Firebase", "SwiftKit", "iOS"]
    },
    {
      id: 4,
      company: "Comunicare Solutions",
      title: "Desenvolvedor Python Back-end (ASR / IA)",
      period: "Janeiro 2022 - Fevereiro 2024",
      location: "Piauí, Brasil",
      description: [
        "Projetei APIs de ASR integrando Whisper e Wav2Vec para Speech-to-Text com foco em precisão e baixa latência",
        "Implementei NVIDIA Triton Inference Server para inferência escalável com dynamic batching",
        "Implementei observabilidade com Prometheus e Grafana, monitorando latência e recursos em produção",
        "Conduzi P&D em Knowledge Distillation para redução de complexidade computacional dos modelos",
        "Gerenciei infraestrutura em AWS e GCP, com CI/CD e testes com Pytest e k6"
      ],
      technologies: ["FastAPI", "Python", "Whisper", "NVIDIA Triton", "AWS", "GCP", "Docker", "Pytest"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.08, ease: "easeOut" as const }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" as const }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    },
    exit: {
      opacity: 0,
      x: 15,
      transition: { duration: 0.25, ease: "easeIn" as const }
    }
  };

  return (
    <motion.section
      id="experience"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f1a14 0%, #14281c 60%, #0f1a14 100%)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* BG accent */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7cb9e8, transparent)" }}
      />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-sm" style={{ color: "#6bad78" }}>02.</span>
          <h2 className="text-2xl font-bold" style={{ color: "#e8ede4" }}>Onde trabalhei</h2>
          <div
            className="flex-1 h-px"
            style={{ background: "linear-gradient(to right, #3d6b4f, transparent)" }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Job Tabs */}
          <motion.div
            className="lg:w-1/4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 gap-0">
              {jobs.map((job, index) => (
                <motion.button
                  key={job.id}
                  onClick={() => setActiveJob(index)}
                  className="relative text-left p-4 font-mono text-sm whitespace-nowrap lg:whitespace-normal border-b-2 lg:border-b-0 lg:border-l-2 transition-colors duration-300"
                  style={{
                    borderColor: activeJob === index ? "#6bad78" : "rgba(61,107,79,0.25)",
                    color: activeJob === index ? "#6bad78" : "rgba(232,237,228,0.5)",
                    background: activeJob === index ? "rgba(61,107,79,0.08)" : "transparent",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  whileHover={{
                    color: "#e8ede4",
                    backgroundColor: "rgba(61,107,79,0.06)",
                    x: activeJob !== index ? 4 : 0,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeJob === index && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-0.5 hidden lg:block"
                      style={{ background: "#6bad78" }}
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 350, damping: 35 }}
                    />
                  )}
                  {job.company}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Job Content */}
          <motion.div
            className="lg:w-3/4"
            initial={{ opacity: 0, x: 40 }}
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
                {/* Job header */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold" style={{ color: "#e8ede4" }}>
                    {jobs[activeJob].title}{" "}
                    <motion.span
                      style={{ color: "#6bad78" }}
                      animate={{ color: ["#6bad78", "#7cb9e8", "#6bad78"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      @ {jobs[activeJob].company}
                    </motion.span>
                  </h3>
                  <p className="text-sm font-mono mt-1" style={{ color: "rgba(232,237,228,0.45)" }}>
                    {jobs[activeJob].period}
                  </p>
                  <p className="text-sm mt-1" style={{ color: "rgba(168,200,232,0.5)" }}>
                    {jobs[activeJob].location}
                  </p>
                </motion.div>

                {/* Description */}
                <motion.ul className="space-y-3" variants={containerVariants}>
                  {jobs[activeJob].description.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start group"
                      variants={itemVariants}
                      whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    >
                      <motion.span
                        className="mr-3 mt-1.5 text-xs flex-shrink-0"
                        style={{ color: "#6bad78" }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 3.5, repeat: Infinity, delay: index * 0.3 }}
                      >
                        ▸
                      </motion.span>
                      <span
                        className="leading-relaxed text-sm group-hover:transition-colors duration-200"
                        style={{ color: "rgba(232,237,228,0.65)" }}
                      >
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Technologies */}
                <motion.div className="flex flex-wrap gap-2 pt-2" variants={containerVariants}>
                  {jobs[activeJob].technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-mono cursor-pointer"
                      style={{
                        background: "rgba(61,107,79,0.12)",
                        border: "1px solid rgba(107,173,120,0.25)",
                        color: "#6bad78",
                      }}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: "rgba(61,107,79,0.22)",
                        borderColor: "rgba(107,173,120,0.6)",
                        y: -2,
                        boxShadow: "0 4px 12px rgba(107,173,120,0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
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
