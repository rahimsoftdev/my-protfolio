"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/assets/mex.png";
import { FaDownload, FaArrowRight } from "react-icons/fa";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Md_Rahim_Resume.pdf";
    link.click();
  };

  const stats = [
    {
      value: "1+",
      label: "Years",
      desc: "Experience",
      gradient: "from-violet-500 to-fuchsia-500",
    },
    {
      value: "10+",
      label: "Projects",
      desc: "Completed",
      gradient: "from-violet-500 to-violet-500",
    },
    {
      value: "24/7",
      label: "Support",
      desc: "Available",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-500/5 to-violet-500/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/5 to-violet-500/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-violet-500 font-medium tracking-widest uppercase text-sm mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-violet-500 to-violet-500 rounded-full" />
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Gradient border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-violet-500 to-violet-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Image */}
              <div className="relative w-72 md:w-80 lg:w-96 h-96 lg:h-[28rem] rounded-3xl overflow-hidden border border-brand-card-border shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 via-transparent to-transparent z-10" />
                <Image
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Experience badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-brand-card/80 backdrop-blur-xl border border-brand-card-border rounded-xl px-4 py-3">
                    <p className="text-sm text-text-secondary">
                      <span className="text-violet-400 font-bold">Passionate</span> about building digital experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-5 rounded-2xl bg-brand-card/50 border border-brand-card-border overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative z-10 text-center">
                    <h3 className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.value}
                    </h3>
                    <p className="text-xs text-text-muted mt-1 uppercase tracking-wider">{item.label}</p>
                    <div className="mt-2 mx-auto w-8 h-0.5 bg-gradient-to-r from-violet-500/30 to-violet-500/30 rounded-full" />
                    <p className="text-sm text-text-secondary mt-2 font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-text-secondary leading-relaxed text-lg">
                I&apos;m a passionate <span className="text-violet-400 font-semibold">MERN Stack Developer</span> and CST student.
                I love building modern, responsive, and user-friendly web applications.
              </p>
              <p className="text-text-secondary leading-relaxed">
                My goal is to turn ideas into real-world digital products using clean, scalable code
                and cutting-edge technologies. Every project is an opportunity to create something impactful.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={handleDownload}
                className="group relative px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl font-semibold shadow-lg overflow-hidden transition-all duration-300 hover:shadow-violet-500/25 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaDownload />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <a
                href="#contact"
                className="group px-8 py-4 border border-brand-card-border rounded-xl font-semibold text-text-secondary hover:text-violet-400 hover:border-violet-500/50 transition-all duration-300 flex items-center gap-2"
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
