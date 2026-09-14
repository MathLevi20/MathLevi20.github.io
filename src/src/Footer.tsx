import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/MathLevi20",
      label: "GitHub",
      hoverColor: "#6bad78",
      path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    },
    {
      href: "https://www.linkedin.com/in/matheus-levi-621125150/",
      label: "LinkedIn",
      hoverColor: "#7cb9e8",
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    }
  ];

  return (
    <motion.footer
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f1a14 0%, #0a1209 100%)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(61,107,79,0.4), transparent)" }}
      />
      <div
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #6bad78, transparent)" }}
      />
      <div
        className="absolute top-20 right-20 w-48 h-48 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7cb9e8, transparent)" }}
      />

      <div className="container mx-auto px-6 text-center max-w-3xl">
        {/* Section header */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div
            className="h-px w-12"
            style={{ background: "linear-gradient(to right, transparent, #3d6b4f)" }}
          />
          <span className="font-mono text-sm" style={{ color: "#6bad78" }}>04.</span>
          <h2 className="text-2xl font-bold" style={{ color: "#e8ede4" }}>Entre em contato</h2>
          <span className="font-mono text-sm" style={{ color: "#6bad78" }}></span>
          <div
            className="h-px w-12"
            style={{ background: "linear-gradient(to left, transparent, #3d6b4f)" }}
          />
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-base leading-relaxed mb-8"
            style={{ color: "rgba(232,237,228,0.65)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Estou sempre aberto a novas oportunidades e colaborações interessantes.
            Se você tem um projeto em mente, uma oportunidade de trabalho ou apenas
            quer trocar uma ideia sobre tecnologia, ficarei feliz em conversar!
          </motion.p>

          <motion.a
            href="mailto:matheuslevi2012@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-mono text-base relative overflow-hidden"
            style={{
              border: "1.5px solid rgba(107,173,120,0.6)",
              color: "#6bad78",
              background: "transparent",
            }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              backgroundColor: "rgba(61,107,79,0.12)",
              borderColor: "rgba(107,173,120,1)",
              boxShadow: "0 8px 30px rgba(107,173,120,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, transparent, rgba(107,173,120,0.07), transparent)" }}
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="relative z-10">Vamos conversar!</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-8 mb-14"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              style={{ color: "rgba(232,237,228,0.4)" }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.2,
                color: link.hoverColor,
                rotate: index % 2 === 0 ? 5 : -5,
                filter: `drop-shadow(0 0 8px ${link.hoverColor}60)`,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d={link.path} />
              </svg>
            </motion.a>
          ))}
          <motion.a
            href="https://matheus-levi.netlify.app"
            aria-label="Website"
            style={{ color: "rgba(232,237,228,0.4)" }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.2,
              color: "#a8c8e8",
              rotate: 5,
              filter: "drop-shadow(0 0 8px rgba(168,200,232,0.5))",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="pt-6"
          style={{ borderTop: "1px solid rgba(61,107,79,0.2)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono" style={{ color: "rgba(232,237,228,0.3)" }}>
            Desenvolvido por{" "}
            <span style={{ color: "#6bad78" }}>Matheus Levi</span>{" "}
            &copy; 2025
          </p>
          <p className="text-xs mt-2" style={{ color: "rgba(232,237,228,0.2)" }}>
            Inspirado no design de Brittany Chiang
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
