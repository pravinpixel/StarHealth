import React from "react";
import {Button, Container} from "react-bootstrap";
import {useNavigate, useSearchParams} from "react-router-dom";
import StarIcon from "../../assets/images/star-icon.png";
import Image1 from "../../assets/images/image1.webp";
import StarHealthLogo from "../../assets/images/starhealth-logo.png";
import Logo from "../../assets/images/logo-small.png";

function ThanksScreen() {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  // console.log("searchParams", searchParams.size);

  const goHomeFn = () => {
    navigate("/");
  };
  return (
    <div className="splash-bg splash-bg-1">
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
      <div className="thanks-shi-logo hstack justify-content-between w-100">
        <img src={Logo} alt="Logo" />
        <img src={StarHealthLogo} alt="StarHealthLogo" />
      </div>
      <Container className="pb-4 splashbannerSection">
        <div className="row justify-content-between align-items-center">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <img src={Image1} alt="" className="img-fluid image1" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 text-center">
            <div className="vstack align-items-center justify-content-center">
              <div className="text-center">
                <div className="text-white fw-bold fs-40 text-uppercase">
                  <div>Thanks for</div>
                  <div>Participating!</div>
                </div>
                {/* <div className="text-white fw-bold fs-37 text-uppercase">
                    <div>We had already received your entry</div>
                    <div>and it is in review now.</div>
                  </div> */}
                {searchParams.size !== 0 && (
                  <div className="text-white fs-24 fw-500  mt-3">
                    <div>We have already received your entry</div>
                    <div>and it is in review now.</div>
                  </div>
                )}
                <div className="text-white fs-22 fw-500 mt-3">
                  <div>Stay tuned to be a part of the legacy!</div>
                  <div className="mt-1">#thefaceofstarhealth</div>
                </div>
                <div className="mt-4">
                  <Button className="splash-btn" onClick={() => goHomeFn()}>
                    Go to Home Screen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ThanksScreen;
