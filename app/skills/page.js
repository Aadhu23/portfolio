import BackHome from "../components/back-home";

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

export default function SkillsPage() {
  return (
    <>
      <section className="space-y-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-mist">Skills</p>
            <h1 className="mt-3 font-serif text-4xl leading-none tracking-[-0.03em] text-ink md:text-6xl">
              Tools I work with.
            </h1>
          </div>
          <BackHome />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-shell border border-white/70 bg-white/75 p-8 shadow-soft backdrop-blur-xl"
            >
              <h2 className="text-2xl font-semibold text-ink">{group.title}</h2>
              <p className="mt-4 leading-8 text-mist">{group.items}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
