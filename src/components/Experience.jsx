import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { experiences } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="wrap">
        <h2 className="section-title">Experience</h2>
        <div
          className="relative mx-auto ml-5 max-w-3xl border-l-[3px] pl-6 sm:mx-auto sm:pl-8"
          style={{ borderColor: "var(--line)" }}
        >
          {experiences.map((e) => (
            <article key={e.role + e.company} className="relative mb-7 last:mb-0">
              <span
                className="absolute -left-[46px] top-4 grid h-9 w-9 place-items-center rounded-full text-sm sm:-left-[54px]"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                  color: "var(--on-accent)",
                }}
              >
                <FaBriefcase />
              </span>
              <div className="glass p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-lg font-bold sm:text-xl">{e.role}</h3>
                  {e.current && (
                    <span className="rounded-full bg-green-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                      Current
                    </span>
                  )}
                </div>
                <p className="font-semibold text-accent">{e.company}</p>
                <p className="my-1 mb-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <FaCalendarAlt /> {e.period}
                  </span>
                  {e.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <FaMapMarkerAlt /> {e.location}
                    </span>
                  )}
                </p>
                <p className="text-muted">{e.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
