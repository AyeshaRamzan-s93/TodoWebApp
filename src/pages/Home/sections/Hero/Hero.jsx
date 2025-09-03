

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import appleImg from "../../../../assets/Apple.svg"; 
import heroImg from "../../../../assets/heroImg.svg"; 
import arrowIcon from "../../../../assets/icons arrow-right.svg"; 

import "./Hero.css";

const slides = [
  { title: "iPhone 14 Series", heading: "Up to 10% off Voucher" },
  { title: "iPhone 14 Pro", heading: "Best Deal Today" },
  { title: "iPhone 14 Max", heading: "Limited Time Offer" },
  { title: "iPhone 14 Mini", heading: "Special Discount" },
  { title: "iPhone 14 Ultra", heading: "Save Big on Your Upgrade" }
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide">
                <div className="hero-left">
                  <div className="hero-top">
                    <img src={appleImg} alt="Apple Logo" className="hero-apple" />
                    <span className="title">{slide.title}</span>
                  </div>
                  <h1 className="hero-heading">{slide.heading}</h1>
                  <div className="shop-now">
                    <span>Shop Now</span>
                    <img src={arrowIcon} alt="arrow" className="hero-arrow" />
                  </div>
                </div>
                <div className="hero-center">
                  <img src={heroImg} alt="Hero" />
                </div>
                 <div className="hero-dots"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
