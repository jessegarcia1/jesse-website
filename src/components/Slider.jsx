import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../SliderConstants";

const Slider = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mb-24 mt-24"> My Projects!</h1>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%] cursor-grab"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-black rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-auto">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-green-600 group-hover:text-green-400 w-[32px] h-[32px]" />
                <div className="bg-green-400 group-hover:bg-green-300 bg-opacity-90 w-11/12 rounded-xl p-6 shadow-xl">
                  <h1 className="text-base sm:text-lg lg:text-2xl font-bold">
                    {item.title}{" "}
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg">
                    {item.content}{" "}
                  </p>
                </div>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-green-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div class="bg-gradient-to-b from-white to-green-300 h-40 w-screen z-10"></div>
    </div>
  );
};

export default Slider;
