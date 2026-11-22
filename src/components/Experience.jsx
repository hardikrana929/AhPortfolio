import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { experiences } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Experience</h2>
        <div className="exp">
          {experiences.map((e) => (
            <article key={e.role + e.company} className="exp__item">
              <span className="exp__dot">
                <FaBriefcase />
              </span>
              <div className="exp__card">
                <div className="exp__head">
                  <h3>{e.role}</h3>
                  {e.current && <span className="badge">Current</span>}
                </div>
                <p className="exp__company">{e.company}</p>
                <p className="exp__meta">
                  <span>
                    <FaCalendarAlt /> {e.period}
                  </span>
                  {e.location && (
                    <span>
                      <FaMapMarkerAlt /> {e.location}
                    </span>
                  )}
                </p>
                <p>{e.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
