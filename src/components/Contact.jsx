"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const formData = new FormData(e.target);

    const response = await fetch(
      "https://formsubmit.co/ajax/webdesignrahim4061@gmail.com",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      setSuccess("Message sent successfully!");
      e.target.reset();
    } else {
      setSuccess("Something went wrong.");
    }

    setLoading(false);
  };

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "webdesignrahim4061@gmail.com",
      href: "mailto:webdesignrahim4061@gmail.com",
      action: "Send Email",
      gradient: "from-violet-500 to-fuchsia-500",
      shadowColor: "shadow-violet-500/20",
      borderColor: "hover:border-violet-500",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Md Rahim",
      href: "https://www.linkedin.com/in/rahimsoftdev/",
      action: "Connect",
      gradient: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/20",
      borderColor: "hover:border-blue-500",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+880 1873-135444",
      href: "https://wa.me/8801873135444",
      action: "Chat Now",
      gradient: "from-green-500 to-emerald-500",
      shadowColor: "shadow-green-500/20",
      borderColor: "hover:border-green-500",
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-violet-500/5 to-transparent blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-500/5 to-transparent blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-500 font-medium tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-violet-500 to-violet-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold gradient-text">
                Let&apos;s Talk
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Have an idea, project, or opportunity? Reach out through any platform below.
                I&apos;ll respond as soon as possible.
              </p>
            </div>

            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                className={`group flex items-center gap-5 rounded-2xl border border-brand-card-border bg-brand-card/30 backdrop-blur-sm p-5 shadow-lg ${method.shadowColor} ${method.borderColor} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${method.gradient} shadow-lg`}>
                  <div className="text-white text-xl">
                    {method.icon}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-text-primary">
                    {method.title}
                  </h4>
                  <p className="text-text-muted text-sm truncate">
                    {method.value}
                  </p>
                  <span className={`text-xs font-semibold bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent`}>
                    {method.action} →
                  </span>
                </div>
              </a>
            ))}
          </motion.div>

          {/* RIGHT - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-brand-card-border bg-brand-card/30 backdrop-blur-sm shadow-xl p-8 lg:p-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-text-primary">
                Send a Message
              </h3>
              <p className="mt-2 text-text-muted text-sm">
                Tell me about your project and I&apos;ll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-text-secondary">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-brand-card-border bg-brand-card/50 px-5 py-3.5 text-text-primary outline-none transition-all duration-300 placeholder:text-text-muted focus:border-violet-500/50 focus:bg-violet-500/5 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-secondary">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                  className="w-full rounded-xl border border-brand-card-border bg-brand-card/50 px-5 py-3.5 text-text-primary outline-none transition-all duration-300 placeholder:text-text-muted focus:border-violet-500/50 focus:bg-violet-500/5 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-secondary">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-brand-card-border bg-brand-card/50 px-5 py-3.5 text-text-primary outline-none transition-all duration-300 placeholder:text-text-muted resize-none focus:border-violet-500/50 focus:bg-violet-500/5 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-violet-500/25 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity=".25" />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/5 p-4 text-green-400"
                >
                  <FaCheckCircle />
                  {success}
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
