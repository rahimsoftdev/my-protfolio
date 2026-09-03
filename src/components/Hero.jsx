"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import image from '@/assets/me.png'
import Image from 'next/image';
import HeroTyping from './HeroTyping';
import { FaFacebook, FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  const technologies = [
    'HTML', 'CSS', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS',
    'Node.js', 'Express', 'MongoDB', 'Bootstrap', 'DaisyUI', 'HeroUI', 'Better Auth',
    'ES6', 'DOM', 'Prisma', 'PostgreSQL'
  ];

  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255,87,34,0.06), transparent 40%)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Spotlight overlay */}
      <div ref={spotlightRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-violet-500/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-violet-600/5 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center px-4 sm:px-6 lg:px-8 pt-24">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 text-sm text-violet-400">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              Available for projects
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            <span className="text-text-primary">Hi, I&apos;m </span>
            <br />
            <span className="gradient-text">Md Rahim</span>

          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <HeroTyping />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-text-secondary leading-relaxed max-w-lg"
          >
            Crafting modern web experiences with clean code and creative design.
            Turning complex problems into simple, beautiful solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 pt-4 items-center"
          >
            <Link
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl font-semibold shadow-lg overflow-hidden transition-all duration-300 hover:shadow-violet-500/25 hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="#contact"
              className="group px-8 py-4 border border-brand-card-border rounded-xl font-semibold text-text-secondary hover:text-violet-400 hover:border-violet-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              Get In Touch
            </Link>

            <div className="flex gap-4 pl-2">
              {[
                { icon: <FaGithub />, href: "https://github.com/Abdur-Rahim-bin-Bakkar" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/fswd-abdur-rahim-bin-bakkar/" },
                { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61582681106407" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="text-2xl text-text-secondary transition-all duration-300 hover:-translate-y-2 hover:text-violet-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex justify-center relative"
        >
          <div className="relative group">
            {/* Soft glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500/10 to-fuchsia-500/5 rounded-full blur-2xl animate-pulse" />

            {/* Rotating rings */}
            <div className="absolute inset-0 border border-violet-500/20 rounded-full scale-105 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-0 border border-dashed border-violet-500/10 rounded-full scale-115 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-1 ring-white/10 transition-all duration-700 group-hover:scale-[1.02]">
              <Image
                src={image}
                alt="Md Rahim Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-2 right-0 bg-brand-dark/80 border border-brand-card-border backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium text-violet-400 shadow-lg">
              Open to Work
            </div>
          </div>
        </motion.div>

      </div>

      {/* Technology Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative mt-16 py-8 border-y border-brand-card-border overflow-hidden"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-marquee group">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center mx-8 md:mx-12 group-hover:[animation-play-state:paused]">
              <span className="text-base md:text-xl font-semibold tracking-[0.15em] uppercase text-text-secondary hover:text-violet-400 transition-colors duration-300">
                {tech}
              </span>
              <span className="mx-5 w-1 h-1 bg-violet-500/30 rounded-full" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
