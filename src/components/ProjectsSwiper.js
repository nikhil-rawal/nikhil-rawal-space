import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";

const ProjectCard = ({ screenshots }) => {
  return (
    <div className="relative my-4 group">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-lg shadow-md"
      >
        {/* Dynamically render images */}
        {screenshots?.length > 0
          ? screenshots.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Project Screenshot ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </SwiperSlide>
            ))
          : [
              "https://via.placeholder.com/300x200?text=Screenshot+1",
              "https://via.placeholder.com/300x200?text=Screenshot+2",
            ].map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Placeholder Screenshot ${index + 1}`}
                  className="w-full object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev absolute top-1/2 left-2 -translate-y-1/2 text-lg p-2 text-black dark:text-white no-underline hover:no-underline">
        {/* &#9664; */}
      </button>
      <button className="swiper-button-next absolute top-1/2 right-2 -translate-y-1/2 text-lg p-2 text-black dark:text-white no-underline hover:no-underline">
        {/* &#9654; */}
      </button>
    </div>
  );
};

export default ProjectCard;

// {
//   screenshots?.length > 0
//     ? screenshots.map((src, index) => (
//         <SwiperSlide key={index}>
//           <img
//             src={src}
//             alt={`Project Screenshot ${index + 1}`}
//             className="w-full h-48 object-cover rounded-lg"
//           />
//         </SwiperSlide>
//       ))
//     : [
//         "https://via.placeholder.com/300x200?text=Screenshot+1",
//         "https://via.placeholder.com/300x200?text=Screenshot+2",
//       ].map((src, index) => (
//         <SwiperSlide key={index}>
//           <img
//             src={src}
//             alt={`Placeholder Screenshot ${index + 1}`}
//             className="w-full object-cover rounded-lg"
//           />
//         </SwiperSlide>
//       ));
// }
