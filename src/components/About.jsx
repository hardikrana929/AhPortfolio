import { profile } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="about__grid">
          <div className="about__photo">
            <img src={profile.photo} alt={profile.name} />
          </div>
          <div className="about__text">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
