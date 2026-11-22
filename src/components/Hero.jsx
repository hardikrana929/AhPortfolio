import { profile } from "../data.js";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__hi">Hey, I am</p>
          <h1>{profile.name}</h1>
          <h2 className="hero__role">{profile.title}</h2>
          <p className="hero__sub">
            MERN stack developer building clean, responsive web apps. Currently
            interning at BrainyBeam, Ahmedabad.
          </p>
          <div className="hero__btns">
            <a href="#contact" className="btn btn--primary">
              Hire Me
            </a>
            <a href="#projects" className="btn btn--ghost">
              View Projects
            </a>
          </div>
        </div>
        <div className="hero__photo">
          <img src={profile.photo} alt={profile.name} />
        </div>
      </div>
    </section>
  );
}
