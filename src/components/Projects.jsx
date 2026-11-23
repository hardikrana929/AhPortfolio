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
      <div className="wrap">
        <h2 className="section-title">Projects</h2>
      </div>
      <VerticalTimeline lineColor="var(--line)">
        {projects.map((p) => (
          <VerticalTimelineElement key={p.title} icon={<FaCode />}>
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="mb-3 h-44 w-full rounded-xl object-cover sm:h-48"
            />
            <h3 className="!text-xl !font-bold">{p.title}</h3>
            <h4 className="!mt-0 !text-sm !font-semibold text-accent">{p.subtitle}</h4>
            <p>{p.description}</p>
            {p.points && (
              <ul className="my-2 ml-5 list-disc text-sm text-muted">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
            {p.tags.length > 0 && (
              <div className="my-2 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            )}
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm !text-[var(--on-accent)] no-underline"
            >
              {p.linkLabel} <FaExternalLinkAlt size={12} />
            </a>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
