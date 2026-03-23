import BackHome from "../components/back-home";

export default function ContactPage() {
  return (
    <>
      <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.28em] text-mist">Contact</p>
          <h1 className="font-serif text-4xl leading-none tracking-[-0.03em] text-ink md:text-6xl">
            Let&apos;s connect.
          </h1>
          <p className="max-w-xl leading-8 text-mist">
            If you would like to collaborate, discuss an idea, or talk about a
            project, feel free to reach out.
          </p>
          <BackHome />
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
