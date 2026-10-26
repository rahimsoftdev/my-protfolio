"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";

const education = [
  {
    title: "Diploma in Engineering",
    institute: "Tangail Polytechnic Institute",
    period: "2023 - Present",
    icon: <FaGraduationCap />,
    description:
      "Currently studying Computer Science & Technology and building full-stack projects.",
  },
  {
    title: "Secondary School Certificate",
    institute: "Barai Bari AKU Institution",
    period: "2022",
    icon: <FaAward />,
    description: "Completed SSC with GPA 5.00.",
  },
  {
    title: "Junior School Certificate",
    institute: "Barai Bari AKU Institution",
    period: "2019",
    icon: <FaBookOpen />,
    description: "Completed Junior School Certificate successfully.",
  },
  {
    title: "Primary School Certificate",
    institute: "Barai Bari AKU Institution",
    period: "2016",
    icon: <FaSchool />,
    description: "Completed Primary education successfully.",
  },
  {
    title: "Primary Education Started",
    institute: "Barai Bari Primary School",
    period: "2010",
    icon: <FaSchool />,
    description: "Started educational journey with curiosity.",
  },
];

const TimelineCard = ({ item, isLeft }) => (
  <div
    className={`w-full max-w-md p-4 sm:p-5 lg:p-6 rounded-2xl border border-gray-200 dark:border-brand-card-border bg-gray-50 dark:bg-brand-card/40 text-left ${
      isLeft ? "md:ml-auto md:text-right" : ""
    }`}
  >
    <div
      className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-base sm:text-lg rounded-xl bg-[#42F29E] text-gray-900 ${
        isLeft ? "md:ml-auto" : ""
      }`}
    >
      {item.icon}
    </div>
    <h3 className="text-base sm:text-lg font-bold mt-3 sm:mt-4 text-gray-900 dark:text-text-primary">
      {item.title}
    </h3>
    <p className="text-xs sm:text-sm mt-1 font-medium text-gray-700 dark:text-[#42F29E]">
      {item.institute}
    </p>
    <p className="text-gray-600 dark:text-text-secondary mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed">
      {item.description}
    </p>
    <span className="inline-block mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold bg-[#42F29E] text-gray-900">
      {item.period}
    </span>
  </div>
);

const Qualification = () => {
  return (
    <section
      id="qualifications"
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
            My Journey
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-text-primary">
            Qualification <span className="text-[#42F29E]">Timeline</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-[#42F29E] rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line: left on mobile, center from md up */}
          <div className="absolute top-0 bottom-0 left-[7px] md:left-1/2 md:-translate-x-1/2 w-0.5 bg-[#42F29E]/40 rounded-full" />

          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {education.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center"
                >
                  {/* Dot */}
                  <span className="absolute left-0 top-5 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-[#42F29E] border-[3px] border-white dark:border-background" />

                  {/* Card (left or right column on md+) */}
                  <div className={isLeft ? "md:col-start-1" : "md:col-start-2"}>
                    <TimelineCard item={item} isLeft={isLeft} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;