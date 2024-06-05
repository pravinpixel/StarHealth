import React from "react";
import SplashPerson from "../../assets/images/splash-person.png";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function ThanksScreen() {
  const navigate = useNavigate();
  const goHomeFn = () => {
    navigate("/");
  };
  return (
    <section className="splash-bg">
      <div className="vstack align-items-center justify-content-end pb-5 h-100vh gap-5">
        <div className="text-center">
          <div className="vstack gap-3">
            <div className="text-white fs-40 fw-900 text-uppercase roboto-font">
              Thank you for uploading your photos!
            </div>
            <div className="vstack">
              <div className="fs-24 text-white">
                We appreciate your participation and look
              </div>
              <div className="fs-24 text-white">
                forward to seeing your contributions.
              </div>
            </div>
          </div>
          {/* <div className="text-white fs-37 fw-400 letter-space-6 text-uppercase">
            An Opportunity to become
          </div>
          <div className="hstack justify-content-center fs-88 gap-4 fw-900 letter-space-6 text-uppercase lh-90">
            <div className="text-white ">FACES</div>
            <div className="text-white">OF</div>
            <div className="light-blue">SHAI</div>
          </div> */}
        </div>
        <div>
          <img src={SplashPerson} alt="splash" className="w-100" />
        </div>
        <div>
          <Button className="splash-btn" onClick={() => goHomeFn()}>
            Go Home
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ThanksScreen;
