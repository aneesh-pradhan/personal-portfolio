export default function Blog() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="pt-32 pb-24">
        <div className="px-6">
          <h1 className="heading-serif text-4xl font-medium tracking-tight">
            Blog
          </h1>
          <p className="mt-6 text-neutral-600 leading-relaxed max-w-2xl">
            Technical notes, project write-ups, and explanations of systems
            I’ve built or studied. Written as documentation rather than
            articles.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-neutral-200">
        <div className="px-6">
          <ul className="space-y-12">
            <li>
              <a
                href="/blog/pico-dance-pad"
                className="block group"
              >
                <h2 className="heading-serif text-xl font-medium text-neutral-900 group-hover:underline">
                  Building a USB HID Dance Pad with the Raspberry Pi Pico
                </h2>
                <p className="mt-2 text-neutral-600 leading-relaxed max-w-2xl">
                  A breakdown of GPIO input handling, debouncing, and USB HID
                  emulation on a microcontroller.
                </p>
                <p className="mt-1 text-sm text-neutral-500">
                  Embedded Systems · USB · GPIO
                </p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
