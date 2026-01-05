import "./globals.css";

export const metadata = {
  title: "Aneesh Pradhan",
  description:
    "Computer Engineering student focused on embedded systems, low-level software, and hardware–software integration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-neutral-200">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <a
              href="/"
              className="text-sm font-medium tracking-tight text-neutral-900"
            >
              Aneesh Pradhan
            </a>

            <nav className="flex gap-6 text-sm text-neutral-600">
              <a href="#projects" className="hover:text-neutral-900">
                Projects
              </a>
              <a href="#skills" className="hover:text-neutral-900">
                Skills
              </a>
              <a href="#contact" className="hover:text-neutral-900">
                Contact
              </a>
              <a href="/blog" className="hover:text-neutral-900">
                Blog
              </a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="bg-white">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>

        {/* Footer */}
        <footer className="mt-32 border-t border-neutral-200">
          <div className="max-w-5xl mx-auto px-6 py-10 text-sm text-neutral-500">
            © {new Date().getFullYear()} Aneesh Pradhan
          </div>
        </footer>
      </body>
    </html>
  );
}
