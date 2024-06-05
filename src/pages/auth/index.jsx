import React from "react";
import SplashPerson from "../../assets/images/splash-person.png";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function SplashScreenComponent() {
  const navigate = useNavigate();
  return (
    <section className="splash-bg">
      <div className="vstack align-items-center justify-content-end pb-5 h-100vh gap-5">
        <div className="text-center roboto-font">
          <div className="text-white fs-37 fw-400 letter-space-6 text-uppercase">
            An Opportunity to become
          </div>
          <div className="hstack justify-content-center fs-88 gap-4 fw-900 letter-space-6 text-uppercase lh-90">
            <div className="text-white ">FACES</div>
            <div className="text-white">OF</div>
            <div className="light-blue">SHAI</div>
          </div>
        </div>
        <div>
          <img src={SplashPerson} alt="splash" className="w-100" />
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
