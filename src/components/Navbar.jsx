"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaTimes, FaBars } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Qualifications", href: "#qualifications" },
  { name: "Contact", href: "#contact" },
];

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

    // Close the mobile/tablet menu when the screen grows to desktop size
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    handleScroll();

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500
        bg-white border-b border-gray-200
        ${isScrolled || isMenuOpen ? "shadow-md shadow-black/5" : "shadow-none"}
        ${
          isScrolled || isMenuOpen
            ? "dark:bg-brand-dark/80 dark:backdrop-blur-xl dark:border-brand-card-border dark:shadow-black/10"
            : "dark:bg-transparent dark:border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* LOGO */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 sm:gap-3 shrink-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#42F29E] rounded-full blur-sm opacity-60" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/me.png"
              alt="logo"
              className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#42F29E]/60 object-cover"
            />
          </div>
          <span className="block font-bold text-base sm:text-lg md:text-xl text-gray-900 dark:text-text-primary whitespace-nowrap">
            Md{" "}
            <span className="text-[#42F29E] drop-shadow-[0_0_8px_rgba(66,242,158,0.35)]">
              Rahim
            </span>
          </span>
        </motion.a>

        {/* DESKTOP MENU (lg and up) */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-1 p-1.5 rounded-full border border-gray-200 bg-gray-50 dark:border-brand-card-border dark:bg-brand-card/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 xl:px-5 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors duration-300 ${
                    isActive
                      ? "text-gray-900 dark:text-[#42F29E]"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-[#42F29E]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-[#42F29E] shadow-md shadow-[#42F29E]/40 dark:bg-[#42F29E]/15 dark:border dark:border-[#42F29E]/40 dark:shadow-[0_0_18px_rgba(66,242,158,0.25)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-4 p-2.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:border-[#42F29E] hover:bg-[#42F29E]/10 hover:text-gray-900 dark:bg-brand-card/50 dark:border-brand-card-border dark:text-gray-400 dark:hover:border-[#42F29E]/40 dark:hover:text-[#42F29E] transition-all duration-300"
          >
            {theme === "dark" ? (
              <FaSun className="w-4 h-4" />
            ) : (
              <FaMoon className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* MOBILE + TABLET BUTTONS (below lg) */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:border-[#42F29E] hover:bg-[#42F29E]/10 hover:text-gray-900 dark:bg-brand-card/50 dark:border-brand-card-border dark:text-gray-400 dark:hover:text-[#42F29E] transition-all"
          >
            {theme === "dark" ? (
              <FaSun className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <FaMoon className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="p-2.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:border-[#42F29E] hover:bg-[#42F29E]/10 hover:text-gray-900 dark:bg-brand-card/50 dark:border-brand-card-border dark:text-gray-400 dark:hover:text-[#42F29E] transition-all"
          >
            {isMenuOpen ? (
              <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <FaBars className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE + TABLET MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-y-auto max-h-[calc(100vh-4rem)] border-t border-gray-200 bg-white dark:border-brand-card-border dark:bg-brand-dark/95 dark:backdrop-blur-xl"
          >
            <div className="flex flex-col px-4 sm:px-6 py-4 gap-2 sm:grid sm:grid-cols-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex items-center justify-between px-4 py-3 rounded-xl text-sm sm:text-base font-semibold border transition-all ${
                      isActive
                        ? "bg-[#42F29E] text-gray-900 border-[#42F29E] shadow-md shadow-[#42F29E]/30 dark:bg-[#42F29E]/15 dark:text-[#42F29E] dark:border-[#42F29E]/40 dark:shadow-none"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#42F29E] hover:text-gray-900 dark:bg-brand-card/40 dark:text-gray-400 dark:border-brand-card-border dark:hover:text-[#42F29E] dark:hover:border-[#42F29E]/40"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`w-2 h-2 rounded-full transition-all ${
                        isActive
                          ? "bg-gray-900 dark:bg-[#42F29E]"
                          : "bg-transparent group-hover:bg-[#42F29E]"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;