"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import Member from "./member";

import "swiper/css";
import { about } from "@/constants";
import { TriangleArrowIcon } from "@/assets/icons";

const AboutMembers = () => {
  const members = about.members.members;

  const middleMemberIndex = Math.round(members.length / 2);

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-light text-xl sm:text-2xl lg:text-3xl font-semibold text-center lg:text-start">
          {about.members.title}
        </h2>

        <div className="flex items-center gap-2 sm:gap-x-3">
          <button className="swiper-button-prev">
            <Image
              src={TriangleArrowIcon}
              alt="triangle"
              width={30}
              height={30}
              className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 rotate-180"
            />
          </button>

          <button className="swiper-button-next">
            <Image
              src={TriangleArrowIcon}
              alt="triangle"
              width={30}
              height={30}
              className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8"
            />
          </button>
        </div>
      </div>

      <Swiper
        loop
        className="mt-5"
        slidesPerView={1}
        spaceBetween={50}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Autoplay]}
      >
        {members.slice(0, middleMemberIndex).map((member, index) => (
          <SwiperSlide key={index}>
            <Member
              name={member.name}
              role={member.role}
              image={member.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        loop
        dir="rtl"
        className="mt-10"
        slidesPerView={1}
        spaceBetween={50}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Autoplay]}
      >
        {members
          .slice(middleMemberIndex, members.length - 1)
          .map((member, index) => (
            <SwiperSlide key={index}>
              <Member
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default AboutMembers;
