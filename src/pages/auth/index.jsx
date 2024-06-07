import React from "react";
import SplashLogo from "../../assets/images/logo-splash.png";
import LanuchImage from "../../assets/images/lanuch.png";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function SplashScreenComponent() {
  const navigate = useNavigate();
  return (
    <section className="splash-bg">
      <div
        className="vstack align-items-center justify-content-center pb-5 h-100vh gap-30
      splash-position"
      >
        <div className="welocme-logo">
          <img src={SplashLogo} alt="spalsh-logo" width={164} />
        </div>
        <div className="text-center">
          <img src={LanuchImage} alt="launch-image" />
          <div className="text-white fs-22 fw-500 mt-3">
            Ready to be the face of STAR?
          </div>
        </div>
        <div>
          <Button
            className="splash-btn"
            onClick={() => {
              navigate("/auth/login");
            }}
          >
            I Wish to Participate
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SplashScreenComponent;
