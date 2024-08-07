import React from "react";
import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import StarIcon from "../../assets/images/star-icon.png";
import Image1 from "../../assets/images/image1.webp";
import Image2 from "../../assets/images/image2.png";
import StarHealthLogo from "../../assets/images/starhealth-logo.png";

function SplashScreenComponent() {
  const navigate = useNavigate();

  return (
    <div className="splash-bg">
      <div>
        <img src={StarIcon} alt="" className="star1" />
        <img src={StarIcon} alt="" className="star2" />
        <img src={StarIcon} alt="" className="star3" />
        <img src={StarIcon} alt="" className="star4" />
        <img src={StarIcon} alt="" className="star5" />
        <img src={StarIcon} alt="" className="star6" />
        <img src={StarIcon} alt="" className="star7" />
        <img src={StarIcon} alt="" className="star8" />
        <img src={StarIcon} alt="" className="star9" />
        <img src={StarIcon} alt="" className="star10" />
        <img src={StarIcon} alt="" className="star11" />
        <img src={StarIcon} alt="" className="star12" />
      </div>
      <div className="welcome-shi-logo">
        <img src={StarHealthLogo} alt="StarHealthLogo" />
      </div>
      <Container className="pb-4 splashbannerSection">
        <div className="row justify-content-between align-items-center">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <img src={Image1} alt="" className="img-fluid image1" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 text-center">
            <img src={Image2} alt="" className="img-fluid image2" />
            <div className="vstack gap-3 my-3">
              <div className="fw-bold text-white fs-24 text-uppercase">
                <div>Introducing The Faces of</div>
                <div>Star Health!</div>
              </div>
              <div className="text-white fs-18">
                This is a remarkable opportunity to become The Face of Star
                Health in our brand and communication initiatives. Join us and
                be a part of the enduring legacy of Star Health.
              </div>
              <div className="text-white fs-18">
                Seize this opportunity to shine!
              </div>
            </div>
            {/* <p className="pb-0">Introducing The Faces of Star Health! </p>
            <p className="pb-0">
              This is a remarkable opportunity to become The Face of Star Health
              in all our branding initiatives. Join us and be a part of the
              enduring legacy of Star Health.
            </p>
            <p>Seize this opportunity to shine!</p> */}

            {/* <h1>Launch Your</h1>
            <h2>Stardom!</h2> */}
            {/* <p>Ready to be the face of STAR?</p> */}
            <div>
              <Button
                className="splash-btn fs-14"
                disabled
                // onClick={() => {
                //   navigate("/login");
                // }}
              >
                Registration Closed, Thanks for your participation
              </Button>
            </div>
            {/* <div className="text-white fs-18 fw-bold mt-3">
              Campaign Duration : 25<sup>th</sup> June 2024 to <br />9
              <sup>th</sup>
              {"  "}
              July 2024
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SplashScreenComponent;
