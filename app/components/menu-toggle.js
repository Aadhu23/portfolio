"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" }
];

export default function MenuToggle() {
  const [open, setOpen] = useState(true);
  const rootRef = useRef(null);
  const pathname = usePathname();
  const prevPathname = useRef(null);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative flex items-center">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
        className={`relative z-10 grid h-12 w-12 place-items-center rounded-full border border-black/5 bg-white/90 text-[0.68rem] font-bold tracking-[0.2em] shadow-soft transition duration-300 hover:-translate-y-0.5 ${
          open ? "rotate-[180deg]" : "rotate-0"
        }`}
      >
        AS
      </button>

      <div
        className={`absolute left-8 top-1/2 z-0 -translate-y-1/2 overflow-hidden rounded-full border border-white/80 bg-white/95 shadow-soft backdrop-blur-xl transition-all duration-300 ${
          open
            ? "visible w-[22rem] px-8 py-3 opacity-100"
            : "invisible w-0 px-0 py-3 opacity-0"
        }`}
      >
        <nav
          className="flex min-w-max items-center gap-6 whitespace-nowrap text-sm text-mist"
          onClick={() => setOpen(false)}
        >
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition-all duration-300 hover:text-ink ${
                pathname === link.href ? "text-ink" : ""
              } ${
                open
                  ? "translate-x-0 opacity-100"
                  : "translate-x-2 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${index * 70}ms` : "0ms" }}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-ink transition-all duration-300 ${
                  pathname === link.href ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
