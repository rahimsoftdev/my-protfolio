"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";
import { MdSubject } from "react-icons/md";

const EMAIL = "webdesignrahim4061@gmail.com";

const contactMethods = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    action: "Send Email",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "Md Rahim",
    href: "https://www.linkedin.com/in/rahimsoftdev/",
    action: "Connect",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    value: "+880 1873-135444",
    href: "https://wa.me/8801873135444",
    action: "Chat Now",
  },
];

const labelClass =
  "mb-1.5 block text-xs sm:text-sm font-semibold text-gray-700 dark:text-text-secondary";

const inputClass =
  "w-full rounded-xl border border-gray-200 dark:border-brand-card-border bg-white dark:bg-brand-card/50 py-3 sm:py-3.5 pl-11 pr-4 text-sm sm:text-base text-gray-900 dark:text-text-primary outline-none transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-text-muted focus:border-[#42F29E] focus:ring-4 focus:ring-[#42F29E]/15";

const iconClass =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 dark:text-text-muted transition-colors group-focus-within:text-[#42F29E]";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const formData = new FormData(form);
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      const response = await fetch(
        `https://formsubmit.co/ajax/${EMAIL}`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Request failed");

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      form.reset();
    } catch (err) {
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact me directly by email.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative pb-16 md:pb-20 lg:pb-24 dark:bg-background overflow-hidden"
    >
      {/* MAIN CONTAINER — same width as navbar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-[#42F29E] font-medium tracking-widest uppercase text-xs sm:text-sm mb-2">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-text-primary">
            Contact <span className="text-[#42F29E]">Me</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-[#42F29E] rounded-full" />
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 dark:text-text-secondary">
            Have an idea, project, or opportunity? Reach out through any
            platform or send me a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-5 lg:gap-10">
          {/* ================= LEFT — INFO ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-4 sm:gap-5"
          >
            {/* Intro card */}
            <div className="rounded-2xl border border-gray-200 dark:border-brand-card-border bg-gray-50 dark:bg-brand-card/40 p-5 sm:p-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#42F29E]/10 border border-[#42F29E]/30 px-3 py-1 text-[11px] sm:text-xs font-semibold text-gray-700 dark:text-[#42F29E]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#42F29E] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#42F29E]" />
                </span>
                Available for new projects
              </span>

              <h3 className="mt-4 text-xl sm:text-2xl font-bold text-gray-900 dark:text-text-primary">
                Let&apos;s <span className="text-[#42F29E]">Talk</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-text-secondary">
                Tell me about your idea or opportunity. I&apos;ll respond as
                soon as possible.
              </p>
            </div>

            {/* Contact method cards */}
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-brand-card-border bg-gray-50 dark:bg-brand-card/40 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#42F29E]/60 hover:shadow-lg hover:shadow-[#42F29E]/10"
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#42F29E] text-base sm:text-lg text-gray-900">
                  {method.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-text-primary">
                    {method.title}
                  </h4>
                  <p className="truncate text-xs sm:text-sm text-gray-600 dark:text-text-secondary">
                    {method.value}
                  </p>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-[#42F29E]">
                  {method.action}
                  <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
                </span>
                <FaArrowRight className="sm:hidden shrink-0 text-xs text-gray-500 dark:text-[#42F29E]" />
              </a>
            ))}
          </motion.div>

          {/* ================= RIGHT — FORM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 rounded-2xl border border-gray-200 dark:border-brand-card-border bg-gray-50 dark:bg-brand-card/40 p-5 sm:p-7 lg:p-9"
          >
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-text-primary">
                Send a Message
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-gray-600 dark:text-text-secondary">
                Fill out the form and I&apos;ll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Honeypot (spam protection) */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name
                  </label>
                  <div className="group relative">
                    <FaUser className={iconClass} />
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <div className="group relative">
                    <FaEnvelope className={iconClass} />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="example@gmail.com"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>
                  Subject
                </label>
                <div className="group relative">
                  <MdSubject className={`${iconClass} text-base`} />
                  <input
                    id="subject"
                    type="text"
                    name="_subject"
                    required
                    placeholder="New project inquiry"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-gray-200 dark:border-brand-card-border bg-white dark:bg-brand-card/50 px-4 py-3 sm:py-3.5 text-sm sm:text-base text-gray-900 dark:text-text-primary outline-none transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-text-muted focus:border-[#42F29E] focus:ring-4 focus:ring-[#42F29E]/15"
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#42F29E] py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-[#42F29E]/30 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
              >
                {loading ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        opacity=".25"
                      />
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className={`flex items-start gap-2.5 rounded-xl border p-3 sm:p-4 text-xs sm:text-sm ${
                    status.type === "success"
                      ? "border-[#42F29E]/40 bg-[#42F29E]/10 text-gray-800 dark:text-[#42F29E]"
                      : "border-red-500/30 bg-red-500/5 text-red-600 dark:text-red-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <FaCheckCircle className="mt-0.5 shrink-0" />
                  ) : (
                    <FaExclamationCircle className="mt-0.5 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;