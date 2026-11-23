import { profile } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="wrap">
        <h2 className="section-title">About Me</h2>
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1.4fr] md:gap-10">
          <img
            src={profile.photo}
            alt={profile.name}
            className="glass mx-auto max-h-96 w-full max-w-sm object-cover p-2"
          />
          <div className="glass space-y-4 p-6 text-base leading-relaxed text-muted sm:p-7 sm:text-lg">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
