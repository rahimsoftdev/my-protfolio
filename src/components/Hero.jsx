"use client";
import React from "react";
import { motion } from "framer-motion";
import image from "@/assets/me.png";
import Image from "next/image";
import HeroTyping from "./HeroTyping";
import { FaFacebook, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const technologies = [
  "HTML", "CSS", "TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS",
  "Node.js", "Express", "MongoDB", "Bootstrap", "DaisyUI", "HeroUI", "Better Auth",
  "ES6", "DOM", "Prisma", "PostgreSQL",
];

const socials = [
  { icon: <FaGithub />, href: "https://github.com/rahimsoftdev", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rahimsoftdev/", label: "LinkedIn" },
  { icon: <FaFacebook />, href: "https://web.facebook.com/rahimsoftdev/", label: "Facebook" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden dark:bg-transparent"
    >
      {/* MAIN CONTAINER — same width as navbar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-10 md:pb-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 md:space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#42F29E]/40 bg-[#42F29E]/10 text-xs sm:text-sm font-medium text-gray-800 dark:text-[#42F29E]">
            <span className="w-2 h-2 rounded-full bg-[#42F29E]" />
            Available for projects
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-gray-900 dark:text-text-primary">
              Hi, I&apos;m{" "}
            </span>
            <br />
            <span className="text-[#42F29E]">Md Rahim</span>
          </h1>

          <div className="text-base sm:text-lg md:text-xl font-medium">
            <HeroTyping />
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-text-secondary leading-relaxed max-w-lg">
            Crafting modern web experiences with clean code and creative
            design. Turning complex problems into simple, beautiful solutions.
          </p>

          <div className="w-full flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
            <Link
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#42F29E] text-gray-900 rounded-xl font-semibold text-sm sm:text-base transition-colors duration-300 hover:bg-[#2fe08c]"
            >
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-brand-card-border rounded-xl font-semibold text-sm sm:text-base text-gray-700 dark:text-text-secondary hover:text-gray-900 dark:hover:text-[#42F29E] hover:border-[#42F29E] transition-colors duration-300"
            >
              Get In Touch
            </Link>

            <div className="flex gap-4 sm:pl-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-xl sm:text-2xl text-gray-600 dark:text-text-secondary transition-colors duration-300 hover:text-[#42F29E]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            {/* Fully rounded image with accent border */}
            <div className="rounded-full border-2 border-[#42F29E] p-1.5 sm:p-2 bg-white dark:bg-brand-dark">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden">
                <Image
                  src={image}
                  alt="Md Rahim Profile"
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, (max-width: 1280px) 288px, 320px"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white dark:bg-brand-dark border border-[#42F29E] rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-gray-800 dark:text-[#42F29E]">
              Open to Work
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technology Marquee */}
      <div className="relative mt-6 md:mt-10 py-5 md:py-6 border-y border-gray-200 dark:border-brand-card-border overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-white dark:from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-white dark:from-background to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-marquee group">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex items-center mx-4 sm:mx-6 md:mx-8 group-hover:[animation-play-state:paused]"
            >
              <span className="text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase text-gray-600 dark:text-text-secondary hover:text-[#42F29E] transition-colors duration-300">
                {tech}
              </span>
              <span className="ml-4 sm:ml-6 md:ml-8 w-1 h-1 bg-[#42F29E] rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;