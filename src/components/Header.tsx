import React, { useEffect } from "react";

import Imga from "../assets/images/logo.svg";
import Image from "next/image";

function Header() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var header = document.querySelector("header");

      if (window.pageYOffset > 100) {
        //@ts-ignore
        header.classList.add("sticky");
      } else {
        //@ts-ignore
        header.classList.remove("sticky");
      }
    });
  }, []);

  return (
    <div>
      <header>
        <button
          className="navbar-toggler d-xl-none d-inline navbar-menu-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#primaryMenu"
        >
          <span className="navbar-toggler-icon">
            <i className="iconsax" data-icon="text-align-justify">
              hhhh
            </i>
          </span>
        </button>
        <a href="index.html">
          <Image src={Imga} alt="test" />
        </a>
        <nav className="header-nav-middle">
          <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
            <div
              className="offcanvas offcanvas-collapse order-xl-2"
              id="primaryMenu"
            >
              <div className="offcanvas-header navbar-shadow">
                <h5 className="mb-0">Back</h5>
                <button
                  className="btn-close lead"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="chat.html">
                      Chat
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="javascript:void(0)"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="404.html">
                          404
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="login.html">
                          Login
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="reset-password.html">
                          Reset Password
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="otp.html">
                          OTP
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-grid.html">
                          Blog Grid
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-listing.html">
                          Blog Listing
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-details.html">
                          Blog Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="terms.html">
                          Terms & Conditon
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="service.html">
                      service
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="pricing.html">
                      pricing
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="contact-us.html">
                      contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <a
          data-cursor="pointer"
          href="login.html"
          className="btn btn-theme d-sm-inline-block d-none"
        >
          <span>Login Now</span>
        </a>
      </header>
    </div>
  );
}

export default Header;
