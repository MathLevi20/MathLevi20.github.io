import React from "react";
import { motion } from "framer-motion";

const Projects = [
  {
    id: 0,
    title: "Progressive",
    description: "Sistema de gestão de projetos baseado no modelo Kanban, focando em usabilidade e acessibilidade. Desenvolvido para melhorar o aproveitamento de tempo dos colaboradores e fornecer um panorama visual de progresso dos projetos.",
    image: "https://firebasestorage.googleapis.com/v0/b/portifolio-2ebbb.appspot.com/o/Portifolio%2FReact_P1_1.png?alt=media&token=2afe41fe-b1c6-493b-9653-b334a3253a54",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Firebase"],
    github: "https://github.com/MathLevi20/Progressive",
    live: "https://progressive-41851d.netlify.app/",
    featured: true
  },
  {
    id: 1,
    title: "Hello Service",
    description: "Plataforma que serve de intermediário para contato entre profissionais da área de atendimento ao cliente e culinária. Homepage responsiva desenvolvida com foco na experiência do usuário.",
    image: "https://firebasestorage.googleapis.com/v0/b/portifolio-2ebbb.appspot.com/o/Portifolio%2FReact_P1.png?alt=media&token=ce1d2bdf-a95d-4c59-af4b-da1c36d24684",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Netlify"],
    github: "https://github.com/MathLevi20/Hello-Service-WebPage",
    live: "https://hello-service-app.netlify.app",
    featured: true
  },
  {
    id: 2,
    title: "Portfolio v1",
    description: "Primeira versão do meu portfólio pessoal, desenvolvido com React e hospedado na Netlify. Apresenta projetos e habilidades de forma interativa.",
    image: "/MyImage.jpeg",
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
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <motion.section 
      id="projects" 
      className="bg-slate-900 text-slate-400 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-2xl font-bold text-slate-200 mb-12 flex items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-teal-400 font-mono text-lg mr-2">03.</span>
          Alguns projetos que construí
        </motion.h2>

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
                  className={`lg:col-span-7 ${
                    index % 2 === 0 ? "" : "lg:col-start-6"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
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
                      <div className="bg-teal-400/20 rounded-lg overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
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
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className={`${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}>
                    <motion.p 
                      className="text-teal-400 font-mono text-sm mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Projeto em Destaque
                    </motion.p>
                    <motion.h3 
                      className="text-2xl font-semibold text-slate-200 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {project.title}
                      </motion.a>
                    </motion.h3>
                    <motion.div 
                      className="bg-slate-800 p-6 rounded-lg shadow-lg mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgb(30, 41, 59)" }}
                    >
                      <p className="text-slate-300 leading-relaxed">
                        {project.description}
                      </p>
                    </motion.div>
                    <motion.div 
                      className={`flex flex-wrap gap-2 mb-6 ${
                        index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="text-sm font-mono text-slate-400"
                          whileHover={{ scale: 1.05, color: "#2dd4bf" }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                    <motion.div 
                      className={`flex gap-4 ${
                        index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                        aria-label="GitHub"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                        aria-label="Live Demo"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Notable Projects */}
        <div className="mt-24">
          <motion.h3 
            className="text-xl font-semibold text-slate-200 mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Outros projetos notáveis
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {Projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-slate-800 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  backgroundColor: "rgb(30, 41, 59)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <motion.div 
                    className="text-teal-400"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 10 5 5 5-5" />
                    </svg>
                  </motion.div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-slate-200 mb-2">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="text-xs font-mono text-slate-500"
                      whileHover={{ scale: 1.05, color: "#64748b" }}
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
