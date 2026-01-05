export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white text-neutral-900">
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* Prose wrapper */}
        <div className="prose prose-neutral max-w-none">
          {children}
        </div>
      </article>
    </main>
  );
}
