import React from "react";
import SplashLogo from "../../assets/images/logo-splash.png";
import LanuchImage from "../../assets/images/lanuch.png";

import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import SplashLoader from "../../components/loader/splashLoader";

function SplashScreenComponent() {
  const navigate = useNavigate();
  return (
    // <SplashLoader />
    <section className="splash-bg">
      <div
        className="vstack align-items-center justify-content-center pb-5 h-100vh gap-30
      splash-position"
      >
        <div className="welocme-logo">
          <img src={SplashLogo} alt="SplashLogo" width={164} />
        </div>
        <div className="text-center">
          <img src={LanuchImage} alt="LanuchImage" />
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
