"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
  FaHeart,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const quickLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Qualifications",
  "Contact",
];

const services = [
  "Full Stack Development",
  "Frontend Development",
  "Backend API",
  "MongoDB Database",
  "Authentication",
  "Responsive Design",
];

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/rahimsoftdev",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/rahimsoftdev/",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    href: "https://web.facebook.com/rahimsoftdev/",
  },
];

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    text: "+880 1873-135444",
    href: "tel:+8801873135444",
  },
  {
    icon: <FaEnvelope />,
    text: "webdesignrahim4061@gmail.com",
    href: "mailto:webdesignrahim4061@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    text: "Dhaka, Bangladesh",
  },
];

const headingClass =
  "mb-4 sm:mb-5 text-sm sm:text-base font-bold text-gray-900 dark:text-text-primary";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 dark:border-brand-card-border bg-gray-50 dark:bg-background">
      {/* Accent top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#42F29E] to-transparent" />

      {/* MAIN CONTAINER — same width as navbar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 lg:pt-16 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* ================= BRAND ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-text-primary">
              Md <span className="text-[#42F29E]">Rahim</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-text-secondary">
              Full Stack Developer crafting modern, scalable web experiences
              with Next.js, React, Node.js and MongoDB.
            </p>

            <div className="mt-5 sm:mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-gray-200 dark:border-brand-card-border bg-white dark:bg-brand-card/40 text-base sm:text-lg text-gray-700 dark:text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-[#42F29E] hover:bg-[#42F29E] hover:text-gray-900"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ================= QUICK LINKS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-text-secondary transition-colors duration-300 hover:text-gray-900 dark:hover:text-[#42F29E]"
                  >
                    <FaArrowRight className="text-[9px] text-[#42F29E] opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ================= SERVICES ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className={headingClass}>Services</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-text-secondary">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#42F29E]" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ================= CONTACT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className={headingClass}>Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              {contactInfo.map((item) => {
                const content = (
                  <>
                    <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-[#42F29E] text-xs sm:text-sm text-gray-900">
                      {item.icon}
                    </span>
                    <span className="min-w-0 break-words text-xs sm:text-sm text-gray-600 dark:text-text-secondary">
                      {item.text}
                    </span>
                  </>
                );

                return (
                  <li key={item.text}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-3 transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <a
              href="#contact"
              className="mt-5 sm:mt-6 inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[#42F29E] px-5 py-2.5 text-xs sm:text-sm font-semibold text-gray-900 transition-all hover:shadow-lg hover:shadow-[#42F29E]/30 hover:scale-[1.02]"
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-8 sm:my-10 h-px bg-gray-200 dark:bg-brand-card-border" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-text-muted">
            &copy; {currentYear} Md Rahim. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 dark:text-text-muted">
            Built with <FaHeart className="text-xs text-[#42F29E]" /> using
            Next.js
          </p>

          <button
            onClick={scrollTop}
            aria-label="Scroll to top"
            className="group flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[#42F29E] text-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-[#42F29E]/30 hover:scale-110"
          >
            <FaArrowUp className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;