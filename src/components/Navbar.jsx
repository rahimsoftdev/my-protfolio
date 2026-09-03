"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Qualifications", href: "#qualifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brand-dark/80 backdrop-blur-xl border-b border-brand-card-border shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* LOGO */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-violet-500 rounded-full blur-sm opacity-60" />
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img
              src="/me.png"
              alt="logo"
              className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-violet-500/30 object-cover"
            />
          </div>
          <span className="hidden sm:block font-bold text-lg text-text-primary">
            Md <span className="text-violet-500">Rahim</span>
          </span>
        </motion.a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-violet-400 bg-violet-500/10"
                  : "text-gray-400 hover:text-text-primary hover:bg-brand-card/50"
              }`}
            >
              {link.name}
              {activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-violet-500 to-violet-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}

          {/* THEME TOGGLE */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4 p-2.5 rounded-xl bg-brand-card/50 border border-brand-card-border hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-300 text-gray-400 hover:text-violet-400"
          >
            {theme === "dark" ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
          </button>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-xl bg-brand-card/50 border border-brand-card-border text-gray-400 hover:text-violet-400 transition-all"
          >
            {theme === "dark" ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-xl bg-brand-card/50 border border-brand-card-border text-gray-400 hover:text-violet-400 transition-all"
          >
            {isMenuOpen ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-brand-card-border bg-brand-dark/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.href.replace("#", "")
                      ? "text-violet-400 bg-violet-500/10"
                      : "text-gray-400 hover:text-text-primary hover:bg-brand-card/50"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
