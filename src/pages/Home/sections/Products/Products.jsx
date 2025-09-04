

import "./Products.css";


import smallIcon from "../../../../assets/productsSmall.svg";
import wishlistIcon from "../../../../assets/Fill Heart.svg";
import eyeIcon from "../../../../assets/Fill Eye.svg";
import star5 from "../../../../assets/Five star.svg";
import star4 from "../../../../assets/Four Half Star.svg";
import product1 from "../../../../assets/Product1.svg";
import product2 from "../../../../assets/Product2.svg";
import product3 from "../../../../assets/Product3.svg";
import product4 from "../../../../assets/Product4.svg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "The north coat",
      price: 260,
      oldPrice: 360,
      rating: star5,
      reviews: 65,
      image: product1,
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      rating: star4,
      reviews: 40,
      image: product2,
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: star5,
      reviews: 120,
      image: product3,
    },
    {
      id: 4,
      name: "Small BookSelf",
      price: 360,
      oldPrice: 360,
      rating: star4,
      reviews: 70,
      image: product4,
    },
  ];

  return (
    <section className="products">
      <div className="products-inner">
        {/* top heading row */}
        <div className="products-top">

          <div className="products-left">
            <img src={smallIcon} alt="small icon" className="small-icon" />
            <h2>Best Selling Products</h2>
          </div>

          <button className="view-btn">View All</button>
        </div>

        {/* product grid */}
        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-image">
                <img src={item.image} alt={item.name} />
                <div className="product-icons">
                  <img src={wishlistIcon} alt="wishlist" />
                  <img src={eyeIcon} alt="view" />
                </div>
              </div>
              <h3>{item.name}</h3>
              <div className="product-price">
                <span className="new-price">${item.price}</span>
                <span className="old-price">${item.oldPrice}</span>
              </div>
              <div className="product-rating">
                <img src={item.rating} alt="rating" />
                <span>({item.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
