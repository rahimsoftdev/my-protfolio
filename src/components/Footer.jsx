"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = ["Home", "About", "Skills", "Projects", "Qualifications", "Contact"];

  return (
    <footer className="relative overflow-hidden border-t border-brand-card-border bg-gradient-to-b from-brand-dark to-brand-dark">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/3 via-violet-500/3 to-transparent blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-t from-violet-500/5 to-transparent blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl font-black mb-4">
              Md{" "}
              <span className="bg-gradient-to-r from-violet-400 to-violet-500 bg-clip-text text-transparent">
                Rahim
              </span>
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              Full Stack Developer crafting modern, scalable web experiences
              with Next.js, React, Node.js and MongoDB.
            </p>
            <div className="mt-6 flex gap-4">
              {[
                { icon: <FaGithub />, href: "https://github.com/Abdur-Rahim-bin-Bakkar" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/fswd-abdur-rahim-bin-bakkar/" },
                { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61582681106407" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="p-3 rounded-xl bg-brand-card/50 border border-brand-card-border text-text-secondary hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-bold mb-5 text-text-primary">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-text-secondary transition-all duration-300 hover:text-violet-400 hover:translate-x-1"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-bold mb-5 text-text-primary">Services</h3>
            <div className="space-y-3 text-sm text-text-secondary">
              {[
                "Full Stack Development",
                "Frontend Development",
                "Backend API",
                "MongoDB Database",
                "Authentication",
                "Responsive Design",
              ].map((service, i) => (
                <p key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-violet-500/50" />
                  {service}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-bold mb-5 text-text-primary">Contact</h3>
            <div className="space-y-4 text-sm text-text-secondary">
              <p>+880 1873-135444</p>
              <p>webdesignrahim4061@gmail.com</p>
              <p>Dhaka, Bangladesh</p>
            </div>
            <a
              href="#contact"
              className="inline-block mt-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25"
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {currentYear} Md Rahim. All rights reserved.
          </p>

          <p className="text-sm text-text-muted flex items-center gap-1">
            Built with <FaHeart className="text-violet-500 text-xs" /> using Next.js
          </p>

          <button
            onClick={scrollTop}
            className="group p-3 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg transition-all duration-300 hover:shadow-violet-500/25 hover:scale-110"
          >
            <FaArrowUp className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
