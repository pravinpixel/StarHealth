import React from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function ThanksScreen() {
  const navigate = useNavigate();
  const goHomeFn = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <section className="splash-bg">
      <div
        className="vstack align-items-center justify-content-center pb-5 h-100vh gap-30 
      splash-position"
      >
        <div className="text-center">
          <div className="text-white fw-bold fs-40 text-uppercase">
            <div>Thanks for</div>
            <div>Participating!</div>
          </div>
          <div className="text-white fs-22 fw-500 mt-3">
            <div>Stay tuned to be a part of the legacy!</div>
            <div className="mt-1">#FaceOfSTAR</div>
          </div>
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
