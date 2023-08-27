//@ts-nocheck

import Image from "next/image";
import { Inter } from "next/font/google";
import Car from "@/assets/images/title-effect.png";
import Imag1 from "@/assets/images/home/home-bg.gif";
import Image2 from "@/assets/svg/home/1.png";
import Iamge3 from "@/assets/svg/home/2.svg";

import Iamge4 from "@/assets/images/home/hand.png";
import Iamge5 from "@/assets/images/home/finger.png";
import Iamge6 from "@/assets/images/home/laptop.png";
import { useEffect } from "react";
import SecondSection from "@/components/SecondSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const cursorBorder = document.querySelector("#cursor-border");
    const cursorPos = {
      x: 0,
      y: 0,
    };
    const cursorBorderPos = {
      x: 0,
      y: 0,
    };

    document.addEventListener("mousemove", (e) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;

      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    requestAnimationFrame(function loop() {
      const easting = 8;
      cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
      cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

      cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      requestAnimationFrame(loop);
    });

    document.querySelectorAll("[data-cursor]").forEach((item) => {
      item.addEventListener("mouseover", (e) => {
        if (item.dataset.cursor === "pointer") {
          cursorBorder.style.backgroundColor = "rgba(0, 144, 144, .4)";
          cursorBorder.style.setProperty("--size", "55px");
        }
        if (item.dataset.cursor === "pointer2") {
          cursorBorder.style.backgroundColor = "white";
          cursorBorder.style.mixBlendMode = "difference";
          cursorBorder.style.setProperty("--size", "60px");
        }
      });
      item.addEventListener("mouseout", (e) => {
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.mixBlendMode = "unset";
        cursorBorder.style.setProperty("--size", "30px");
      });
    });
    // laptop rotate effect
    const element = document.querySelector(".laptop-img");
    let rotationDegree = 60;

    window.addEventListener("scroll", () => {
      rotationDegree = Math.max(
        0,
        60 - (window.scrollY / window.innerHeight) * 120
      );
      element.style.transform = `rotateX(${rotationDegree}deg)`;
    });
    // effect object rotate
    window.addEventListener("scroll", () => {
      const rotationAngle = window.pageYOffset * 0.15;
      const rotateObjects = document.querySelectorAll(".rotate-effect");
      rotateObjects.forEach((object) => {
        object.style.transform = `rotate(${rotationAngle}deg)`;
      });
    });

    const tapTopBtn = document.querySelector(".tap-to-top-button")
const tapTopTopBox = document.querySelector(".tap-to-top-box")
tapTopBtn?.addEventListener("click", function () {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})
if (tapTopTopBox) {
    window.onscroll = function () {
        if (pageYOffset >= 1000) {
            tapTopTopBox.classList.remove("hide")
        } else {
            tapTopTopBox.classList.add("hide")
        }
    }
}

  }, []);
  return (
    <>
      <section className="home-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="home-content">
                <div className="bg-effect">
                  <Image src={Imag1} alt={""} className="img-fluid bg-gif" />
                  <Image
                    src={Image2}
                    alt={""}
                    className="img-fluid effect1 rotate-effect"
                  />
                  <Image
                    src={Iamge3}
                    alt={""}
                    className="img-fluid effect2 rotate-effect"
                  />
                </div>
                <div>
                  <h1>
                    USE MEGABOT TO
                    <div className="title-effect">
                      <Image width={100} height={100} src={Car} alt="" />
                      <span>SIMPLIFY</span>
                    </div>
                    YOUR LIFE
                  </h1>
                  <p>
                    Megabot is a robust AI tool that uses artificial
                    intelligence algorithms to generate various kinds of
                    content. The tool was developed to support users with
                    effortlessly generating high-quality content, saving both
                    energy and time while maintaining an uninterrupted level of
                    creativity and accuracy.
                  </p>
                  <a data-cursor="pointer" className="start-link">
                    <i className="iconsax" data-icon="play-circle"></i>Start
                    free trial
                  </a>
                </div>
              </div>
              <div className="home-laptop px-md-0 px-3">
                <div className="laptop-sec position-relative">
                  <div className="hand-sec">
                    <Image
                      src={Iamge4}
                      alt=""
                      className="img-fluid left-hand"
                    />
                    <Image
                      src={Iamge4}
                      alt=""
                      className="img-fluid right-hand"
                    />
                    <Image
                      src={Iamge5}
                      className="img-fluid left-finger"
                      alt=""
                    />
                    <Image
                      src={Iamge5}
                      className="img-fluid right-finger"
                      alt=""
                    />
                  </div>
                  <Image
                    src={Iamge6}
                    alt=""
                    className="img-fluid laptop-img mx-auto"
                  />
                </div>
                <div className="home-info">
                  <ul className="info-list">
                    <li>Ask anything</li>
                    <li>Generate image</li>
                    <li>Translate anything</li>
                  </ul>
                  <ul className="star-rating">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                  </ul>
                  <h4>
                    A technique to write all of your material 10 times more
                    quickly.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SecondSection />
      <div className="tap-to-top-box hide">
      <button className="tap-to-top-button">
        <i className="iconsax" data-icon="chevron-up"></i>
      </button>
    </div>
    </>
  );
}
