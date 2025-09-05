
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./FlashSales.css";

import prevIcon from "../../../../assets/icons_arrow-left.svg";
import nextIcon from "../../../../assets/nextIcon.svg";
import timerDot from "../../../../assets/FlashSmall.png";

import gamepadImg from "../../../../assets/gamepad.png";
import keyboardImg from "../../../../assets/Keyboard.png";
import monitorImg from "../../../../assets/Monitor.png";
import chairImg from "../../../../assets/chair.png";

import wishlistIcon from "../../../../assets/Fill Heart.svg";
import eyeIcon from "../../../../assets/Fill Eye.svg";
import starFull from "../../../../assets/Five star.svg";
import starHalf from "../../../../assets/Four Half Star.svg";

export default function FlashSales() {
  return (
    <section className="sales">
      <div className="sales-inner">
        {/* Top Row */}
        <div className="sales-top">
          <div className="sales-left">
            <div className="sales-heading">
              <img src={timerDot} alt="dot" className="sales-dot" />
              <h2>Flash Sales</h2>
            </div>

            <div className="sales-timer">
              <div>
                <p>Days</p>
                <p className="sales-time-num">03</p>
              </div>
              <span>:</span>
              <div>
                <p>Hours</p>
                <p className="sales-time-num">23</p>
                
              </div>
              <span>:</span>
              <div>
                <p>Minutes</p>
                <p className="sales-time-num">19</p>
                
              </div>
              <span>:</span>
              <div>
                <p>Seconds</p>
                <p className="sales-time-num">56</p>   
              </div>
            </div>
          </div>

          <div className="sales-arrows">
            <button className="arrow-btn sales-prev">
              <img src={prevIcon} alt="Prev" />
            </button>
            <button className="arrow-btn sales-next">
              <img src={nextIcon} alt="Next" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: ".sales-prev", nextEl: ".sales-next" }}
          breakpoints={{
            1200: { slidesPerView: 4.5, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            0: { slidesPerView: 1, spaceBetween: 15 },
          }}
          className="sales-slider"
        >
          {/* Card 1 */}
          <SwiperSlide>
            <div className="sale-card">
              <div className="sale-img">
                <span className="sale-badge">-40%</span>
                <div className="sale-icons">
                  <img src={wishlistIcon} alt="Wishlist" />
                  <img src={eyeIcon} alt="View" />
                </div>
                <img src={gamepadImg} alt="Gamepad" />
              </div>
              <div className="sale-info">
                <p className="sale-title">HAVIT HV-G92 Gamepad</p>
                <p className="sale-price">
                  $120 <span className="old-price">$160</span>
                </p>
                <div className="sale-rating">
                  <img src={starFull} alt="stars" />
                  <span>(88)</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Card 2 */}
          <SwiperSlide>
            <div className="sale-card">
              <div className="sale-img">
                <span className="sale-badge">-35%</span>
                <div className="sale-icons">
                  <img src={wishlistIcon} alt="Wishlist" />
                  <img src={eyeIcon} alt="View" />
                </div>
                <img src={keyboardImg} alt="Keyboard" />
                <div className="sale-add">Add to Cart</div>
              </div>
              <div className="sale-info">
                <p className="sale-title">AK-900 Wired Keyboard</p>
                <p className="sale-price">
                  $960 <span className="old-price">$1160</span>
                </p>
                <div className="sale-rating">
                  <img src={starHalf} alt="stars" />
                  <span>(75)</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Card 3 */}
          <SwiperSlide>
            <div className="sale-card">
              <div className="sale-img">
                <span className="sale-badge">25%</span>
                <div className="sale-icons">
                  <img src={wishlistIcon} alt="Wishlist" />
                  <img src={eyeIcon} alt="View" />
                </div>
                <img src={monitorImg} alt="Monitor" />
              </div>
              <div className="sale-info">
                <p className="sale-title">AK-900 Wired Keyboard</p>
                <p className="sale-price">
                  $370 <span className="old-price">$400</span>
                </p>
                <div className="sale-rating">
                  <img src={starFull} alt="stars" />
                  <span>(99)</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Card 4 */}
          <SwiperSlide>
            <div className="sale-card">
              <div className="sale-img">
                <span className="sale-badge">25%</span>
                <div className="sale-icons">
                  <img src={wishlistIcon} alt="Wishlist" />
                  <img src={eyeIcon} alt="View" />
                </div>
                <img src={chairImg} alt="Chair" />
              </div>
              <div className="sale-info">
                <p className="sale-title">S-Series Comfort Chair</p>
                <p className="sale-price">
                  $375 <span className="old-price">$400</span>
                </p>
                <div className="sale-rating">
                  <img src={starHalf} alt="stars" />
                  <span>(45)</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Card 5 */}
          <SwiperSlide>
            <div className="sale-card">
              <div className="sale-img">
                <span className="sale-badge">25%</span>
                <div className="sale-icons">
                  <img src={wishlistIcon} alt="Wishlist" />
                  <img src={eyeIcon} alt="View" />
                </div>
                <img src={chairImg} alt="Chair" />
              </div>
              <div className="sale-info">
                <p className="sale-title">S-Series Comfort Chair </p>
                <p className="sale-price">
                  $375 <span className="old-price">$400</span>
                </p>
                <div className="sale-rating">
                  <img src={starFull} alt="stars" />
                  <span>(99)</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Button */}
        <div className="sales-btn">
          <button className="view-all-btn">View All Products</button>
        </div>

        <hr className="sales-line" />
      </div>
    </section>
  );
}
