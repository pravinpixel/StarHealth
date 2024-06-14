import React from "react";
import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import StarIcon from "../../assets/images/star-icon.png";
import Image1 from "../../assets/images/image1.webp";
import Image2 from "../../assets/images/image2.png";

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
      <Container className="pb-4 splashbannerSection">
        <div className="row justify-content-between align-items-center">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <img src={Image1} alt="" className="img-fluid image1" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 text-center">
            <img src={Image2} alt="" className="img-fluid image2" />
            <h1>Launch Your</h1>
            <h2>Stardom!</h2>
            <p>Ready to be the face of STAR?</p>
            <div>
              <Button
                className="splash-btn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                I Wish to Participate
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SplashScreenComponent;
