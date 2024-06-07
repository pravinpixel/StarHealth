import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../assets/images/logo-small.png";
import Lanuch from "../../assets/images/lanuch.png";
import CloseIcon from "../../assets/images/close-icon.png";
import HeadShotImage from "../../assets/images/head-shot.png";

function BannerComponent({type}) {
  const [campaignRule, setCampaignRule] = useState(false);
  const [photoGuideline, setPhotoGuideline] = useState(false);

  const campaignRuleClose = () => setCampaignRule(false);
  const photoGuidelineClose = () => setPhotoGuideline(false);

  const campaignRuleShow = () => {
    setCampaignRule((campaignRule) => !campaignRule);
  };

  const photoGuidelineShow = () => {
    setPhotoGuideline((photoGuideline) => !photoGuideline);
  };

  return (
    <section>
      {type === "personal-details" ? (
        <div className="p-4">
          <div className="banner-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="adminleftposition">
            <img src={Lanuch} alt="lanuch" className="mt-3" />
            <div className="mt-3">
              <Button
                className="whiteBorder-mobilebutton"
                onClick={campaignRuleShow}
              >
                View Campaign Rules
              </Button>
            </div>
          </div>
          <div className="text-center my-5 dnone-xs dnone-sm">
            <img src={Lanuch} alt="lanuch" />
          </div>
          <div className="vstack gap-3 px-5 dnone-xs dnone-sm">
            <div className="fs-20 fw-600 text-white">About the Campaign</div>
            <div className="fs-14 text-white">
              <div className="mb-2">
                Nulla leo nulla, condimentum non pharetra et, fermentum id
                velit. Integer magna ipsum, scelerisque ut nisi nec, malesuada
                iaculis dolor. Integer ut consequat leo, porttitor ultrices
                velit. Duis auctor augue ut nulla ultrices consequat.
              </div>
              <div>
                Proin vulputate efficitur justo at convallis. Vivamus eu posuere
                nibh. Morbi lacinia tellus vel ligula auctor semper. Vestibulum
                et fringilla velit. Integer sit amet dui at eros vehicula
                facilisis luctus eu purus.
              </div>
            </div>
            <div>
              <div className="fs-20 fw-600 text-white mb-2">Campaign Rules</div>
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
                  rhoncus ante, quis rhoncus odio mi ac tellus. Nunc non mollis
                  purus.
                </li>
              </ul>
            </div>
            <div>
              <div className="fs-20 fw-600 text-white mb-2">Disclaimer</div>
              <ul>
                <li className="fs-14 text-white">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Nullam consequatleo ac ligula dictum tempus.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : type === "upload-image" ? (
        <div className="p-4">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="adminleftposition">
            <img src={Lanuch} alt="lanuch" className="mt-3" />
            <div className="mt-3">
              <Button
                className="whiteBorder-mobilebutton"
                onClick={photoGuidelineShow}
              >
                View Photo Guidelines
              </Button>
            </div>
          </div>
          <div className="text-center my-5 dnone-xs dnone-sm launch-img-ctr">
            <img src={Lanuch} alt="launch" />
          </div>
          <div className="vstack px-5 dnone-xs dnone-sm photoguide-ctr-web">
            <div className="vstack gap-3">
              <div className="fs-20 fw-600 text-white">Photo Guidelines</div>
              <div className="fs-14 text-white roboto-font">
                Please Upload the photographs as given in the examples below
              </div>
              <div className="hstack justify-content-between mt-3">
                <div className="text-center">
                  <img src={HeadShotImage} alt="headshot" />
                  <div className="vstack fs-14 text-white roboto-font mt-2">
                    <div>A clear headshot photo</div>
                    <div>of yourself*</div>
                  </div>
                </div>
                <div className="text-center">
                  <img src={HeadShotImage} alt="headshot" />
                  <div className="vstack fs-14 text-white roboto-font mt-2">
                    <div>A full-sized photo </div>
                    <div>of yourself*</div>
                  </div>
                </div>
                <div className="text-center">
                  <img src={HeadShotImage} alt="headshot" />
                  <div className="vstack fs-14 text-white roboto-font mt-2">
                    <div>A lovely photo with your</div>
                    <div>family (Optional).</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="authleftposition my-5">
            <div className="fs-22 fw-500 text-white">
              Let the star in you stand
            </div>
            <div className="fs-22 fw-500 text-white">under the spotlight</div>
            <img src={Lanuch} alt="lanuch" className="mt-3" />
          </div>
        </div>
      )}

      {/* campaigin rules */}
      <Offcanvas
        show={campaignRule}
        onHide={campaignRuleClose}
        scroll
        className="campaignRule-ctr"
      >
        <Offcanvas.Header>
          <div className="hstack gap-4 justify-content-between align-items-center w-100">
            <Offcanvas.Title className="fs-22">Campaign Rules</Offcanvas.Title>
            <div className="cursor" onClick={() => campaignRuleClose()}>
              <img src={CloseIcon} alt="close-icon" />
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-3">
            <img src={Lanuch} alt="lanuch" width={168} />
          </div>
          <div className="vstack gap-3">
            <div className="fs-18 fw-600 text-white">About the Campaign</div>
            <div className="fs-12 text-white">
              <div className="mb-2">
                Nulla leo nulla, condimentum non pharetra et, fermentum id
                velit. Integer magna ipsum, scelerisque ut nisi nec, malesuada
                iaculis dolor. Integer ut consequat leo, porttitor ultrices
                velit. Duis auctor augue ut nulla ultrices consequat.
              </div>
              <div>
                Proin vulputate efficitur justo at convallis. Vivamus eu posuere
                nibh. Morbi lacinia tellus vel ligula auctor semper. Vestibulum
                et fringilla velit. Integer sit amet dui at eros vehicula
                facilisis luctus eu purus.
              </div>
            </div>
            <div>
              <div className="fs-18 fw-600 text-white mb-2">Campaign Rules</div>
              <ul>
                <li className="fs-12 text-white mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean egestas commodo tellus id vehicula.
                </li>
                <li className="fs-12 text-white mb-2">
                  Nulla ac tincidunt risus. Proin congue lobortis sem, vitae
                  lacinia nisl porttitor nec.
                </li>
                <li className="fs-12 text-white mb-2">
                  Suspendisse porta, velit eu sagittis tempor, augue justo
                  rhoncus ante, quis rhoncus odio mi ac tellus. Nunc non mollis
                  purus.
                </li>
              </ul>
            </div>
            <div>
              <div className="fs-18 fw-600 text-white mb-2">Disclaimer</div>
              <ul>
                <li className="fs-12 text-white">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Nullam consequatleo ac ligula dictum tempus.
                </li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* photo guide lines */}
      <Offcanvas
        show={photoGuideline}
        onHide={photoGuidelineClose}
        scroll
        className="campaignRule-ctr"
      >
        <Offcanvas.Header>
          <div className="hstack gap-4 justify-content-between align-items-center w-100">
            <Offcanvas.Title className="fs-22">
              Photo Guidelines
            </Offcanvas.Title>
            <div className="cursor" onClick={() => photoGuidelineClose()}>
              <img src={CloseIcon} alt="close-icon" />
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-3">
            <img src={Lanuch} alt="lanch" width={168} />
          </div>
          <div className="vstack">
            <div className="vstack gap-3">
              <div className="fs-18 fw-600 text-white">Photo Guidelines</div>
              <div className="fs-12 text-white roboto-font">
                Please Upload the photographs as given in the examples below
              </div>
              <div className="hstack justify-content-around mt-3 flex-wrap row-gap-4">
                <div className="text-center">
                  <img src={HeadShotImage} alt="head-shot" />
                  <div className="vstack fs-12 text-white roboto-font mt-2">
                    <div>A clear headshot photo</div>
                    <div>of yourself*</div>
                  </div>
                </div>
                <div className="text-center">
                  <img src={HeadShotImage} alt="head-shot" />
                  <div className="vstack fs-12 text-white roboto-font mt-2">
                    <div>A full-sized photo </div>
                    <div>of yourself*</div>
                  </div>
                </div>
                <div className="text-center">
                  <img src={HeadShotImage} alt="head-shot" />
                  <div className="vstack fs-12 text-white roboto-font mt-2">
                    <div>A lovely photo with your</div>
                    <div>family (Optional).</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  );
}

export default BannerComponent;
