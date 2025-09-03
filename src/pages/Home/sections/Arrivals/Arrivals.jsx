



import "./Arrivals.css";

import smallIcon from "../../../../assets/ArrivalTop.svg"
import ps5Img from "../../../../assets/Arrival1.svg";
import womenImg from "../../../../assets/Arrival2.svg";
import speakersImg from "../../../../assets/Arrival3.svg";
import perfumeImg from "../../../../assets/Arrival4.svg";

export default function Arrivals() {
  return (
    <section className="arrival">
      <div className="arrival-inner">
        
        <div className="arrival-header">
            <img src={smallIcon} alt="icon" className="arrival-icon" />
            <h2 className="arrival-heading">New Arrival</h2>
        </div>


        {/* Main content row */}
        <div className="arrival-row">
        
          <div className="arrival-left">
            <div className="arrival-left-box">
              <img src={ps5Img} alt="PS5" className="arrival-left-img" />
              <div className="arrival-left-text">
                <h3>Play Station 5</h3>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <div className="shop-now">
                  <span>Shop Now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right top & bottom */}
          <div className="arrival-right">
            {/* Top right */}
            <div className="arrival-right-top">
              <img src={womenImg} alt="Women Collection" className="arrival-right-top-img" />
              <div className="arrival-right-top-text">
                <h3>Women’s Collections</h3>
                <p>Featured woman collections that give you another vibe.</p>
                <div className="shop-now">
                  <span>Shop Now</span>
                </div>
              </div>
              
            </div>

            {/* Bottom right row with 2 boxes */}
            <div className="arrival-right-bottom">
              <div className="arrival-box arrival-box-large">
                <img src={speakersImg} alt="Speakers" />
                <div className="arrival-box-text">
                  <h3>Speakers</h3>
                  <p>Amazon wireless speakers</p>
                  <div className="shop-now">
                    <span>Shop Now</span>
                  </div>
                </div>
              </div>

              <div className="arrival-box arrival-box-small">
                <img src={perfumeImg} alt="Perfume" />
                <div className="arrival-box-text">
                  <h3>Perfume</h3>
                  <p>GUCCI INTENSE OUD EDP</p>
                  <div className="shop-now">
                    <span>Shop Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
