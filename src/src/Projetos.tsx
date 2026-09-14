import React from "react";
import { motion } from "framer-motion";

const Projects = [
  {
    id: 0,
    title: "QG do Investidor · B3 Screener",
    description: "Plataforma de inteligência de mercado e screener quantitativo para ativos da B3 (Ibovespa). Cruza geração de valor ao acionista com indicadores auditáveis de valuation e governança para apoiar decisões de investimento fundamentadas em dados.",
    image: "/qgdoinvestidor.png",
    technologies: ["Angular", "TypeScript", "Python", "FastAPI", "B3 API", "Tailwind CSS"],
    github: "",
    live: "https://qgdoinvestidor.com/",
    featured: true
  },
  {
    id: 1,
    title: "Oxe Bnk — Fintech & Banco Digital",
    description: "Banco digital e fintech moderna desenvolvida para simplificar a vida financeira com atendimento humanizado e soluções digitais sob medida. Plataforma com conta digital, transações PIX, cartões e controle de gastos em tempo real.",
    image: "/oxebnk.png",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "APIs Financeiras"],
    github: "",
    live: "https://oxebnk.com/",
    featured: true
  },
  {
    id: 2,
    title: "Progressive — Gestão de Projetos Kanban",
    description: "Sistema de gestão de projetos baseado no modelo Kanban, focando em usabilidade e acessibilidade. Desenvolvido para melhorar o aproveitamento de tempo dos colaboradores e fornecer um panorama visual de progresso dos projetos.",
    image: "/image copy 2.png",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Firebase"],
    github: "https://github.com/MathLevi20/Progressive",
    live: "https://progressive-41851d.netlify.app/",
    featured: true
  },
  {
    id: 3,
    title: "Hello Service",
    description: "Plataforma intermediária para contato entre profissionais da área de atendimento ao cliente e culinária. Homepage responsiva desenvolvida com foco na experiência do usuário.",
    image: "https://firebasestorage.googleapis.com/v0/b/portifolio-2ebbb.appspot.com/o/Portifolio%2FReact_P1.png?alt=media&token=ce1d2bdf-a95d-4c59-af4b-da1c36d24684",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Netlify"],
    github: "https://github.com/MathLevi20/Hello-Service-WebPage",
    live: "https://hello-service-app.netlify.app",
    featured: false
  },
  {
    id: 4,
    title: "Equitas — Análise Financeira",
    description: "Plataforma de automação com web scraping e análise financeira, aplicando scripts e métodos acadêmicos desenvolvidos pela Universidade Federal do Piauí (UFPI) para métricas de mercado e cálculos específicos.",
    image: "/image.png",
    technologies: ["Python", "Web Scraping", "FastAPI", "Data Analysis", "Pandas"],
    github: "https://github.com/MathLevi20",
    live: "https://github.com/MathLevi20",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio v1",
    description: "Primeira versão do meu portfólio pessoal, desenvolvido com React e hospedado na Netlify. Apresenta projetos e habilidades de forma interativa.",
    image: "/image.png",
    technologies: ["React", "Tailwind CSS", "Next.js", "Netlify"],
    github: "https://github.com/MathLevi20/Portfolio",
    live: "https://matheus-levi.netlify.app",
    featured: false
  }
];

