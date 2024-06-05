import React from "react";
import Logo from "../../assets/images/logo.png";
import Welcome from "../../assets/images/welcome.png";
import HeadShotImage from "../../assets/images/head-shot.png";

function BannerComponent({type}) {
  return (
    <section>
      {type === "personal-details" ? (
        <div className="p-4">
          <div>
            <img src={Logo} alt="splash" />
          </div>
          <div className="vstack px-5">
            <div className="text-center my-5">
              <img src={Welcome} alt="Welcome" className="w-100" />
              {/* <div className="text-white fs-37 fw-400 letter-space-6 text-uppercase">
                Welcome To
                  </div>
                  <div className="hstack justify-content-center fs-88 gap-4 fw-900 letter-space-6 text-uppercase lh-90">
                    <div className="text-white ">FACES</div>
                    <div className="text-white">OF</div>
                    <div className="light-blue">SHAI</div>
                  </div> */}
            </div>
            <div className="vstack gap-3">
              <div className="fs-20 fw-600 text-white">About the Campaign</div>
              <div className="fs-14 text-white">
                <div className="mb-2">
                  Nulla leo nulla, condimentum non pharetra et, fermentum id
                  velit. Integer magna ipsum, scelerisque ut nisi nec, malesuada
                  iaculis dolor. Integer ut consequat leo, porttitor ultrices
                  velit. Duis auctor augue ut nulla ultrices consequat.
                </div>
                <div>
                  Proin vulputate efficitur justo at convallis. Vivamus eu
                  posuere nibh. Morbi lacinia tellus vel ligula auctor semper.
                  Vestibulum et fringilla velit. Integer sit amet dui at eros
                  vehicula facilisis luctus eu purus.
                </div>
              </div>
              <div>
                <div className="fs-20 fw-600 text-white mb-2">
                  Campaign Rules
                </div>
                <ul>
                  <li className="fs-14 text-white mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean egestas commodo tellus id vehicula.
                  </li>
                  <li className="fs-14 text-white mb-2">
                    Nulla ac tincidunt risus. Proin congue lobortis sem, vitae
                    lacinia nisl porttitor nec.
                  </li>
                  <li className="fs-14 text-white mb-2">
                    Suspendisse porta, velit eu sagittis tempor, augue justo
                    rhoncus ante, quis rhoncus odio mi ac tellus. Nunc non
                    mollis purus.
                  </li>
                </ul>
              </div>
              <div>
                <div className="fs-20 fw-600 text-white mb-2">Disclaimer</div>
                <ul>
                  <li className="fs-14 text-white">
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Nullam consequatleo ac ligula dictum tempus.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : type === "upload-image" ? (
        <div className="p-4">
          <div>
            <img src={Logo} alt="splash" />
          </div>
          <div className="vstack px-5">
            <div className="text-center my-5">
              <img src={Welcome} alt="Welcome" className="w-100" />
              {/* <div className="text-white fs-37 fw-400 letter-space-6 text-uppercase">
                Welcome To
                  </div>
                  <div className="hstack justify-content-center fs-88 gap-4 fw-900 letter-space-6 text-uppercase lh-90">
                    <div className="text-white ">FACES</div>
                    <div className="text-white">OF</div>
                    <div className="light-blue">SHAI</div>
                  </div> */}
            </div>
            <div className="vstack gap-3">
              <div className="fs-20 fw-600 text-white">Photo Guidelines</div>
              <div className="fs-14 text-white roboto-font">
                Please Upload the photographs as given in the examples below
              </div>
              <div className="hstack justify-content-between mt-3">
                <div className="text-center">
                  <img src={HeadShotImage} alt="HeadShotImage" />
                  <div className="vstack fs-14 text-white roboto-font mt-2">
                    <div>A clear headshot photo</div>
                    <div>of yourself</div>
                  </div>
                </div>
                <div className="text-center">
                  <img src={HeadShotImage} alt="HeadShotImage" />
                  <div className="vstack fs-14 text-white roboto-font mt-2">
                    <div>A full-body photo </div>
                    <div>of yourself</div>
                  </div>
                </div>
                <div className="text-center">
                  <img src={HeadShotImage} alt="HeadShotImage" />
                  <div className="vstack fs-14 text-white roboto-font mt-2">
                    <div>A lovely photo with your</div>
                    <div>family (Optional).</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default BannerComponent;
