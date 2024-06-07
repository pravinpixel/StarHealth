import React from "react";
import Placeholder from "react-bootstrap/Placeholder";

function SplashLoader() {
  return (
    <section className="splash-loader">
      <Placeholder as="image" animation="glow">
        <Placeholder xs={12} className="h-100vh" />
      </Placeholder>
    </section>
  );
}

export default SplashLoader;
