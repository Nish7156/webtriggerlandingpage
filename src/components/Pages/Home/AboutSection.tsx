import React,{useEffect} from "react";
import IaiImage from "../../../assets/svg/character/1.svg";
import ItickIcon from "../../../assets/svg/tick.svg";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutSection() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Default animation duration (adjust as needed)
          delay: 500, 
              // Default animation delay (adjust as needed)
        });
      }, []);
  return (
    <>
      <section className="about-section section-b-space section-mb-space">
        <div
          className="bg-effect"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        ></div>
        <div className="container">
          <div className="row g-md-5 g-4">
            <div className="col-lg-6 order-lg-0 order-1">
              <div className="about-content">
                <div>
                  <div className="title">
                    <span className="number-pattern">01.</span>
                    <h2 className="text-white">
                      AI's Innovative Potential for One-Click Content
                      Generation.
                    </h2>
                  </div>
                  <p>
                    Crafting influential content requires a deep understanding
                    of your target audience. Pinpoint your ideal demographic and
                    familiarise yourself with their needs, passions, and sources
                    of concern.
                  </p>
                  <ul>
                    <li>
                      <Image src={ItickIcon} className="img-fluid" alt="tick" />
                      Attract your audience with captivating facts in your
                      commercials
                    </li>
                    <li>
                      <Image src={ItickIcon} className="img-fluid" alt="tick" />
                      Let’s engage with the customers effectively
                    </li>
                    <li>
                      <img
                        src="../assets/svg/tick.svg"
                        className="img-fluid"
                        alt="tick"
                      />
                      Brighten up your content with appealing graphics:
                      pictures, clips, and graphs that will fascinate your
                      users!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <Image src={IaiImage} className="img-fluid" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
