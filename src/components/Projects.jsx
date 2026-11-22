import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
      </div>
      <VerticalTimeline lineColor="var(--line)">
        {projects.map((p) => (
          <VerticalTimelineElement
            key={p.title}
            className="vt-element"
            contentStyle={{
              background: "var(--card)",
              color: "var(--text)",
              boxShadow: "var(--shadow)",
              border: "1px solid var(--border)",
            }}
            contentArrowStyle={{ borderRight: "20px solid var(--card)" }}
            iconStyle={{ background: "var(--accent)", color: "#fff" }}
            icon={<FaCode />}
          >
            <img className="vt-img" src={p.image} alt={p.title} loading="lazy" />
            <h3 className="vt-title">{p.title}</h3>
            <h4 className="vt-sub">{p.subtitle}</h4>
            <p>{p.description}</p>
            {p.points && (
              <ul className="vt-list">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
            {p.tags.length > 0 && (
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            )}
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary btn--sm"
            >
              {p.linkLabel} <FaExternalLinkAlt size={12} />
            </a>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