function Projetos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <motion.section
      id="projects"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #14281c 0%, #0f1a14 50%, #14281c 100%)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* BG accent */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #6bad78, transparent)" }}
      />

      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-sm" style={{ color: "#6bad78" }}>03.</span>
          <h2 className="text-2xl font-bold" style={{ color: "#e8ede4" }}>Projetos que construí</h2>
          <div
            className="flex-1 h-px"
            style={{ background: "linear-gradient(to right, #3d6b4f, transparent)" }}
          />
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group"
              variants={itemVariants}
            >
              <div className={`grid lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
              }`}>
                {/* Project Image */}
                <motion.div
                  className={`lg:col-span-7 ${index % 2 === 0 ? "" : "lg:col-start-6"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="rounded-xl overflow-hidden shadow-2xl border border-forest-green/30"
                        style={{ background: "rgba(20,40,28,0.6)" }}
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto max-h-[360px] object-cover object-top transition-all duration-500"
                          style={{ filter: "brightness(0.92) contrast(1.05)" }}
                          whileHover={{ filter: "brightness(1) contrast(1.05)", scale: 1.03 }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Project Content */}
                <motion.div
                  className={`lg:col-span-5 ${
                    index % 2 === 0 ? "" : "lg:col-start-1 lg:row-start-1"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className={index % 2 === 0 ? "lg:text-right" : "lg:text-left"}>
                    <p
                      className="font-mono text-xs mb-2 tracking-widest uppercase"
                      style={{ color: "#6bad78" }}
                    >
                      Projeto em Destaque
                    </p>
                    <h3 className="text-2xl font-semibold mb-4" style={{ color: "#e8ede4" }}>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ color: "#6bad78" }}
                        style={{ color: "#e8ede4" }}
                      >
                        {project.title}
                      </motion.a>
                    </h3>

                    <motion.div
                      className="p-5 rounded-xl mb-5 shadow-xl"
                      style={{
                        background: "rgba(20,40,28,0.85)",
                        border: "1px solid rgba(61,107,79,0.25)",
                        backdropFilter: "blur(8px)",
                      }}
                      whileHover={{
                        borderColor: "rgba(107,173,120,0.4)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                      }}
                    >
                      <p className="leading-relaxed text-sm" style={{ color: "rgba(232,237,228,0.8)" }}>
                        {project.description}
                      </p>
                    </motion.div>

                    <div className={`flex flex-wrap gap-2 mb-5 ${
                      index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                    }`}>
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="text-xs font-mono px-2 py-0.5 rounded"
                          style={{
                            color: "#a8c8e8",
                            background: "rgba(61,107,79,0.15)",
                            border: "1px solid rgba(124,185,232,0.2)"
                          }}
                          whileHover={{ color: "#7cb9e8", scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className={`flex gap-4 ${
                      index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                    }`}>
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          style={{ color: "rgba(232,237,228,0.6)" }}
                          whileHover={{ scale: 1.2, color: "#6bad78", rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          style={{ color: "rgba(232,237,228,0.6)" }}
                          whileHover={{ scale: 1.2, color: "#7cb9e8", rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Notable Projects */}
        <div className="mt-24">
          <motion.h3
            className="text-lg font-semibold mb-8 text-center font-mono"
            style={{ color: "rgba(232,237,228,0.7)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span style={{ color: "#6bad78" }}>▸</span> Outros projetos notáveis
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {Projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                className="p-6 rounded-xl cursor-pointer"
                style={{
                  background: "rgba(20,40,28,0.6)",
                  border: "1px solid rgba(61,107,79,0.2)",
                  backdropFilter: "blur(8px)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  y: -6,
                  borderColor: "rgba(107,173,120,0.35)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-start mb-5">
                  <motion.div
                    style={{ color: "#6bad78" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m7 10 5 5 5-5" />
                    </svg>
                  </motion.div>
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        style={{ color: "rgba(232,237,228,0.45)" }}
                        whileHover={{ scale: 1.2, color: "#6bad78", rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        style={{ color: "rgba(232,237,228,0.45)" }}
                        whileHover={{ scale: 1.2, color: "#7cb9e8", rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>

                <h4 className="text-base font-semibold mb-2" style={{ color: "#e8ede4" }}>
                  {project.title}
                </h4>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(232,237,228,0.6)" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIdx) => (
                    <motion.span
                      key={tIdx}
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{
                        color: "rgba(168,200,232,0.7)",
                        background: "rgba(61,107,79,0.12)"
                      }}
                      whileHover={{ color: "#a8c8e8", scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projetos;
