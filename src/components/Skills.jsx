"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "TypeScript", level: 70 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind", level: 92 },
      { name: "Bootstrap", level: 60 },
      { name: "Hero UI", level: 70 },
      { name: "Daisy UI", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 75 },
      { name: "Prisma", level: 65 },
      { name: "PostgreSQL", level: 65 },
      { name: "Better Auth", level: 50 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "REST API", level: 85 },
      { name: "Figma", level: 65 },
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
    ],
  },
];

const techLogos = {
  HTML: "https://cdn.simpleicons.org/html5/E34F26",
  CSS: "https://cdn.simpleicons.org/css/663399",
  TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
  JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  React: "https://cdn.simpleicons.org/react/61DAFB",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/000000",
  Tailwind: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  Bootstrap: "https://cdn.simpleicons.org/bootstrap/7952B3",
  "Hero UI": "https://cdn.simpleicons.org/heroui/6D28D9",
  "Daisy UI": "https://cdn.simpleicons.org/daisyui/5A0EF8",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
  Express: "https://cdn.simpleicons.org/express/000000",
  MongoDB: "https://cdn.simpleicons.org/mongodb/47A248",
  Prisma: "https://cdn.simpleicons.org/prisma/2D3748",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql/4169E1",
  "Better Auth": "https://cdn.simpleicons.org/betterauth/6D28D9",
  "REST API": "https://cdn.simpleicons.org/openapiinitiative/6BA539",
  Figma: "https://cdn.simpleicons.org/figma/F24E1E",
  Git: "https://cdn.simpleicons.org/git/F05032",
  GitHub: "https://cdn.simpleicons.org/github/181717",
  "VS Code":
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
};

const invertableLogos = new Set(["Next.js", "Express", "Prisma", "GitHub"]);

// Logo with a simple fallback (first letter) if the image fails to load
const Logo = ({ name, className }) => {
  const [failed, setFailed] = useState(false);
  const logo = techLogos[name];

  if (!logo || failed) {
    return (
      <span
        className={`flex items-center justify-center rounded-md bg-[#42F29E] font-bold text-gray-900 text-[10px] ${className}`}
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={name}
      title={name}
      onError={() => setFailed(true)}
      className={`${className} ${
        invertableLogos.has(name) ? "dark:invert" : ""
      } object-contain`}
    />
  );
};

const techNames = [
  ...new Set(
    skillCategories.flatMap((category) =>
      category.skills.map((skill) => skill.name)
    )
  ),
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative pb-16 md:pb-20 lg:pb-24 dark:bg-background overflow-hidden"
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
            What I Know
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-text-primary">
            My <span className="text-[#42F29E]">Skills</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-[#42F29E] rounded-full" />
        </motion.div>

        {/* Tech Icons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5 mb-10 md:mb-14"
        >
          {techNames.map((name) => (
            <motion.div
              key={name}
              variants={itemVariants}
              className="group flex flex-col items-center w-16 sm:w-20"
            >
              <div
                title={name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl border border-gray-200 dark:border-brand-card-border bg-gray-50 dark:bg-brand-card/50 flex items-center justify-center p-2.5 sm:p-3 group-hover:border-[#42F29E] transition-colors duration-300 cursor-default"
              >
                <Logo name={name} className="w-full h-full" />
              </div>
              <p className="mt-2 text-center text-[11px] sm:text-xs font-medium text-gray-600 dark:text-text-secondary group-hover:text-gray-900 dark:group-hover:text-[#42F29E] transition-colors duration-300">
                {name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className={`p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-brand-card-border bg-gray-50 dark:bg-brand-card/30 ${
                catIndex === skillCategories.length - 1
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              {/* Title */}
              <div className="mb-5 md:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-text-primary">
                  {category.title}
                </h3>
                <div className="mt-2 w-10 h-1 rounded-full bg-[#42F29E]" />
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-800 dark:text-text-primary">
                        <Logo name={skill.name} className="w-4 h-4" />
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-text-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.1 + skillIndex * 0.04,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-[#42F29E]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;