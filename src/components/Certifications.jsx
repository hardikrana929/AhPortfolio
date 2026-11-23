import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCertificate, FaExternalLinkAlt, FaExpand, FaTimes } from "react-icons/fa";
import { certifications } from "../data.js";

function Preview({ c }) {
  return c.image ? (
    <img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="h-full w-full object-cover" />
  ) : (
    <div
      className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center font-bold text-white"
      style={{ background: "linear-gradient(135deg, #2f5bea, #8b5cf6)" }}
    >
      <FaCertificate className="text-4xl" />
      <span>{c.title}</span>
    </div>
  );
}

export default function Certifications() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="certifications" className="section section-alt">
      <div className="wrap">
        <h2 className="section-title">Certifications</h2>

        <Swiper
          className="cert-swiper !px-2 !pb-12 !pt-2"
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, pauseOnMouseEnter: true, disableOnInteraction: false }}
          loop={certifications.length > 3}
          centerInsufficientSlides
          grabCursor
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{ 700: { slidesPerView: 2 }, 1050: { slidesPerView: 3 } }}
        >
          {certifications.map((c) => (
            <SwiperSlide key={c.title}>
              <article className="glass flex h-full flex-col gap-2 p-4 transition hover:-translate-y-1 hover:!border-[var(--accent)]">
                <button
                  type="button"
                  onClick={() => setActive(c)}
                  aria-label={`Preview ${c.title}`}
                  className="group relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-xl"
                >
                  <div className="h-full w-full transition duration-500 group-hover:scale-105">
                    <Preview c={c} />
                  </div>
                  <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-xs text-white">
                    <FaExpand size={11} /> Preview
                  </span>
                </button>

                <div className="flex flex-1 flex-col gap-1.5">
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="text-sm font-semibold text-accent">
                    {c.issuer} · {c.date}
                  </p>
                  <p className="text-sm text-muted">{c.description}</p>
                  {c.credentialId && <p className="text-xs text-muted">Credential ID: {c.credentialId}</p>}
                  {c.highlights?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {c.highlights.map((h) => (
                        <span key={h} className="chip">
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 pt-2 font-semibold"
                    >
                      View certificate <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[500] grid place-items-center bg-black/55 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass relative max-h-[92vh] w-full max-w-3xl overflow-auto p-4 sm:p-5"
            style={{ background: "var(--modal)" }}
          >
            <button
              className="icon-btn absolute right-3 top-3 z-10"
              onClick={() => setActive(null)}
              aria-label="Close preview"
            >
              <FaTimes />
            </button>
            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
              <Preview c={active} />
            </div>
            <div className="mt-3 space-y-1.5">
              <h3 className="text-xl font-bold">{active.title}</h3>
              <p className="font-semibold text-accent">
                {active.issuer} · {active.date}
              </p>
              <p className="text-muted">{active.description}</p>
              {active.credentialId && <p className="text-sm text-muted">Credential ID: {active.credentialId}</p>}
              {active.link && (
                <a href={active.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold">
                  Open original <FaExternalLinkAlt size={11} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
