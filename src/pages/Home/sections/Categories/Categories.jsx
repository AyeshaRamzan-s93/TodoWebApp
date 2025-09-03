


import categoryImg from "../../../../assets/categoriesImg.svg"; // replace with your image
import "./Categories.css";

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories-inner">
        {/* Left Content */}
        <div className="categories-left">
          <span className="categories-label">Categories</span>
          <h2 className="categories-heading">Enhance Your Music Experience</h2>

          {/* Timer Circles */}
          <div className="categories-timer">
            <div className="timer-circle">
              <span>23</span>
              <p>Hours</p>
            </div>
            <div className="timer-circle">
              <span>05</span>
              <p>Days</p>
            </div>
            <div className="timer-circle">
              <span>59</span>
              <p>Minutes</p>
            </div>
            <div className="timer-circle">
              <span>35</span>
              <p>Seconds</p>
            </div>
          </div>

          <button className="buy-btn">Buy Now</button>
        </div>

        {/* Right Image */}
        <div className="categories-right">
          <img src={categoryImg} alt="Category" />
        </div>
      </div>
    </section>
  );
}
