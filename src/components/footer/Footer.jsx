import "./footer.css";
import {
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiMail,
} from "react-icons/fi";

import VisaCard from "../../assets/icon/visa-card.png"
import MasterCard from "../../assets/icon/master-card.png"
import PaypalCard from "../../assets/icon/paypal-card.png"
import ApplePay from "../../assets/icon/apple-pay.png"
import GooglePay from "../../assets/icon/google-pay.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <div className="newsletter-left">
          <h2>
            STAY UP TO DATE ABOUT
            <br />
            OUR LATEST OFFERS
          </h2>
        </div>

        <div className="newsletter-right">
          <div className="email-box">
            <FiMail />
            <input type="email" placeholder="Enter your email address" />
          </div>

          <button>Subscribe to Newsletter</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-brand">
          <h1>SHOP.CO</h1>

          <p>
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>

          <div className="social-icons">
            <div>
              <FiTwitter />
            </div>
            <div>
              <FiFacebook />
            </div>
            <div>
              <FiInstagram />
            </div>
            <div>
              <FiGithub />
            </div>
          </div>
        </div>

        <div className="footer-links">
          <h3>COMPANY</h3>

          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Works</a>
          <a href="#">Career</a>
        </div>

        <div className="footer-links">
          <h3>HELP</h3>

          <a href="#">Customer Support</a>
          <a href="#">Delivery Details</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-links">
          <h3>FAQ</h3>

          <a href="#">Account</a>
          <a href="#">Manage Deliveries</a>
          <a href="#">Orders</a>
          <a href="#">Payments</a>
        </div>

        <div className="footer-links">
          <h3>RESOURCES</h3>

          <a href="#">Free eBooks</a>
          <a href="#">Development Tutorial</a>
          <a href="#">How to - Blog</a>
          <a href="#">Youtube Playlist</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>

        <div className="payments">
          <img src={VisaCard} alt="" />
          <img src={MasterCard} alt="" />
          <img src={PaypalCard} alt="" />
          <img src={ApplePay} alt="" />
          <img src={GooglePay} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
