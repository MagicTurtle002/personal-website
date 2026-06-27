import { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import SectionHeader from "../../ui/SectionHeader";
import { publicationMaterials } from "../../../utils/constants";

function PublicationCard({ item, index, onClick }) {
  const gradientClass = item.accent ?? "from-slate-900 via-slate-700 to-slate-900";

  return (
    <Motion.button
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      type="button"
      onClick={onClick}
      className="group w-full overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-900/85 text-left shadow-sm transition-all duration-300 ease-out transform-gpu will-change-transform hover:-translate-y-1.5 hover:scale-[1.008] hover:border-blue-400/50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400/60"
    >
      <div className={`relative min-h-[220px] bg-gradient-to-br ${gradientClass} p-6 text-white`}>
        <div className="absolute inset-0 bg-white/10 transition-opacity duration-300 group-hover:bg-white/15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_35%)] opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            <span>{item.format}</span>
            <span>{item.year}</span>
          </div>

          <div>
            <p className="text-sm font-medium text-white/75">Publication Material</p>
            <h3 className="mt-2 max-w-sm text-3xl font-bold leading-tight">
              {item.title}
            </h3>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <p className="text-sm leading-relaxed text-slate-300">
          {item.description}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Audience
            </p>
            <p className="mt-2 text-sm font-medium text-slate-100">
              {item.audience}
            </p>
          </div>
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Tools
            </p>
            <p className="mt-2 text-sm font-medium text-slate-100">
              {item.tools.join(" • ")}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-700/70 bg-slate-800/70 p-4">
          <p className="text-sm leading-relaxed text-slate-300">{item.summary}</p>
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-blue-300">
          <span>Click to view details</span>
          <svg className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Motion.button>
  );
}

export default function PublicationsSection() {
  const [openPublicationId, setOpenPublicationId] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const selectedPublication = useMemo(
    () => publicationMaterials.find((item) => item.id === openPublicationId),
    [openPublicationId]
  );

  const slides = selectedPublication?.slides ?? [];

  useEffect(() => {
    setActiveSlideIndex(0);
  }, [openPublicationId]);

  const hasMultipleSlides = slides.length > 1;
  const activeSlide = slides[activeSlideIndex] ?? slides[0];
  const isPdfSlide = typeof activeSlide?.image === "string" && activeSlide.image.toLowerCase().endsWith(".pdf");

  const handlePreviousSlide = () => {
    setActiveSlideIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <section
      id="publications"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-28 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-7rem] top-16 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute right-[-6rem] top-1/3 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          subtitle="Publications"
          title="Designed to Read"
          highlight="Beautifully"
          description="A curated space for a brochure and publication materials for social media, both created in Canva and designed with the same care as your digital work."
          darkMode
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 sm:justify-items-center">
          {publicationMaterials.map((item, index) => (
            <PublicationCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setOpenPublicationId(item.id)}
            />
          ))}
        </div>
      </div>

      {selectedPublication && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/35 backdrop-blur-md"
          onClick={() => setOpenPublicationId(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative flex h-[92vh] w-[94vw] max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenPublicationId(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/80 p-3 text-slate-200 shadow-sm backdrop-blur-md transition hover:bg-slate-800"
              aria-label="Close gallery"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
              <button
                type="button"
                onClick={handlePreviousSlide}
                disabled={!hasMultipleSlides}
                className="absolute left-4 z-10 rounded-full border border-slate-700 bg-slate-900/85 p-3 text-slate-200 shadow-sm backdrop-blur-md transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNextSlide}
                disabled={!hasMultipleSlides}
                className="absolute right-4 z-10 rounded-full border border-slate-700 bg-slate-900/85 p-3 text-slate-200 shadow-sm backdrop-blur-md transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 6l6 6-6 6" />
                </svg>
              </button>

              {isPdfSlide ? (
                <object
                  data={activeSlide?.image}
                  type="application/pdf"
                  className="h-full w-full max-h-[calc(92vh-2rem)] max-w-full rounded-[1.5rem] bg-white"
                >
                  <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-slate-700 bg-slate-900 p-8 text-center text-slate-200">
                    <div>
                      <p className="text-lg font-semibold">PDF preview unavailable</p>
                      <p className="mt-2 text-sm text-slate-400">
                        Open the brochure directly in a new tab to view the full document.
                      </p>
                      <a
                        href={activeSlide?.image}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center rounded-full border border-blue-400/50 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-200 transition hover:bg-blue-400/20"
                      >
                        Open brochure PDF
                      </a>
                    </div>
                  </div>
                </object>
              ) : (
                <img
                  src={activeSlide?.image}
                  alt={activeSlide?.alt ?? selectedPublication.title}
                  className="h-full w-full max-h-[calc(92vh-2rem)] max-w-full rounded-[1.5rem] object-contain"
                />
              )}

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 shadow-sm backdrop-blur-md">
                {slides.map((slide, index) => (
                  <button
                    key={slide.alt ?? slide.image}
                    type="button"
                    onClick={() => setActiveSlideIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeSlideIndex ? "w-8 bg-blue-400" : "w-2.5 bg-slate-500"
                    }`}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}