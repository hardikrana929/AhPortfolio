import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaExpand,
  FaTimes,
} from "react-icons/fa";
import { certifications } from "../data.js";

function Preview({ c }) {
  return c.image ? (
    <img src={c.image} alt={`${c.title} certificate`} loading="lazy" />
  ) : (
    <div className="cert__placeholder">
      <FaCertificate />
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
    <section id="certifications" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Certifications</h2>

        <Swiper
          className="cert-swiper"
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, pauseOnMouseEnter: true, disableOnInteraction: false }}
          loop={certifications.length > 3}
          centerInsufficientSlides
          grabCursor
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            700: { slidesPerView: 2 },
            1050: { slidesPerView: 3 },
          }}
        >
          {certifications.map((c) => (
            <SwiperSlide key={c.title}>
              <article className="cert">
                <button
                  type="button"
                  className="cert__preview"
                  onClick={() => setActive(c)}
                  aria-label={`Preview ${c.title}`}
                >
                  <Preview c={c} />
                  <span className="cert__zoom">
                    <FaExpand size={11} /> Preview
                  </span>
                </button>

                <div className="cert__body">
                  <h3>{c.title}</h3>
                  <p className="cert__issuer">
                    {c.issuer} · {c.date}
                  </p>
                  <p>{c.description}</p>
                  {c.credentialId && (
                    <p className="cert__id">Credential ID: {c.credentialId}</p>
                  )}
                  {c.highlights?.length > 0 && (
                    <div className="tags">
                      {c.highlights.map((h) => (
                        <span key={h}>{h}</span>
                      ))}
                    </div>
                  )}
                  {c.link && (
                    <a href={c.link} target="_blank" rel="noreferrer" className="cert__link">
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
        <div className="modal" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <div className="modal__box" onClick={(e) => e.stopPropagation()}>
            <button
              className="icon-btn modal__close"
              onClick={() => setActive(null)}
              aria-label="Close preview"
            >
              <FaTimes />
            </button>
            <div className="cert__preview" style={{ cursor: "default" }}>
              <Preview c={active} />
            </div>
            <div className="modal__info">
              <h3>{active.title}</h3>
              <p className="cert__issuer">
                {active.issuer} · {active.date}
              </p>
              <p>{active.description}</p>
              {active.credentialId && (
                <p className="cert__id">Credential ID: {active.credentialId}</p>
              )}
              {active.link && (
                <a href={active.link} target="_blank" rel="noreferrer" className="cert__link">
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
