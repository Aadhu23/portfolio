import Link from "next/link";

export default function BackHome() {
  return (
    <Link
      href="/"
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white/85 px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
    >
      Back to Home
    </Link>
  );
}
