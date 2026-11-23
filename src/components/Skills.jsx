import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <h2 className="section-title">Skills</h2>
      </div>
      <Swiper
        className="skills-swiper !px-4 !pb-6 !pt-2"
        modules={[Autoplay, FreeMode]}
        loop
        freeMode
        grabCursor
        speed={3500}
        slidesPerView={2.2}
        spaceBetween={14}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
        breakpoints={{
          480: { slidesPerView: 3.2 },
          768: { slidesPerView: 4.5, spaceBetween: 16 },
          1100: { slidesPerView: 6, spaceBetween: 18 },
        }}
      >
        {skills.map(({ name, icon: Icon, color }) => (
          <SwiperSlide key={name}>
            <div className="glass flex h-28 flex-col items-center justify-center gap-3 font-semibold transition hover:!border-[var(--accent)] sm:h-32">
              <Icon size={40} color={color} />
              <span className="text-sm sm:text-base">{name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
