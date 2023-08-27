import React, { useEffect } from 'react'

function SecondSection() {
  useEffect(()=>{

    
  },[])
  return (
    <div>
         <div className="service-section section-b-space">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row g-4 service-row">
              <div className="col-sm-6">
                <div className="service-box">
                  <div className="service-icon">
                    <img
                      src="../assets/svg/service/copy.svg"
                      className="img-fluid outline-icon"
                      alt=""
                    />
                    <img
                      src="../assets/svg/service/copy-bold.svg"
                      className="img-fluid bold-icon"
                      alt=""
                    />
                  </div>
                  <div className="service-content">
                    <h3>
                      <img
                        src="../assets/svg/service-title.svg"
                        alt="effect"
                        className="img-fluid"
                      />Copy writer
                    </h3>
                    <p>
                      Unleash the power of AI to effortlessly compelling content
                      that captivates and converts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="service-box">
                  <div className="service-icon">
                    <img
                      src="../assets/svg/service/graph.svg"
                      className="img-fluid outline-icon"
                      alt=""
                    />
                    <img
                      src="../assets/svg/service/graph-bold.svg"
                      className="img-fluid bold-icon"
                      alt=""
                    />
                  </div>
                  <div className="service-content">
                    <h3>
                      <img
                        src="../assets/svg/service-title.svg"
                        alt="effect"
                        className="img-fluid"
                      />Digital marketers
                    </h3>
                    <p>
                      Accelerate your marketing and take over the digital
                      landscape
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="service-box">
                  <div className="service-icon">
                    <img
                      src="../assets/svg/service/search.svg"
                      className="img-fluid outline-icon"
                      alt=""
                    />
                    <img
                      src="../assets/svg/service/search-bold.svg"
                      className="img-fluid bold-icon"
                      alt=""
                    />
                  </div>
                  <div className="service-content">
                    <h3>
                      <img
                        src="../assets/svg/service-title.svg"
                        alt="effect"
                        className="img-fluid"
                      />SEO Sepcialist
                    </h3>
                    <p>
                      Generate more engaging content to skyrocket your website’s
                      visibility
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="service-box">
                  <div className="service-icon">
                    <img
                      src="../assets/svg/service/text.svg"
                      className="img-fluid outline-icon"
                      alt=""
                    />
                    <img
                      src="../assets/svg/service/text-bold.svg"
                      className="img-fluid bold-icon"
                      alt=""
                    />
                  </div>
                  <div className="service-content">
                    <h3>
                      <img
                        src="../assets/svg/service-title.svg"
                        alt="effect"
                        className="img-fluid"
                      />Content marker
                    </h3>
                    <p>
                      Reinvent your content marketing and captivate your
                      audience like never before.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-info">
              <div>
                <div className="title">
                  <h2>For All Kind of Creators</h2>
                  <h3>
                    In the digital world, our AI Writer supports a variety of
                    artists
                  </h3>
                </div>
                <p>
                  Introducing a revolutionary AI partner for creators across the
                  globe—a groundbreaking tool designed to transform the way we
                  bring our creative ideas to life. Unleash your artistic
                  abilities as you explore a world of limitless possibilities.
                  Say goodbye to obstacles and let this remarkable AI companion
                  pave the way to a new era of boundless creation.
                </p>
                <a data-cursor="pointer" className="btn-arrow" href="">
                  <div className="icon-arrow">
                    <i className="iconsax" data-icon="arrow-up"></i>
                  </div>
                  View all
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SecondSection