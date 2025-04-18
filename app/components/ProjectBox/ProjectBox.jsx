"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const ProjectBox = ({
  images,
  name,
  description,
  tech_stack,
  project_link,
}) => {
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
                alt={name || ""}
                width={1000}
                height={1000}
                unoptimized
                className="w-full h-full object-contain rounded-xl overflow-hidden"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative w-full space-y-4">
        <h4 className="text-white text-xl font-semibold ">{name}</h4>
        <p className="text-sm font-normal line-clamp-6">{description}</p>
        {project_link && (
          <div className="flex flex-wrap gap-2">
            {project_link?.map((item, index) => (
              <Link
                href={item?.link}
                target="_blank"
                key={index.toString()}
                className="inline-flex items-center gap-2 relative py-1 px-3 bg-dark hover:bg-purple-700 hover:text-white text-base font-normal rounded-md transition-all duration-300"
              >
                <span>
                  {item?.type === "Github"
                    ? "Github"
                    : item?.type === "Live"
                    ? "Live"
                    : ""}
                </span>
                <span>
                  {item?.type === "Github" ? (
                    <i className="fa-brands fa-github"></i>
                  ) : item?.type === "Live" ? (
                    <i className="fa-solid fa-fire"></i>
                  ) : (
                    ""
                  )}
                </span>
              </Link>
            ))}
          </div>
        )}
        {tech_stack && (
          <div className="flex flex-wrap gap-2">
            {tech_stack?.map((item, index) => (
              <div
                key={index.toString()}
                className="inline-block relative py-1 px-3 bg-dark text-sm font-normal rounded-md"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
