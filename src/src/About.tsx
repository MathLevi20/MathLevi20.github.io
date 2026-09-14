import React, { useState } from "react";
import { motion } from "framer-motion";

function About() {
    const [isImageHovered, setIsImageHovered] = useState(false);

    // Color palette from the photo
    const colors = {
        bg: "#0f1a14",
        bgMid: "#14281c",
        forest: "#3d6b4f",
        leaf: "#6bad78",
        sky: "#7cb9e8",
        skyLight: "#a8c8e8",
        white: "#e8ede4",
        whiteAlpha: "rgba(232,237,228,0.7)",
    };

    return (
        <motion.section
            id="about"
            className="py-24 relative overflow-hidden"
            style={{ background: `linear-gradient(180deg, ${colors.bg} 0%, ${colors.bgMid} 50%, ${colors.bg} 100%)` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 w-px h-full opacity-5"
                    style={{ background: `linear-gradient(to bottom, transparent, ${colors.leaf}, transparent)` }}
                />
            </div>

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Section Header */}
                        <motion.div
                            className="flex items-center gap-4 mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <span className="font-mono text-sm" style={{ color: colors.leaf }}>01.</span>
                            <h2 className="text-2xl font-bold" style={{ color: colors.white }}>
                                Sobre
                            </h2>
                            <div
                                className="flex-1 h-px"
                                style={{ background: `linear-gradient(to right, ${colors.forest}, transparent)` }}
                            />
                        </motion.div>

                        <motion.div
                            className="space-y-5 text-base leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {[
                                "Sou Engenheiro de Machine Learning com ampla experiência em desenvolvimento de software e sólida atuação em Inteligência Artificial Generativa, LLMs e Engenharia de Dados em escala.",
                                "Atuo no projeto SoberanIA com foco em IA soberana brasileira, pipelines de agentes autônomos (LangGraph), curadoria sintética de dados em larga escala, serving de modelos com vLLM e segurança de infraestrutura. Também atuo como consultor PJ em P&D na AWTech.",
                                "Meu foco é construir infraestrutura robusta de ML, sistemas de alta disponibilidade e soluções inteligentes que combinam excelência técnica com impacto real."
                            ].map((text, i) => (
                                <motion.p
                                    key={i}
                                    style={{ color: colors.whiteAlpha }}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        color: colors.white,
                                        x: 4,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            className="mt-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.h3
                                className="text-base font-semibold mb-5 font-mono"
                                style={{ color: colors.leaf }}
                                whileHover={{ scale: 1.02 }}
                            >
                                ▸ Principais Tecnologias & Competências
                            </motion.h3>

                            <motion.div
                                className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.9 }}
                                viewport={{ once: true }}
                            >
                                {[
                                    "LLMs, RAG & vLLM",
                                    "LangGraph & Langfuse",
                                    "Python & FastAPI",
                                    "Inspect AI (Red-teaming)",
                                    "Docling & Whisper (ASR)",
                                    "PostgreSQL & ClickHouse",
                                    "React & Next.js",
                                    "Docker & AWS (EC2, S3)"
                                ].map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-2 group cursor-pointer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 1 + index * 0.08 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 8, transition: { duration: 0.2 } }}
                                    >
                                        <motion.span
                                            style={{ color: colors.leaf, fontSize: "10px" }}
                                            whileHover={{ scale: 1.3, rotate: 90 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            ▸
                                        </motion.span>
                                        <span
                                            style={{ color: "rgba(232,237,228,0.65)" }}
                                            className="group-hover:text-white transition-colors duration-200"
                                        >
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        className="relative flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {/* Glow behind image */}
                        <div
                            className="absolute w-64 h-64 rounded-full blur-3xl opacity-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{ background: `radial-gradient(circle, ${colors.leaf}, transparent)` }}
                        />

                        <div className="relative z-10 max-w-sm w-full">
                            {/* Background frame */}
                            <motion.div
                                className="aspect-square rounded-2xl"
                                style={{
                                    background: `linear-gradient(135deg, ${colors.forest}, ${colors.sky})`,
                                    opacity: 0.5,
                                }}
                                initial={{ rotate: 4 }}
                                animate={{
                                    rotate: isImageHovered ? 7 : 4,
                                    scale: isImageHovered ? 1.03 : 1,
                                    boxShadow: isImageHovered
                                        ? `0 25px 60px rgba(61,107,79,0.4)`
                                        : `0 15px 40px rgba(61,107,79,0.15)`,
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />

                            {/* Main image container */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl cursor-pointer overflow-hidden"
                                style={{ background: colors.bgMid }}
                                initial={{ rotate: -4 }}
                                animate={{
                                    rotate: isImageHovered ? 0 : -4,
                                    scale: isImageHovered ? 1.03 : 1,
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                onMouseEnter={() => setIsImageHovered(true)}
                                onMouseLeave={() => setIsImageHovered(false)}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            >
                                <motion.img
                                    src="/image.png"
                                    alt="Matheus Levi"
                                    className="w-full h-full object-cover rounded-2xl"
                                    style={{ objectPosition: "center 15%" }}
                                    animate={{
                                        scale: isImageHovered ? 1.05 : 1,
                                        filter: isImageHovered
                                            ? "brightness(1.1) saturate(1.15)"
                                            : "brightness(0.9) saturate(0.85)",
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />

                                {/* Forest-toned overlay */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl"
                                    style={{
                                        background: `linear-gradient(to top, rgba(15,26,20,0.6) 0%, rgba(61,107,79,0.15) 50%, transparent 100%)`
                                    }}
                                    animate={{ opacity: isImageHovered ? 0.4 : 1 }}
                                    transition={{ duration: 0.4 }}
                                />

                                {/* Border glow */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl"
                                    style={{ border: "2px solid transparent" }}
                                    animate={{
                                        borderColor: isImageHovered
                                            ? `rgba(107,173,120,0.6)`
                                            : "transparent"
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>

                            {/* Corner decorations */}
                            <motion.div
                                className="absolute -top-3 -right-3 w-14 h-14 rounded-full border opacity-20"
                                style={{ borderColor: colors.sky }}
                                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                                transition={{
                                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-3 -left-3 w-8 h-8 rounded-full opacity-30"
                                style={{ background: colors.leaf }}
                                animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

export default About;