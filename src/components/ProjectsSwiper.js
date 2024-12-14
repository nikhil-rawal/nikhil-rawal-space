import React, { useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";

const ProjectsSwiper = ({ screenshots, uniqueID }) => {
  useEffect(() => {
    // Log to ensure the buttons exist
    console.log(document.querySelector(`.swiper-button-prev-${uniqueID}`));
    console.log(document.querySelector(`.swiper-button-next-${uniqueID}`));
  }, [uniqueID]);

  return (
    <div className="relative my-4 group">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.swiper-button-next-${uniqueID}`,
          prevEl: `.swiper-button-prev-${uniqueID}`,
        }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-lg shadow-md"
      >
        {screenshots?.length > 0 &&
          screenshots.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Project Screenshot ${index + 1}`}
                className="w-full object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <button
        className={`swiper-button-prev-${uniqueID} absolute top-1/2 left-2 -translate-y-1/2 text-lg p-2 bg-gray-200 dark:bg-gray-500 rounded-full hover:scale-105 shadow-md z-10`}
      >
        ◀
      </button>
      <button
        className={`swiper-button-next-${uniqueID} absolute top-1/2 right-2 -translate-y-1/2 text-lg p-2 bg-gray-200 dark:bg-gray-500 rounded-full hover:scale-105 shadow-md z-10`}
      >
        ▶
      </button>
    </div>
  );
};

export default ProjectsSwiper;
