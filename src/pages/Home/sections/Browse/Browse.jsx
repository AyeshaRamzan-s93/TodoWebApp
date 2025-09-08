

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./Browse.css";

// import your icons here
import phone from "../../../../assets/phone.svg";
import computer from "../../../../assets/computer.svg";
import watch from "../../../../assets/smartWatch.svg";
import camera from "../../../../assets/camera.svg";
import headphones from "../../../../assets/headphone.svg";
import gaming from "../../../../assets/gamePad.svg";
import smallIcon from "../../../../assets/BrowseIcon.svg";
import prevIcon from "../../../../assets/icons_arrow-left.svg";
import nextIcon from "../../../../assets/nextIcon.svg";

export default function Browse() {
  const items = [
    { img: phone, label: "Phones" },
    { img: computer, label: "Computer" },
    { img: watch, label: "SmartWatch" },
    { img: camera, label: "Camera" , special: true},
    { img: headphones, label: "Headphones" },
    { img: gaming, label: "Gaming" },
  ];

  return (
    <section className="browse">
      <div className="browse-inner">
        {/* Top Row */}
        <div className="browse-top">
          <div className="browse-left">
            <img src={smallIcon} alt="icon" className="small-icon" />
            <h2>Browse By Category</h2>
          </div>
          <div className="browse-arrows">
            <button className="arrow-btn browse-prev">
              <img src={prevIcon} alt="Prev" />
            </button>
            <button className="arrow-btn browse-next">
              <img src={nextIcon} alt="Next" />
            </button>
          </div>
        </div>

        {/* Swiper Row */}
        <Swiper
          modules={[Navigation]}
          loop= {true}
          navigation={{ prevEl: ".browse-prev", nextEl: ".browse-next" }}
          breakpoints={{
            1200: { slidesPerView: 5, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 25 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            0: { slidesPerView: 2, spaceBetween: 15 },
          }}
          className="browse-slider"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="browse-card">
                <img src={item.img} alt={item.label} />
                <p>{item.label}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Line */}
        <hr className="browse-line" />
      </div>
    </section>
  );
}
