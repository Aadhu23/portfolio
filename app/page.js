import Link from "next/link";
import RotatingTitle from "./components/rotating-title";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Aadhu23?tab=repositories",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.11.39-2.01 1.03-2.72-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.04A9.35 9.35 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.31 2.75-1.04 2.75-1.04.55 1.42.2 2.47.1 2.73.64.71 1.03 1.61 1.03 2.72 0 3.92-2.34 4.79-4.57 5.04.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aadhavansakthivel/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M6.94 8.5A1.56 1.56 0 1 0 6.9 5.38a1.56 1.56 0 0 0 .04 3.12ZM5.62 9.68h2.6V18h-2.6V9.68Zm4.23 0h2.5v1.14h.04c.35-.66 1.2-1.36 2.47-1.36 2.64 0 3.14 1.78 3.14 4.09V18h-2.6v-3.93c0-.94-.02-2.15-1.28-2.15-1.28 0-1.48 1.02-1.48 2.08V18h-2.6V9.68Z" />
      </svg>
    )
  },
  {
    label: "Email",
    href: "mailto:aadhavansakthivel5@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" aria-hidden="true">
        <path d="M4 6.5h16v11H4z" strokeWidth="1.8" />
        <path d="m5 8 7 5 7-5" strokeWidth="1.8" />
      </svg>
    )
  },
  {
    label: "X",
    href: "https://x.com/Aadhu06",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M18.9 3H21l-6.6 7.53L22 21h-6l-4.7-6.2L5.85 21H3.75l7.06-8.05L2 3h6.15l4.24 5.62L18.9 3Zm-1.05 16.2h1.17L7.5 4.73H6.24L17.85 19.2Z" />
      </svg>
    )
  }
];

const projects = [
  {
    label: "Featured",
    stack: "FastAPI · WebSocket · Computer Vision",
    title: "SnapIN",
    status: "Working",
    progress: 62,
    repo: "https://github.com/Aadhu23/snapin",
    description:
      "A focus-first productivity platform that combines live detection, fast backend communication, and a cleaner product interface.",
    points: [
      "Designed as a polished product concept rather than only a prototype.",
      "Connected real-time monitoring workflows to a web-based experience.",
      "Focused on making intelligent productivity tools feel modern and usable."
    ],
    featured: true
  },
  {
    label: "AI Monitoring",
    stack: "Python · YOLO · OpenCV",
    title: "Study Guard",
    status: "Completed",
    progress: 100,
    repo: "https://github.com/Aadhu23/study-gaurd",
    description:
      "A distraction-detection system that monitors study sessions and responds when phone usage crosses a threshold."
  },
  {
    label: "DSA Project",
    stack: "C++ · CSV · Linked List",
    title: "Book Storage System",
    status: "Completed",
    progress: 100,
    repo: "https://github.com/Aadhu23/Book-Storage-System",
    description:
      "A console-based book journal with storage, search, sorting, and file persistence."
  }
];

const skillGroups = [
  {
    title: "Languages",
    items:
      "Python (Data Processing, Backend), C, C++ (Problem Solving), JavaScript (Frontend Basics)"
  },
  {
    title: "Tools & Libraries",
    items:
      "FastAPI (Backend APIs), NumPy, Pandas (Data Processing), Matplotlib (Data Visualization), IBM Cognos, Power BI (Dashboarding & Reporting), OpenCV, YOLO (Computer Vision)"
  },
  {
    title: "Focus Areas",
    items:
      "Backend Development, Data Processing Systems, Computer Vision, Distributed Systems (Learning)"
  }
];

