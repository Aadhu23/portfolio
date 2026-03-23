import BackHome from "../components/back-home";

export default function ResumePage() {
  return (
    <>
      <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.28em] text-mist">Resume</p>
          <h1 className="font-serif text-4xl leading-none tracking-[-0.03em] text-ink md:text-6xl">
            Experience, skills, and direction.
          </h1>
          <p className="max-w-xl leading-8 text-mist">
            This page works as a clean resume-style summary of my profile,
            project interests, and technical focus.
          </p>
          <BackHome />
        </div>

        <div className="rounded-shell border border-white/70 bg-white/75 p-8 shadow-soft backdrop-blur-xl md:p-10">
          <p className="leading-8 text-mist">
            Focused on computer vision, backend systems, and productivity-led
            software. Interested in building products that combine technical
            depth with calm, minimal user experience.
          </p>
          <p className="mt-4 leading-8 text-mist">
            Tools and areas I work with include Python, C++, JavaScript,
            FastAPI, OpenCV, YOLO, and interface-driven product design.
          </p>
        </div>
      </section>
    </>
  );
}
