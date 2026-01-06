"use client";
import { serviceData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SliderServices = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="services-swiper w-full pb-14"
      >
        {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="card-hover px-6 py-6 h-full min-h-[340px] flex flex-col
              group cursor-pointer"
            >
              <div className="mb-4 text-5xl text-tech-500 group-hover:text-intelligent-500 transition-colors duration-300">
                {item.icon}
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-tech-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed flex-1 mb-4">
                  {item.description}
                </p>

                {/* Subtle indicator */}
                <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                  <span>Solución completa</span>
                  <span className="text-tech-500 group-hover:text-intelligent-500 transition-colors">
                    →
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