const contributions = [
  {
    title: "[InferAttrs] Avoid conflicting argument memory attributes",
    repo: "llvm/llvm-project",
    prUrl: "https://github.com/llvm/llvm-project/pull/226207",
    number: 226207,
    status: "Open",
    description:
      "Fixed conflicting LLVM memory attributes that could crash Clang, with regression tests."
  },
  {
    title: "videoio: fix build with FFmpeg 9 after AVCodec::pix_fms removal",
    repo: "opencv/opencv",
    prUrl: "https://github.com/opencv/opencv/pull/29533",
    number: 29533,
    status: "Closed",
    description:
      "Replaced direct AVCodec::pix_fms access with avcodec_get_supported_config() for FFmpeg 9 compatibility."
  },
];

export default function Home() {
  return (
    <>
      <section className="mb-6 overflow-hidden rounded-shell shadow-soft">
        <div
          className="relative h-[220px] overflow-hidden bg-cover bg-center md:h-[280px]"
          style={{ backgroundImage: "url('/banner.jpg')" }}
        >
          <div className="absolute inset-0 scale-105 bg-[radial-gradient(circle_at_20%_20%,rgba(255,214,170,0.22),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(255,244,220,0.18),transparent_24%),linear-gradient(180deg,rgba(18,12,10,0.1),rgba(18,12,10,0.38))] mix-blend-screen" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(120,76,40,0.14),transparent_42%,rgba(255,248,236,0.08))]" />
          <div className="absolute inset-0 backdrop-brightness-[1.08] backdrop-contrast-[1.04]" />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div className="max-w-3xl">
              <p className="font-sans text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#171311] drop-shadow-[0_8px_18px_rgba(255,255,255,0.14)] md:text-5xl">
                "Dream is not that which you see while sleeping it is something
                that does not let you sleep."
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-black/75 drop-shadow-[0_6px_14px_rgba(255,255,255,0.16)] md:text-sm">
                A. P. J. Abdul Kalam
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-shell border border-white/70 bg-white/75 p-8 shadow-soft backdrop-blur-xl md:p-12">
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <div className="flex items-center">
              <h1 className="text-[2.55rem] font-semibold tracking-[-0.045em] text-ink md:text-[4rem]">
                Aadhavan Sakthivel
              </h1>
            </div>

            <RotatingTitle />

            <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-stone-700 md:text-[1.12rem]">
            I don’t give up easily when I face problems. I keep working on them until I understand how they actually work.
            </p>
            <p className="mt-2 max-w-2xl text-[1.05rem] leading-8 text-stone-700 md:text-[1.12rem]">
            This mindset led me to explore backend development, where I focus on how data is processed and how systems work behind the scenes.
            </p>
            <p className="mt-2 max-w-2xl text-[1.05rem] leading-8 text-stone-700 md:text-[1.12rem]">
            Right now, I’m strengthening my backend development skills and exploring distributed systems to understand how large-scale applications are built.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://drive.google.com/file/d/1vjjCyNa28hjyav2DmTeQhR8vW-90m3bX/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-ink shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5"
              >
                Resume
              </Link>
              <Link
                href="/projects"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center px-2 text-sm font-medium text-ink transition hover:translate-x-0.5"
              >
                Projects
                <span className="ml-2 text-base">→</span>
              </Link>
            </div>

            <div className="mt-16">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">
                Find Me
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/85 px-5 text-sm font-medium text-mist shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:text-ink"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,242,236,0.7))] p-4 shadow-[0_18px_46px_rgba(35,25,15,0.08)]">
            <div
              className="relative min-h-[420px] overflow-hidden rounded-[1.7rem] bg-cover bg-[center_18%]"
              style={{ backgroundImage: "url('/profile.jpg')" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.28),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(22,16,12,0.18)_72%,rgba(22,16,12,0.32))]" />
              
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-mist">Projects</p>
            <h2 className="mt-3 font-serif text-4xl leading-none tracking-[-0.03em] text-ink md:text-6xl">
              Selected work.
            </h2>
          </div>
          <Link
            href="/projects"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white/85 px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            Open Projects Page
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`rounded-shell border border-white/70 bg-white/75 p-8 shadow-soft backdrop-blur-xl ${
                index === 0 ? "md:col-span-2 md:p-10" : ""
              }`}
            >
              <div className="flex flex-wrap justify-between gap-3 text-xs uppercase tracking-[0.24em] text-mist">
                <span>{project.label}</span>
                <span>{project.stack}</span>
              </div>
              <div className="mt-5 flex justify-end">
                <div className="flex items-center gap-2 whitespace-nowrap text-sm text-stone-600">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      project.status === "Completed" ? "bg-emerald-500" : "bg-amber-500"
                    }`}
                  />
                  <span>{project.status}</span>
                </div>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-ink">{project.title}</h3>
              <p className="mt-4 leading-8 text-mist">{project.description}</p>
              {project.points ? (
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-stone-800">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-6">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white/90 px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
                >
                  GitHub Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-mist">Contributions</p>
            <h2 className="mt-3 font-serif text-4xl leading-none tracking-[-0.03em] text-ink md:text-6xl">
              Open source work.
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {contributions.map((contribution) => (
            <article
              key={contribution.number}
              className="rounded-shell border border-white/70 bg-white/75 p-8 shadow-soft backdrop-blur-xl"
            >
              <div className="flex flex-wrap justify-between gap-3 text-xs uppercase tracking-[0.24em] text-mist">
                <span>{contribution.repo}</span>
                <span>{contribution.status}</span>
              </div>
              <h3 className="mt-4 text-3xl font-semibold text-ink">{contribution.title}</h3>
              <p className="mt-4 leading-8 text-mist">{contribution.description}</p>
              <div className="mt-6">
                <a
                  href={contribution.prUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white/90 px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
                >
                  GitHub PR
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-mist">Skills</p>
            <h2 className="mt-3 font-serif text-4xl leading-none tracking-[-0.03em] text-ink md:text-6xl">
              Tools I work with.
            </h2>
          </div>
          <Link
            href="/skills"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white/85 px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            Open Skills Page
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-shell border border-white/70 bg-white/75 p-8 shadow-soft backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold text-ink">{group.title}</h3>
              <p className="mt-4 leading-8 text-mist">{group.items}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="mb-5">
          <p className="text-xs uppercase tracking-[0.28em] text-mist">Education</p>
          <h2 className="mt-3 font-serif text-4xl leading-none tracking-[-0.03em] text-ink md:text-6xl">
            Academic background.
          </h2>
        </div>

        <article className="rounded-shell border border-white/70 bg-white/75 p-8 shadow-soft backdrop-blur-xl">
          <h3 className="text-2xl font-semibold text-ink">
            B.Tech in Computer Science (Big Data Analytics)
          </h3>
          <p className="mt-4 leading-8 text-mist">
            Lovely Professional University | 2023 - 2027
          </p>
        </article>
      </section>

      <section className="grid gap-6 py-6 md:grid-cols-[0.9fr_1.1fr] md:py-8">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.28em] text-mist">Contact</p>
          <h2 className="font-serif text-4xl leading-none tracking-[-0.03em] text-ink md:text-6xl">
            Let&apos;s connect.
          </h2>
          <p className="max-w-xl leading-8 text-mist">
            If you would like to collaborate, discuss an idea, or talk about a
            project, feel free to reach out.
          </p>
          <Link
            href="/contact"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white/85 px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            Open Contact Page
          </Link>
        </div>

        <div className="rounded-shell border border-white/70 bg-white/75 p-8 shadow-soft backdrop-blur-xl md:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-mist">Email</p>
          <a
            href="mailto:aadhavansakthivel5@gmail.com"
            className="mt-4 inline-block text-2xl font-semibold text-ink"
          >
            aadhavansakthivel5@gmail.com
          </a>
          <p className="mt-6 leading-8 text-mist">
            I prefer thoughtful, direct communication and enjoy conversations
            about product design, software systems, and practical AI tools.
          </p>
        </div>
      </section>

    </>
  );
}
