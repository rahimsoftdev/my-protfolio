"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  GitFork,
  Star,
  Users,
  BookOpen,
  GitCommit,
  ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { GitHubCalendar } from "react-github-calendar";

const username = "rahimsoftdev";

const cardBase =
  "rounded-2xl border border-gray-200 dark:border-brand-card-border bg-gray-50 dark:bg-brand-card/40";

// Calendar colors in the same green family as the rest of the site
const calendarTheme = {
  light: ["#e5e7eb", "#b7f5d8", "#7eeab8", "#42F29E", "#1fb877"],
  dark: ["#161b22", "#0f5c3a", "#1f9a63", "#2fcf86", "#42F29E"],
};

const GithubActivity = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isDark, setIsDark] = useState(true);

  // Follow the Tailwind "dark" class so the calendar matches the page theme
  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true);
        setError("");

        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
          ),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        setUser(await userResponse.json());
        setRepos(await reposResponse.json());
      } catch (err) {
        console.error("GitHub API Error:", err);
        setError("Unable to load GitHub activity.");
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const totalStars = repos.reduce((t, r) => t + r.stargazers_count, 0);
  const totalForks = repos.reduce((t, r) => t + r.forks_count, 0);

  const stats = user
    ? [
        {
          label: "Repositories",
          value: user.public_repos,
          caption: "Public repositories",
          icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />,
        },
        {
          label: "Followers",
          value: user.followers,
          caption: "GitHub followers",
          icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
        },
        {
          label: "Stars",
          value: totalStars,
          caption: "Total repository stars",
          icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />,
        },
        {
          label: "Forks",
          value: totalForks,
          caption: "Total repository forks",
          icon: <GitFork className="w-4 h-4 sm:w-5 sm:h-5" />,
        },
      ]
    : [];

  return (
    <section
      id="github"
      className="relative pb-16 pt-3 lg:pt-10 md:pb-20 lg:pb-24 dark:bg-background overflow-hidden"
    >
      {/* MAIN CONTAINER — same width as navbar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-[#42F29E] font-medium tracking-widest uppercase text-xs sm:text-sm mb-2">
            Open Source
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-text-primary">
            GitHub <span className="text-[#42F29E]">Activity</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-[#42F29E] rounded-full" />

          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 dark:text-text-secondary">
            A glimpse of my coding consistency, open-source contributions,
            repositories, and GitHub activity.
          </p>
        </motion.div>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="space-y-5 sm:space-y-6">
            <div className={`${cardBase} h-28 sm:h-32 animate-pulse`} />
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={`${cardBase} h-28 sm:h-32 animate-pulse`}
                />
              ))}
            </div>
            <div className={`${cardBase} h-44 sm:h-52 animate-pulse`} />
          </div>
        )}

        {/* ================= ERROR ================= */}
        {error && !loading && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6 sm:p-8 text-center">
            <p className="text-sm sm:text-base text-red-500 dark:text-red-400">
              {error}
            </p>

            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#42F29E] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900 transition hover:shadow-lg hover:shadow-[#42F29E]/30"
            >
              Visit GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        )}

        {/* ================= CONTENT ================= */}
        {user && !loading && !error && (
          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
            {/* ================= PROFILE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`${cardBase} p-4 sm:p-5 lg:p-6`}
            >
              <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={user.avatar_url}
                    alt={`${user.login} GitHub profile`}
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl border-2 border-[#42F29E]"
                  />

                  <div className="text-center sm:text-left">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-text-primary">
                      {user.name || user.login}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-gray-700 dark:text-[#42F29E]">
                      @{user.login}
                    </p>
                  </div>
                </div>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#42F29E] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900 transition hover:shadow-lg hover:shadow-[#42F29E]/30 hover:scale-[1.02]"
                >
                  <FaGithub size={18} />
                  View GitHub Profile
                  <ExternalLink size={15} />
                </a>
              </div>
            </motion.div>

            {/* ================= STATS ================= */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`${cardBase} p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#42F29E]/60 hover:shadow-lg hover:shadow-[#42F29E]/10`}
                >
                  <div className="mb-3 sm:mb-4 flex items-center justify-between gap-2">
                    <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#42F29E] text-gray-900">
                      {stat.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-text-secondary text-right">
                      {stat.label}
                    </span>
                  </div>

                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] sm:text-sm text-gray-600 dark:text-text-secondary">
                    {stat.caption}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ================= CONTRIBUTION CALENDAR ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`${cardBase} p-4 sm:p-6 lg:p-8`}
            >
              <div className="mb-5 sm:mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#42F29E] text-gray-900">
                  <GitCommit className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-text-primary">
                    Contribution Activity
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-text-secondary">
                    My GitHub contributions over the past year
                  </p>
                </div>
              </div>

              <div className="github-calendar-wrapper w-full overflow-x-auto pb-3">
                <GitHubCalendar
                  username={username}
                  blockSize={13}
                  blockMargin={4}
                  fontSize={13}
                  colorScheme={isDark ? "dark" : "light"}
                  theme={calendarTheme}
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubActivity;