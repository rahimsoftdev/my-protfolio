"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Elements that trigger the "hover" cursor state
const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, label, [role='button']";

const ACCENT = "66, 242, 158"; // #42F29E

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Skip on touch / coarse-pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Center both elements on the pointer (GSAP owns the transform,
    // so we use xPercent/yPercent instead of Tailwind translate classes)
    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50, opacity: 0 });

    const cursorX = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power2.out" });
    const cursorY = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power2.out" });
    const followerX = gsap.quickTo(follower, "x", { duration: 0.3, ease: "power2.out" });
    const followerY = gsap.quickTo(follower, "y", { duration: 0.3, ease: "power2.out" });

    let visible = false;
    let hovering = false;

    const show = () => {
      if (visible) return;
      visible = true;
      gsap.to([cursor, follower], { opacity: 1, duration: 0.2 });
    };

    const hide = () => {
      visible = false;
      gsap.to([cursor, follower], { opacity: 0, duration: 0.2 });
    };

    const onMouseMove = (e) => {
      if (!visible) {
        // Jump to the pointer on first move so it doesn't fly in from (0,0)
        gsap.set([cursor, follower], { x: e.clientX, y: e.clientY });
        show();
      }
      cursorX(e.clientX);
      cursorY(e.clientY);
      followerX(e.clientX);
      followerY(e.clientY);
    };

    const onMouseDown = () => {
      gsap.to([cursor, follower], { scale: 0.5, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: hovering ? 0 : 1, duration: 0.2 });
      gsap.to(follower, { scale: hovering ? 2.5 : 1, duration: 0.2 });
    };

    const enterInteractive = () => {
      hovering = true;
      gsap.to(follower, {
        scale: 2.5,
        backgroundColor: `rgba(${ACCENT}, 0.1)`,
        borderColor: `rgba(${ACCENT}, 0.6)`,
        duration: 0.3,
      });
      gsap.to(cursor, { scale: 0, duration: 0.3 });
    };

    const leaveInteractive = () => {
      hovering = false;
      gsap.to(follower, {
        scale: 1,
        backgroundColor: `rgba(${ACCENT}, 0.2)`,
        borderColor: "rgba(0, 0, 0, 0)",
        duration: 0.3,
      });
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    };

    // Event delegation: also works for elements added later
    // (e.g. projects loaded from the API)
    const onMouseOver = (e) => {
      if (!hovering && e.target.closest?.(INTERACTIVE_SELECTOR)) {
        enterInteractive();
      }
    };

    const onMouseOut = (e) => {
      if (!hovering) return;
      const next = e.relatedTarget;
      if (!next || !next.closest?.(INTERACTIVE_SELECTOR)) {
        leaveInteractive();
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.documentElement.addEventListener("mouseleave", hide);
    document.documentElement.addEventListener("mouseenter", show);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.documentElement.removeEventListener("mouseleave", hide);
      document.documentElement.removeEventListener("mouseenter", show);
      gsap.killTweensOf([cursor, follower]);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] hidden h-2 w-2 rounded-full bg-[#42F29E] pointer-events-none md:block"
      />
      {/* Follower ring */}
      <div
        ref={followerRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9998] hidden h-8 w-8 rounded-full border border-transparent bg-[#42F29E]/20 pointer-events-none md:block"
      />
    </>
  );
};

export default CustomCursor;