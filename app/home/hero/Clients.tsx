/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: false,
    accessibility: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 760,

        settings: {
          slidesToShow: 3.5,
        },
      },
    ],
  };
  const clientsImages = [
    'marina',
    // 'mercedes', image doesn't look
    'yamaha',
    'mtn',
    'ics',
    'koudjis',
    'nissan',
    'peugeot',
    'starbow',
    'ericsson',
  ];

  return (
    <div className="mt-[42px] ">
      <p className="font-semibold text-lg opacity-65 md:pl-[24px]">
        Trusted by
      </p>
      <Slider
        {...settings}
        className=" lg:max-w-[100vw] md:max-w-[80vw] max-w-[90vw] mt-[14px] px-[10px] bg-transparent "
      >
        {clientsImages.map((img, i) => (
          <div
            className={`mx-[20px!important] min-w-[80px] outline-none`}
            key={img}
          >
            <Image
              draggable={false}
              width={100}
              height={100}
              alt={img}
              src={require(`./images/${img}.png`)}
              className="rounded-box max-sm:w-auto w-[100px] "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
