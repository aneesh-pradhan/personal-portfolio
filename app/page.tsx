export default function Home() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Intro */}
      <section className="pt-32 pb-24" id="intro">
        <div className="px-6">
          <h1 className="heading-serif text-5xl md:text-6xl font-medium tracking-tight">
            Aneesh Pradhan
          </h1>
          <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
            Computer Engineering student focused on embedded systems,
            low-level software, and hardware–software integration.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 border-t border-neutral-200" id="about">
        <div className="px-6">
          <h2 className="heading-serif text-2xl font-medium tracking-tight">
            About
          </h2>
          <p className="mt-6 text-neutral-700 leading-relaxed">
            I am a computer engineering student interested in how software
            interacts with hardware at low levels, with particular interest
            in embedded systems, computer architecture, and operating systems.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 border-t border-neutral-200" id="projects">
        <div className="px-6">
          <h2 className="heading-serif text-2xl font-medium tracking-tight">
            Projects
          </h2>

          <ul className="mt-10 space-y-16">
            <li>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="text-lg font-medium text-neutral-900">
                  Raspberry Pi Pico Dance Pad
                </h3>
                <span className="text-sm text-neutral-500">
                  Embedded Systems
                </span>
              </div>

              <p className="mt-2 text-neutral-700 leading-relaxed">
                Designed and implemented a USB HID input device on a Raspberry
                Pi Pico, interfacing force-sensitive resistors via GPIO.
                Implemented debouncing and thresholding logic to ensure
                reliable real-time input under hardware constraints.
              </p>

              <p className="mt-2 text-sm text-neutral-500">
                C · CircuitPython · GPIO · USB HID · Embedded Systems
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Experience & Coursework */}
<section className="py-20 border-t border-neutral-200" id="experience">
  <div className="px-6">
    <h2 className="heading-serif text-2xl font-medium tracking-tight">
      Experience & Coursework
    </h2>

    <ul className="mt-10 space-y-16">
      {/* Coursework */}
      <li>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
          <h3 className="text-lg font-medium text-neutral-900">
            Computer Engineering Coursework
          </h3>
          <span className="text-sm text-neutral-500">
            Undergraduate Program
          </span>
        </div>

        <p className="mt-2 text-neutral-700 leading-relaxed">
          Completed coursework emphasizing the interaction between hardware
          and software, including digital logic design, computer architecture,
          embedded systems, and operating systems.
        </p>

        <p className="mt-2 text-sm text-neutral-500">
          Digital Logic · Computer Architecture · Embedded Systems ·
          Operating Systems · Data Structures
        </p>
      </li>

      {/* Independent work */}
      <li>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
          <h3 className="text-lg font-medium text-neutral-900">
            Independent Technical Projects
          </h3>
          <span className="text-sm text-neutral-500">
            Ongoing
          </span>
        </div>

        <p className="mt-2 text-neutral-700 leading-relaxed">
          Designed and implemented embedded and low-level software projects
          outside of coursework, focusing on microcontrollers, Linux-based
          systems, and hardware–software interfaces.
        </p>

        <p className="mt-2 text-sm text-neutral-500">
          C/C++ · Python · Linux · Microcontrollers · Toolchains · GPIO
        </p>
      </li>
    </ul>
  </div>
</section>


      {/* Skills */}
      <section className="py-20 border-t border-neutral-200" id="skills">
        <div className="px-6">
          <h2 className="heading-serif text-2xl font-medium tracking-tight">
            Skills
          </h2>
          <p className="mt-6 text-neutral-700 leading-relaxed">
            C/C++, Python, Embedded Linux, GPIO, USB, Digital Logic,
            Verilog, RISC-V, Linux tooling
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 border-t border-neutral-200" id="contact">
        <div className="px-6">
          <h2 className="heading-serif text-2xl font-medium tracking-tight">
            Contact
          </h2>
          <p className="mt-6 text-neutral-700">
            Email:{" "}
            <a
              href="mailto:aneesh@apradhan.dev"
              className="text-blue-600 hover:text-blue-700"
            >
              aneesh@apradhan.dev
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
