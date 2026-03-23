import "./globals.css";
import SiteShell from "./components/site-shell";

export const metadata = {
  title: "Aadhavan Sakthivel | Portfolio",
  description:
    "Minimal portfolio for Aadhavan Sakthivel featuring software, AI, and data-driven projects."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-porcelain text-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
