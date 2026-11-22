import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section__title">Skills</h2>
      </div>
      <Swiper
        className="skills__swiper"
        modules={[Autoplay, FreeMode]}
        loop
        freeMode
        grabCursor
        speed={3500}
        slidesPerView={2.2}
        spaceBetween={16}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          480: { slidesPerView: 3.2 },
          768: { slidesPerView: 4.5 },
          1100: { slidesPerView: 6 },
        }}
      >
        {skills.map(({ name, icon: Icon, color }) => (
          <SwiperSlide key={name}>
            <div className="skill-card">
              <Icon size={44} color={color} />
              <span>{name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
