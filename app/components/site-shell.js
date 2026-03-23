import MenuToggle from "./menu-toggle";

export default function SiteShell({ children }) {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.96),transparent_28%),linear-gradient(180deg,#fcfbf8_0%,#f5f2eb_100%)]">
      <div className="mx-auto w-[min(1120px,calc(100%-1.5rem))] py-6 md:w-[min(1120px,calc(100%-2rem))] md:py-8">
        <header className="flex flex-col gap-5 pb-7 md:flex-row md:items-center md:justify-between">
          <MenuToggle />
        </header>

        {children}

        <footer className="pt-8 text-xs uppercase tracking-[0.26em] text-mist">
          <p>&copy; {year} Aadhavan Sakthivel</p>
        </footer>
      </div>
    </main>
  );
}
