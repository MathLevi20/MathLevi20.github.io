import React, { useState } from "react";
import { motion } from "framer-motion";

function About() {
    const [isImageHovered, setIsImageHovered] = useState(false);

    return (
        <motion.section
            id="about"
            className="bg-slate-900 text-slate-400 py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-2xl font-bold text-slate-200 mb-8 flex items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.span
                                className="text-teal-400 font-mono text-lg mr-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: "0 0 10px rgba(20, 184, 166, 0.8)"
                                }}
                            >
                                01.
                            </motion.span>
                            <motion.span
                                whileHover={{
                                    color: "#14b8a6",
                                    textShadow: "0 0 10px rgba(20, 184, 166, 0.5)"
                                }}
                            >
                                Sobre
                            </motion.span>
                        </motion.h2>

                        <motion.div
                            className="space-y-4 text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, staggerChildren: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: "rgba(20, 184, 166, 0.05)",
                                    padding: "8px",
                                    borderRadius: "8px"
                                }}
                            >
                                Sou um desenvolvedor apaixonado pela tecnologia com mais de 3 anos de experiência
                                em desenvolvimento Full Stack. Minha especialidade está em Python, Inteligência
                                Artificial e desenvolvimento web moderno.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: "rgba(20, 184, 166, 0.05)",
                                    padding: "8px",
                                    borderRadius: "8px"
                                }}
                            >
                                Atualmente atuo como Consultor em Desenvolvimento na AWTech, focando em projetos
                                de Inteligência Artificial e Processamento de Dados. Tenho experiência sólida
                                em análise médica com LLMs e RAG, além de modelagem 3D com dados LiDAR.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: "rgba(20, 184, 166, 0.05)",
                                    padding: "8px",
                                    borderRadius: "8px"
                                }}
                            >
                                Meu objetivo é sempre buscar soluções inovadoras que combinem eficiência
                                técnica com experiência do usuário excepcional.
                            </motion.p>
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.h3
                                className="text-xl font-semibold text-slate-200 mb-4"
                                whileHover={{
                                    color: "#14b8a6",
                                    scale: 1.02
                                }}
                            >
                                Principais Tecnologias
                            </motion.h3>

                            <motion.div
                                className="grid grid-cols-2 gap-2 text-sm"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.9, staggerChildren: 0.1 }}
                                viewport={{ once: true }}
                            >
                                {[
                                    "Python (3+ anos)",
                                    "JavaScript & TypeScript",
                                    "React & Next.js",
                                    "Flask & Django",
                                    "Machine Learning",
                                    "Docker & GCP/AWS"
                                ].map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center group cursor-pointer"
                                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            scale: 1.05,
                                            x: 10,
                                            backgroundColor: "rgba(20, 184, 166, 0.1)",
                                            borderRadius: "4px",
                                            padding: "4px 8px"
                                        }}
                                    >
                                        <motion.span
                                            className="text-teal-400 mr-2"
                                            whileHover={{
                                                scale: 1.3,
                                                rotate: 90,
                                                color: "#ffffff"
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            ▸
                                        </motion.span>
                                        <motion.span
                                            whileHover={{ color: "#14b8a6" }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative z-10 max-w-sm mx-auto lg:mx-0">
                            {/* Background frame that animates */}
                            <motion.div
                                className="aspect-square bg-teal-400 rounded-md"
                                initial={{ rotate: 3 }}
                                animate={{
                                    rotate: isImageHovered ? 6 : 3,
                                    scale: isImageHovered ? 1.02 : 1,
                                    boxShadow: isImageHovered
                                        ? "0 20px 40px rgba(20, 184, 166, 0.3)"
                                        : "0 10px 20px rgba(20, 184, 166, 0.1)"
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />

                            {/* Main image container */}
                            <motion.div
                                className="absolute inset-0 bg-slate-800 rounded-md cursor-pointer overflow-hidden"
                                initial={{ rotate: -3 }}
                                animate={{
                                    rotate: isImageHovered ? 0 : -3,
                                    scale: isImageHovered ? 1.02 : 1,
                                    boxShadow: isImageHovered
                                        ? "0 25px 50px rgba(0, 0, 0, 0.3)"
                                        : "0 15px 30px rgba(0, 0, 0, 0.2)"
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                onMouseEnter={() => setIsImageHovered(true)}
                                onMouseLeave={() => setIsImageHovered(false)}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.img
                                    src="/MyImage.jpeg"
                                    alt="Matheus Levi"
                                    className="w-full h-full object-cover object-center rounded-md"
                                    style={{ objectPosition: 'center 60% ', transform: 'scale(0.9)' }}
                                    animate={{
                                        scale: isImageHovered ? 0.92 : 0.9,
                                        filter: isImageHovered
                                            ? "grayscale(50%) contrast(1.1) brightness(1.1)"
                                            : "grayscale(100%) contrast(1) brightness(1)"
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />

                                {/* Overlay effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-tr from-teal-400/20 to-transparent"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isImageHovered ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Border animation */}
                                <motion.div
                                    className="absolute inset-0 border-2 border-teal-400 rounded-md opacity-0"
                                    animate={{
                                        opacity: isImageHovered ? 1 : 0,
                                        borderWidth: isImageHovered ? "3px" : "2px"
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                            className="absolute top-4 right-4 w-16 h-16 border border-teal-400 rounded-full opacity-20"
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />

                        <motion.div
                            className="absolute bottom-4 left-4 w-8 h-8 bg-teal-400 rounded-full opacity-30"
                            animate={{
                                y: [0, -10, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
export default About;