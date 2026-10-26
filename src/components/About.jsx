"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/assets/mex.png";
import { FaDownload, FaArrowRight } from "react-icons/fa";

const stats = [
  { value: "1+", label: "Years", desc: "Experience" },
  { value: "10+", label: "Projects", desc: "Completed" },
  { value: "24/7", label: "Support", desc: "Available" },
];

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Md_Rahim_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="about"
      className="relative py-16 md:py-20 lg:py-24 bg-white dark:bg-background overflow-hidden"
    >
      {/* MAIN CONTAINER — same width as navbar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-[#42F29E] font-medium tracking-widest uppercase text-xs sm:text-sm mb-2">
            Who I Am
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-text-primary">
            About <span className="text-[#42F29E]">Me</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-[#42F29E] rounded-full" />
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-80 sm:h-96 lg:h-[26rem] rounded-3xl overflow-hidden border-2 border-[#42F29E]">
              <Image
                src={image}
                alt="Profile"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                className="w-full h-full object-cover"
              />

              {/* Badge overlay */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-white/90 dark:bg-brand-card/80 backdrop-blur-md border border-gray-200 dark:border-brand-card-border rounded-xl px-3 sm:px-4 py-2 sm:py-3">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-text-secondary text-center">
                    <span className="text-gray-900 dark:text-[#42F29E] font-semibold">
                      Passionate
                    </span>{" "}
                    about building digital experiences
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="p-3 sm:p-5 rounded-2xl bg-gray-50 dark:bg-brand-card/50 border border-gray-200 dark:border-brand-card-border text-center"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#42F29E]">
                    {item.value}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-text-muted mt-1 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <div className="mt-2 mx-auto w-8 h-0.5 bg-[#42F29E]/50 rounded-full" />
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-text-secondary mt-2 font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-3 md:space-y-4 text-center lg:text-left">
              <p className="text-gray-600 dark:text-text-secondary leading-relaxed text-base sm:text-lg">
                I&apos;m a passionate{" "}
                <span className="text-[#42F29E] font-semibold">
                  MERN Stack Developer
                </span>{" "}
                and CST student. I love building modern, responsive, and
                user-friendly web applications.
              </p>
              <p className="text-gray-600 dark:text-text-secondary leading-relaxed text-sm sm:text-base">
                My goal is to turn ideas into real-world digital products using
                clean, scalable code and cutting-edge technologies. Every
                project is an opportunity to create something impactful.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#42F29E] text-gray-900 rounded-xl font-semibold text-sm sm:text-base transition-colors duration-300 hover:bg-[#2fe08c]"
              >
                <FaDownload />
                Download Resume
              </button>

              <a
                href="#contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-brand-card-border rounded-xl font-semibold text-sm sm:text-base text-gray-700 dark:text-text-secondary hover:text-gray-900 dark:hover:text-[#42F29E] hover:border-[#42F29E] transition-colors duration-300"
              >
                Contact Me
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;