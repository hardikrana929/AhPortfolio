import { profile } from "../data.js";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center pb-10 pt-24">
      <div className="wrap grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="text-lg text-muted sm:text-xl">Hey, I am</p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <h2
            className="mx-auto my-3 w-fit bg-clip-text text-xl font-bold text-transparent sm:text-2xl lg:text-3xl md:mx-0"
            style={{ backgroundImage: "linear-gradient(90deg, var(--accent), var(--accent-2))" }}
          >
            {profile.title}
          </h2>
          <p className="mx-auto mb-7 max-w-lg text-muted md:mx-0">
            MERN stack developer building clean, responsive web apps. Currently
            interning at BrainyBeam, Ahmedabad.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#contact" className="btn btn-primary !text-[var(--on-accent)] no-underline">
              Hire Me
            </a>
            <a href="#projects" className="btn btn-ghost no-underline">
              View Projects
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img
            src={profile.photo}
            alt={profile.name}
            className="mx-auto aspect-square w-52 rounded-full object-cover sm:w-64 md:w-full md:max-w-sm"
            style={{ border: "8px solid var(--card-hi)", boxShadow: "var(--shadow)" }}
          />
        </div>
      </div>
    </section>
  );
}
