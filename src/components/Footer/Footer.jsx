
import "./Footer.css";

import sendIcon from "../../assets/icon-send.svg"; 
import appImage from "../../assets/Footer-img.svg";
import fb from "../../assets/Icon-Facebook.svg"; 
import tw from "../../assets/Icon-Twitter.svg";
import ig from "../../assets/icon-instagram.svg";
import linkedin from "../../assets/Icon-linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Column 1 */}
        <div className="footer-col">
          <h2 className="footer-title1">Exclusive</h2>
          <h3 className="footer-text1">Subscribe</h3>
          <p className="footer-text">Get 10% off your first order</p>
          <div className="subscribe-bar">
            <input type="email" placeholder="Enter your email" />
            <img src={sendIcon} alt="Send" className="send-icon" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3 className="footer-title">Support</h3>
          <p className="footer-text">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="footer-text">exclusive@gmail.com</p>
          <p className="footer-text">+88015-88888-9999</p>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3 className="footer-title">Account</h3>
          <a href="#">My Account</a>
          <a href="#">Login / Register</a>
          <a href="#">Cart</a>
          <a href="#">Wishlist</a>
          <a href="#">Shop</a>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3 className="footer-title">Quick Link</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Of Use</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>

        {/* Column 5 */}
        <div className="footer-col">
          <h3 className="footer-title">Download App</h3>
          <p className="footer-text small">Save $3 with App New User Only</p>
          <img src={appImage} alt="App" className="app-image" />
          <div className="social-icons">
            <img src={fb} alt="Facebook" />
            <img src={tw} alt="Twitter" />
            <img src={ig} alt="Instagram" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>
      </div>

<hr className="footer-line" />
      {/* Bottom Section */}
      
      <div className="footer-bottom">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
