// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

// Import Swiper modules
import { Autoplay } from "swiper/modules";

// Slide data
const slides = [
  { title: "First item", description: "Lorem ipsum", path: "/assets/images/pose-001.webp" },
  { title: "Second item", description: "Lorem ipsum", path: "/assets/images/pose-002.webp" },
  { title: "Third item", description: "Lorem ipsum", path: "/assets/images/demo3.jpg" },
];

export default function Sliders() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div style={{ textAlign: "center" }}>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <img
              src={slide.path}
              alt={slide.title}
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
