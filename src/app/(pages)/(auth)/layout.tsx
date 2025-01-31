"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-[100vh]">
      <div className="w-[50%]">{children}</div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-[50%] border rounded-ss-3xl rounded-es-3xl"
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ type: "bullets", clickable: true }}
        loop
        autoplay={{
          delay: 3000, // Time in milliseconds between slides
          disableOnInteraction: false, // Keep autoplay active after user interaction
        }}
      >
        {[
          "/images/flagboy.jpg",
          "/images/irev.jpg",
          "/images/vote.jpg",
          "/images/voters.jpg",
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute left-0 top-0 h-full w-full"
              style={{
                background: `url(${item}) center center / cover scroll no-repeat`,
              }}
            ></div>
            <div className="absolute left-0 top-0 h-full w-full bg-black opacity-30"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
