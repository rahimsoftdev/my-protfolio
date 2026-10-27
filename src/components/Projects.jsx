"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LIMIT = 3;

const SkeletonCard = () => (
  <div className="rounded-2xl border border-gray-200 dark:border-brand-card-border bg-gray-50 dark:bg-brand-card/40 overflow-hidden animate-pulse">
    <div className="h-44 sm:h-52 lg:h-56 bg-gray-200 dark:bg-text-muted/15" />
    <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
      <div className="h-5 sm:h-6 bg-gray-200 dark:bg-text-muted/15 rounded-full w-3/4" />
      <div className="h-3 sm:h-4 bg-gray-200 dark:bg-text-muted/15 rounded-full w-full" />
      <div className="h-3 sm:h-4 bg-gray-200 dark:bg-text-muted/15 rounded-full w-2/3" />
      <div className="flex gap-2">
        <div className="h-5 sm:h-6 bg-gray-200 dark:bg-text-muted/15 rounded-full w-14 sm:w-16" />
        <div className="h-5 sm:h-6 bg-gray-200 dark:bg-text-muted/15 rounded-full w-16 sm:w-20" />
        <div className="h-5 sm:h-6 bg-gray-200 dark:bg-text-muted/15 rounded-full w-12 sm:w-14" />
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProjects, setTotalProjects] = useState(0);

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(`/api/projects?page=${page}&limit=${LIMIT}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProjects(data.projects || []);
        setTotalPages(data.totalPages || 1);
        setTotalProjects(data.totalProjects || 0);
      } catch (err) {
        setError(true);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, [page]);

  const start = totalProjects === 0 ? 0 : (page - 1) * LIMIT + 1;
  const end = Math.min(page * LIMIT, totalProjects);

  const pageBtnBase =
    "rounded-xl text-xs sm:text-sm font-semibold transition-all border";
  const pageBtnIdle =
    "bg-gray-50 dark:bg-brand-card/40 border-gray-200 dark:border-brand-card-border text-gray-700 dark:text-text-secondary hover:border-[#42F29E] hover:text-gray-900 dark:hover:text-[#42F29E]";

  return (
    <section
      id="projects"
      className="relative dark:bg-background overflow-hidden mb-5 lg:mb-10"
    >
      {/* MAIN CONTAINER — same width as navbar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-3 md:mb-5"
        >
          <p className="text-[#42F29E] font-medium tracking-widest uppercase text-xs sm:text-sm mb-2">
            My Work
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-text-primary">
            Featured <span className="text-[#42F29E]">Projects</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-[#42F29E] rounded-full" />
        </motion.div>

        {/* Info bar */}
        <div className="flex justify-between items-center mb-2 sm:mb-4">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-text-secondary">
            Showing{" "}
            <span className="font-bold text-gray-900 dark:text-text-primary">
              {start}
            </span>
            -
            <span className="font-bold text-gray-900 dark:text-text-primary">
              {end}
            </span>{" "}
            of{" "}
            <span className="font-bold text-gray-900 dark:text-text-primary">
              {totalProjects}
            </span>{" "}
            projects
          </p>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {[1, 2, 3].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : error ? (
          <p className="text-center py-16 text-sm text-gray-600 dark:text-text-secondary">
            Something went wrong while loading projects. Please try again.
          </p>
        ) : projects.length === 0 ? (
          <p className="text-center py-16 text-sm text-gray-600 dark:text-text-secondary">
            No projects found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 auto-rows-fr">
            {projects.map((project, index) => (
              <motion.div
                key={project._id || index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 dark:border-brand-card-border bg-gray-50 dark:bg-brand-card/40 overflow-hidden transition-all duration-300 hover:border-[#42F29E]/60 hover:shadow-lg hover:shadow-[#42F29E]/10">
                  {/* Image */}
                  <div className="relative h-44 sm:h-52 lg:h-56 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Badge */}
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-[#42F29E] px-3 py-1 text-xs font-semibold text-gray-900">
                      Featured
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                    <h3 className="mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-text-primary transition-colors duration-300 group-hover:text-[#42F29E]">
                      {project.title}
                    </h3>

                    <p className="mb-4 sm:mb-5 line-clamp-2 text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-text-secondary">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-5 sm:mb-6 flex flex-wrap gap-2">
                      {project.tags?.map((tag, i) => (
                        <span
                          key={`${project._id}-${i}-${tag}`}
                          className="rounded-full border border-[#42F29E]/40 bg-[#42F29E]/10 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium text-gray-700 dark:text-[#42F29E]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto grid grid-cols-3 gap-2 sm:gap-3">
                      {project.demo ? (
                        <Link
                          href={project.demo}
                          target="_blank"
                          className="rounded-xl bg-[#42F29E] py-2 sm:py-2.5 text-center text-xs sm:text-sm font-semibold text-gray-900 transition-all hover:shadow-lg hover:shadow-[#42F29E]/30 hover:scale-[1.02]"
                        >
                          Demo
                        </Link>
                      ) : (
                        <span className="rounded-xl bg-[#42F29E]/40 py-2 sm:py-2.5 text-center text-xs sm:text-sm font-semibold text-gray-900/60 cursor-not-allowed">
                          Demo
                        </span>
                      )}

                      <Link
                        href={`/${project._id}`}
                        className="rounded-xl border border-[#42F29E] py-2 sm:py-2.5 text-center text-xs sm:text-sm font-semibold text-gray-700 dark:text-[#42F29E] transition-all hover:bg-[#42F29E]/10"
                      >
                        Details
                      </Link>

                      {project.code ? (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl border border-gray-300 dark:border-brand-card-border py-2 sm:py-2.5 text-center text-xs sm:text-sm font-semibold text-gray-700 dark:text-text-secondary transition-all hover:border-[#42F29E] hover:text-gray-900 dark:hover:text-[#42F29E]"
                        >
                          Code
                        </a>
                      ) : (
                        <span className="rounded-xl border border-gray-200 dark:border-brand-card-border py-2 sm:py-2.5 text-center text-xs sm:text-sm font-semibold text-gray-400 cursor-not-allowed">
                          Code
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10 md:mt-14">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={`${pageBtnBase} ${pageBtnIdle} px-4 sm:px-5 py-2 sm:py-2.5 disabled:opacity-30 disabled:pointer-events-none`}
          >
            Previous
          </button>

          {/* Mobile: compact indicator */}
          <span className="sm:hidden px-3 text-xs font-semibold text-gray-700 dark:text-text-secondary">
            {page} / {totalPages}
          </span>

          {/* sm and up: numbered buttons */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`${pageBtnBase} px-3.5 sm:px-4 py-2 sm:py-2.5 ${
                  page === i + 1
                    ? "bg-[#42F29E] border-[#42F29E] text-gray-900 shadow-lg shadow-[#42F29E]/25"
                    : pageBtnIdle
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className={`${pageBtnBase} ${pageBtnIdle} px-4 sm:px-5 py-2 sm:py-2.5 disabled:opacity-30 disabled:pointer-events-none`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;