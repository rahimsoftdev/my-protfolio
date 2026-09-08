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



const GithubActivity = () => {
  const username = "rahimsoftdev";

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        console.error("GitHub API Error:", err);
        setError("Unable to load GitHub activity.");
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const totalStars = repos.reduce(
    (total, repo) => total + repo.stargazers_count,
    0
  );

  const totalForks = repos.reduce(
    (total, repo) => total + repo.forks_count,
    0
  );

  return (
    <section
      id="github"
      className="relative overflow-hidden border-t border-brand-card-border/50 bg-background px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-500">
            Open Source
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            GitHub{" "}
            <span className="gradient-text">
              Activity
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            A glimpse of my coding consistency, open-source contributions,
            repositories, and GitHub activity.
          </p>
        </motion.div>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-32 animate-pulse rounded-3xl border border-brand-card-border/50 bg-brand-card/50"
                />
              ))}
            </div>

            <div className="h-52 animate-pulse rounded-3xl border border-brand-card-border/50 bg-brand-card/50" />
          </div>
        )}

        {/* ================= ERROR ================= */}
        {error && !loading && (
          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8 text-center">
            <p className="text-red-400">{error}</p>

            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-600"
            >
              Visit GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        )}

        {/* ================= CONTENT ================= */}
        {user && !loading && !error && (
          <>
            {/* ================= PROFILE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 rounded-3xl border border-brand-card-border/50 bg-brand-card/70 p-6 backdrop-blur-xl"
            >
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <img
                    src={user.avatar_url}
                    alt={`${username} GitHub profile`}
                    className="h-20 w-20 rounded-2xl border-2 border-violet-500/40"
                  />

                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold">
                      {user.name || user.login}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      @{user.login}
                    </p>
                  </div>
                </div>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-400 transition hover:bg-violet-500 hover:text-white"
                >
                  <FaGithub size={18} />
                  View GitHub Profile
                  <ExternalLink size={15} />
                </a>
              </div>
            </motion.div>

            {/* ================= STATS ================= */}
            <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Repositories */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group rounded-3xl border border-brand-card-border/50 bg-brand-card/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-500/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                    <BookOpen size={22} />
                  </div>

                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Repositories
                  </span>
                </div>

                <p className="text-3xl font-bold">
                  {user.public_repos}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Public repositories
                </p>
              </motion.div>

              {/* Followers */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="group rounded-3xl border border-brand-card-border/50 bg-brand-card/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-500/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                    <Users size={22} />
                  </div>

                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Followers
                  </span>
                </div>

                <p className="text-3xl font-bold">
                  {user.followers}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  GitHub followers
                </p>
              </motion.div>

              {/* Stars */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="group rounded-3xl border border-brand-card-border/50 bg-brand-card/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-500/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                    <Star size={22} />
                  </div>

                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Stars
                  </span>
                </div>

                <p className="text-3xl font-bold">
                  {totalStars}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Total repository stars
                </p>
              </motion.div>

              {/* Forks */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="group rounded-3xl border border-brand-card-border/50 bg-brand-card/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-500/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                    <GitFork size={22} />
                  </div>

                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Forks
                  </span>
                </div>

                <p className="text-3xl font-bold">
                  {totalForks}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Total repository forks
                </p>
              </motion.div>
            </div>

            {/* ================= CONTRIBUTION CALENDAR ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-brand-card-border/50 bg-brand-card/70 p-5 backdrop-blur-xl sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                  <GitCommit size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-bold sm:text-xl">
                    Contribution Activity
                  </h3>

                  <p className="text-sm text-muted-foreground">
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
                  colorScheme="dark"
                  theme={{
                    dark: [
                      "#161b22",
                      "#3b1f63",
                      "#5b2c91",
                      "#7c3aed",
                      "#a855f7",
                    ],
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default GithubActivity;