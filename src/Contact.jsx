"use client";

export default function ContactSection() {
  return (
    <div
      id="contact"
      className="isolate bg-white px-6 py-52 sm:py-60 lg:px-8 relative z-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-15rem] sm:top-[-20rem] -z-20 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-20 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Let’s Connect
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          If you're interested in working together or just want to say hi, feel
          free to reach out!
        </p>
        <div className="mt-10 text-left space-y-4 text-base text-gray-700">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:vincentgteodoro@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              vincentgteodoro@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+1234567890"
              className="text-indigo-600 hover:underline"
            >
              +639164180808
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              linkedin.com/in/yourprofile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
