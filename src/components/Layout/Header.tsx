import React, { useEffect } from "react";

import Ilogo from "/public/img/main_logo.png";
import { Menus } from "@/lib/constant";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomImage from "../Utility/CustomImage";

function Header() {
  const router = useRouter();
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
            <i className="iconsax" data-icon="text-align-justify"></i>
          </span>
        </button>
        <Link href="/">
          <CustomImage height={500} width={200} src={Ilogo} alt="Ilogo" />
        </Link>
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
                  {Menus.map((data: any) => {
                    const isActive = router.pathname === data.link;
                    return (
                      <li className={`nav-item ${isActive ? "active" : ""}`}>
                        <Link className="nav-link" href={`${data.link}`}>
                          {data.title}
                        </Link>
                      </li>
                    );
                  })}
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
