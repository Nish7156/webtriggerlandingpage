import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-row">
            <div className="footer-main">
              <a href="#" className="footer-logo">
                <img
                  src="../assets/images/logo.svg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
              <form>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your mail"
                  />
                  <a href="" data-cursor="pointer" className="btn-basic">
                    Subscribe
                  </a>
                </div>
              </form>
              <ul className="social-links">
                <li>
                  <a data-cursor="pointer" href="https://www.facebook.com/">
                    <img
                      src="../assets/svg/social/fb.svg"
                      className="img-fluid"
                      alt="facebook"
                    />
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="https://in.linkedin.com/">
                    <img
                      src="../assets/svg/social/linkedin.svg"
                      className="img-fluid"
                      alt="linkedin"
                    />
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="https://www.instagram.com/">
                    <img
                      src="../assets/svg/social/insta.svg"
                      className="img-fluid"
                      alt="insta"
                    />
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="https://twitter.com/login">
                    <img
                      src="../assets/svg/social/twitter.svg"
                      className="img-fluid"
                      alt="twitter"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="link-section">
              <div className="footer-title">
                <img
                  src="../assets/svg/star.svg"
                  className="img-fluid"
                  alt="star"
                />
                Quick Link
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <a data-cursor="pointer" href="index.html">
                      Home
                    </a>
                  </li>
                  <li>
                    <a data-cursor="pointer" href="service.html">
                      Service
                    </a>
                  </li>
                  <li>
                    <a data-cursor="pointer" href="pricing.html">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a data-cursor="pointer" href="contact-us.html">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="link-section">
              <div className="footer-title">
                <img
                  src="../assets/svg/star.svg"
                  className="img-fluid"
                  alt="star"
                />
                Our service
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <a data-cursor="pointer" href="chat.html">
                      Generate
                    </a>
                  </li>
                  <li>
                    <a data-cursor="pointer" href="chat.html">
                      Find Image
                    </a>
                  </li>
                  <li>
                    <a data-cursor="pointer" href="chat.html">
                      Email writer
                    </a>
                  </li>
                  <li>
                    <a data-cursor="pointer" href="chat.html">
                      Social media
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="link-section">
              <div className="footer-title">
                <img
                  src="../assets/svg/star.svg"
                  className="img-fluid"
                  alt="star"
                />
                Our company
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <a data-cursor="pointer" href="login.html">
                      Login
                    </a>
                  </li>
                  <li>
                    <a data-cursor="pointer" href="blog-listing.html">
                      Blog listing
                    </a>
                  </li>
                  <li>
                    <a data-cursor="pointer" href="blog-grid.html">
                      Blog Grid
                    </a>
                  </li>
                  <li>
                    <a data-cursor="pointer" href="blog-details.html">
                      Blog Details
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <h4>@2023 All the Copyright Reserved.</h4>
            <ul className="footer-links">
              <li>
                <a href="terms.html">Privacy Policy </a>
              </li>
              <li>
                <a href="terms.html">Terms & Condition </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
