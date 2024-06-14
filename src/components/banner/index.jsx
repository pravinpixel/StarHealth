import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import Logo from "../../assets/images/logo-small.png";
import Lanuch from "../../assets/images/lanuch.png";
import HeadShotImage from "../../assets/images/head-shot.png";
import FullsizeImage from "../../assets/images/full-size.png";
import FamilyImage from "../../assets/images/family.png";
import CloseIconModal from "../../assets/images/close-modal.png";

function BannerComponent({type}) {
  const faqContent = [
    {
      id: 1,
      heading: "Is there a specific time window to submit pictures?",
      sub_head:
        "Yes, all imagery must be submitted on or before June 24, 2024.",
    },
    {
      id: 2,
      heading: "How many images can I enter?",
      sub_head:
        "You can submit two images of yourself (mandatory) and one with your family (optional).",
    },
    {
      id: 3,
      heading:
        "I have already submitted an image but would like to add another one. Can I exchange images?",
      sub_head:
        "No. Once an image has been submitted, it is final and may not be replaced by another image.",
    },
    {
      id: 4,
      heading: "Can I submit images under more than one account?",
      sub_head:
        "No. It is against the rules and will lead to disqualification.",
    },
    {
      id: 5,
      heading:
        "If my images get disqualified, will I be able to submit a replacement?",
      sub_head:
        "No. You may submit images per category, and these cannot be replaced after submission. Please choose your images carefully and consider the rules and requirements for submission before you hit the submit button.",
    },
    {
      id: 6,
      heading:
        "Is image editing allowed? Can I edit images I have shot on a smartphone?",
      sub_head:
        "Basic image editing, and color corrections are allowed, i.e. brightness, contrast, sharpening, mood and white balance. The decision to accept your image will be at the discretion of the judges. Their decision is final.",
    },
    {
      id: 7,
      heading:
        "Will I get notified when my image makes it into the next round?",
      sub_head: "Yes, all contestants will be informed by email.",
    },
    {
      id: 8,
      heading: "How can you be sure that judges aren’t partial or unfair?",
      sub_head:
        "In order to maintain impartiality, all images will be made anonymous before the judges receive them.",
    },
    {
      id: 9,
      heading: "Will my images be used for Star Health’s advertising?",
      sub_head:
        "Yes. The submitted images can be used for advertising purposes, or in our product brochures, flayers or on our social media pages. By participating and submitting your images, you consent to the use of your images, royalty free/ without compensation, for Star Health’s promotional material.",
    },
  ];

  const [campaignRule, setCampaignRule] = useState(false);
  const [photoGuideline, setPhotoGuideline] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <div className="p-5">
          <div className="banner-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="adminleftposition">
            <img src={Lanuch} alt="lanuch" className="mt-4" />
            <div className="hstack mt-3 gap-3">
              <Button
                className="whiteBorder-mobilebutton"
                onClick={campaignRuleShow}
              >
                About Campaign
              </Button>
              <Button className="whiteBorder-mobilebutton" onClick={handleShow}>
                View FAQs
              </Button>
            </div>
          </div>
          <div className="text-center my-5 dnone-xs dnone-sm">
            <img src={Lanuch} alt="lanuch" />
          </div>
          <div className="vstack gap-3 px-5 dnone-xs dnone-sm">
            <div className="fs-20 fw-600 text-white">About the Campaign</div>
            <div className="fs-18 fw-600 text-white">#theFacesOfStarHealth</div>

            <div className="fs-14 text-white roboto-font">
              <div className="mb-2 text-justify">
                The Faces of STAR Health is an exciting initiative designed to
                celebrate and highlight the people behind India’s largest health
                insurance company, Star Health Insurance. This contest offers
                our employees an opportunity to be featured in the company’s
                brand communication campaigns, showcasing the true spirit and
                diversity of STAR Health. By participating in the Faces of STAR
                Health, you’ll become an integral part of our company's legacy,
                stepping into the spotlight to represent the heart and soul of
                STAR Health Insurance. Join us and shine bright as the face of
                STAR Health!
              </div>
            </div>
            <div className="mt-3">
              <Button className="whiteBorder-desktop" onClick={handleShow}>
                View FAQs
              </Button>
            </div>
          </div>
        </div>
      ) : type === "upload-image" ? (
        <div className="px-5">
          <div className="display-block-mobile pt-4">
            <img src={Logo} alt="logo" />
          </div>
          <div className="adminleftposition">
            <img src={Lanuch} alt="lanuch" className="mt-3" />
            <div className="hstack mt-3 gap-3">
              <Button
                className="whiteBorder-mobilebutton"
                onClick={photoGuidelineShow}
              >
                View Photo Guidelines
              </Button>
              <Button className="whiteBorder-mobilebutton" onClick={handleShow}>
                View FAQs
              </Button>
            </div>
          </div>
          <div className="hstack my-5 dnone-xs dnone-sm launch-img-ctr justify-content-between">
            <img src={Logo} alt="logo" className="logoinnerbanner" />
            <img src={Lanuch} alt="launch" />
          </div>
          <div className="vstack dnone-xs dnone-sm photoguide-ctr-web">
            <div className="vstack gap-3">
              <div className="fs-20 fw-600 text-white">Photo Guidelines</div>

              <div className="hstack gap-5 mt-1 photoguide-ctr flex-wrap">
                <div className="text-center">
                  <img src={HeadShotImage} alt="headshot" />
                  <div className="vstack fs-14 text-white roboto-font mt-2">
                    <div>A clear headshot photo</div>
                    <div>of yourself*</div>
                  </div>
                </div>
                <div className="text-center">
                  <img src={FullsizeImage} alt="fullimage" />
                  <div className="vstack fs-14 text-white roboto-font mt-2">
                    <div>A full-sized photo </div>
                    <div>of yourself*</div>
                  </div>
                </div>
                <div className="text-center">
                  <img src={FamilyImage} alt="family" />
                  <div className="vstack fs-14 text-white roboto-font mt-2">
                    <div>A lovely photo with your</div>
                    <div>family (Optional).</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4">
              <ul className="mb-0 ps-0 roboto-font">
                <li className="fs-14 text-white mb-3">
                  Get your friend/family to click a photo of you, no selfies
                  please
                </li>
                <li className="fs-14 text-white mb-3">
                  Look straight into the camera
                </li>
                <li className="fs-14 text-white mb-3">
                  No half profiles will be accepted
                </li>
                <li className="fs-14 text-white mb-3">
                  No sunglasses, caps allowed
                </li>
                <li className="fs-14 text-white mb-3">
                  Take an individual photo, no couple/group pictures
                </li>
                <li className="fs-14 text-white mb-3">
                  Against a white background or a blank wall preferred
                </li>
                <li className="fs-14 text-white mb-3">
                  The file size of the photo should be less than 5MB
                </li>
              </ul>
            </div>
            <div className="fs-20 fw-600 text-white text-center mb-4">
              Give us your best shot, don’t forget to smile
            </div>
            <div className="mt-5 my-5">
              <Button className="whiteBorder-desktop" onClick={handleShow}>
                View FAQs
              </Button>
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
      <Modal
        show={campaignRule}
        onHide={campaignRuleClose}
        backdrop="static"
        keyboard={false}
        className="faqmodal-ctr"
        dialogClassName="modalfaq-ctr"
        centered
        scrollable
      >
        <div className="modal-closectr cursor" onClick={campaignRuleClose}>
          <img src={CloseIconModal} alt="close-icon" />
        </div>
        <Modal.Header className="border-0 pb-0">
          <div className="faq-header-content fw-600 fs-18 dark-blue">
            About the Campaign
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="fs-16 fw-600 faq-header-content mt-2">
            #theFacesOfStarHealth
          </div>
          <div className="fs-12 mt-3 text-justify">
            The Faces of STAR Health is an exciting initiative designed to
            celebrate and highlight the people behind India’s largest health
            insurance company, Star Health Insurance. This contest offers our
            employees an opportunity to be featured in the company’s brand
            communication campaigns, showcasing the true spirit and diversity of
            STAR Health. By participating in the Faces of STAR Health, you’ll
            become an integral part of our company's legacy, stepping into the
            spotlight to represent the heart and soul of STAR Health Insurance.
            Join us and shine bright as the face of STAR Health!
          </div>
        </Modal.Body>
      </Modal>
      {/* photo guide lines */}
      <Modal
        show={photoGuideline}
        onHide={photoGuidelineClose}
        backdrop="static"
        keyboard={false}
        className="faqmodal-ctr"
        dialogClassName="modalfaq-ctr"
        centered
        scrollable
      >
        <div className="modal-closectr cursor" onClick={photoGuidelineClose}>
          <img src={CloseIconModal} alt="close-icon" />
        </div>
        <Modal.Header className="border-0 pb-0">
          <div className="faq-header-content fw-600 fs-26 dark-blue">
            Photo Guidelines
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="hstack gap-2 mt-1 photoguide-ctr flex-wrap">
            <div className="text-center">
              <img src={HeadShotImage} alt="headshot" width={60} height={60} />
              <div className="vstack fs-10 text-black roboto-font mt-2">
                <div>A clear headshot</div>
                <div>photo of yourself*</div>
              </div>
            </div>
            <div className="text-center">
              <img src={FullsizeImage} alt="fullimage" width={60} height={60} />
              <div className="vstack fs-10 text-black roboto-font mt-2">
                <div>A full-sized photo </div>
                <div>of yourself*</div>
              </div>
            </div>
            <div className="text-center">
              <img src={FamilyImage} alt="family" width={60} height={60} />
              <div className="vstack fs-10 text-black roboto-font mt-2">
                <div>A lovely photo with your</div>
                <div>family (Optional).</div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <ul className="mb-0 ps-3 roboto-font">
              <li className="fs-10 text-black mb-3">
                Get your friend/family to click a photo of you, no selfies
                please
              </li>
              <li className="fs-10 text-black mb-3">
                Look straight into the camera
              </li>
              <li className="fs-10 text-black mb-3">
                No half profiles will be accepted
              </li>
              <li className="fs-10 text-black mb-3">
                No sunglasses, caps allowed
              </li>
              <li className="fs-10 text-black mb-3">
                Take an individual photo, no couple/group pictures
              </li>
              <li className="fs-10 text-black mb-3">
                Against a white background or a blank wall preferred
              </li>
              <li className="fs-10 text-black mb-3">
                The file size of the photo should be less than 5MB
              </li>
            </ul>
          </div>
          <div className="fs-18 fw-600 dark-blue text-center">
            Give us your best shot, don’t forget to smile
          </div>
        </Modal.Body>
      </Modal>
      {/* view faq modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="faqmodal-ctr"
        dialogClassName="modalfaq-ctr"
        centered
        scrollable
      >
        <div className="modal-closectr cursor" onClick={handleClose}>
          <img src={CloseIconModal} alt="close-icon" />
        </div>
        <Modal.Header className="border-0 pb-0 justify-content-center">
          <div className="faq-header-content fw-600 fs-26 dark-blue">FAQs</div>
        </Modal.Header>
        <Modal.Body className="pt-0">
          <div>
            <Accordion defaultActiveKey={["0"]}>
              {faqContent?.map((faq, index) => (
                <Accordion.Item eventKey={faq?.id} key={index}>
                  <Accordion.Header>
                    <div className="w-90">{faq?.heading}</div>
                    <div></div>
                  </Accordion.Header>
                  <Accordion.Body className="roboto-font fs-14">
                    {faq?.sub_head}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default BannerComponent;
