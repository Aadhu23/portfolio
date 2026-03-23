import BackHome from "../components/back-home";

export default function AboutPage() {
  return (
    <>
      <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.28em] text-mist">About</p>
          <h1 className="font-serif text-4xl leading-none tracking-[-0.03em] text-ink md:text-6xl">
            Clear ideas, elegant execution.
          </h1>
          <p className="max-w-xl leading-8 text-mist">
            I enjoy building digital products that balance technical depth with
            visual simplicity. My work focuses on computer vision, backend
            systems, and practical tools that solve real problems without adding
            friction.
          </p>
          <BackHome />
        </div>

        <div className="rounded-shell border border-white/70 bg-white/75 p-8 shadow-soft backdrop-blur-xl md:p-10">
          <p className="leading-8 text-mist">
            I am especially interested in software that feels thoughtful from
            both sides: strong engineering underneath and a clean, professional
            experience on the surface.
          </p>
          <p className="mt-4 leading-8 text-mist">
            Whether I am working on productivity platforms, machine-learning
            workflows, or lightweight interfaces, I aim to keep the end result
            minimal, polished, and genuinely useful.
          </p>
        </div>
      </section>
    </>
  );
}
