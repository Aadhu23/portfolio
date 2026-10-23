import BackHome from "../components/back-home";

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
    ]
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

export default function ProjectsPage() {
  return (
    <>
      <section className="space-y-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-mist">Projects</p>
            <h1 className="mt-3 font-serif text-4xl leading-none tracking-[-0.03em] text-ink md:text-6xl">
              Selected work.
            </h1>
          </div>
          <BackHome />
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
              <h2 className="mt-4 text-2xl font-semibold text-ink">{project.title}</h2>
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
    </>
  );
}
