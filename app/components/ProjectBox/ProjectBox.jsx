"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ProjectBox = ({ images, title, description }) => {
  console.log(images);
  return (
    <div className="relative w-full space-y-5">
      <div className="block group w-full rounded-xl overflow-hidden border">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index.toString()}>
              <Image
                src={image}
                alt={title || ""}
                width={1000}
                height={1000}
                unoptimized
                className="w-full h-full object-contain rounded-xl overflow-hidden"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative w-full space-y-2">
        <h4 className="text-white text-xl font-semibold ">{title}</h4>
        <p className="text-sm font-normal line-clamp-6">{description}</p>
        <button
          type="button"
          className="inline-flex items-center gap-2 text-xs text-purple-700 hover:text-white transition-all duration-300"
        >
          Read More <i className="fa-solid fa-chevron-right text-[10px]"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectBox;
