import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import PersonalDetailsForm from "components/wizard-form/PersonalDetailsForm";
import UploadPhotosForm from "components/wizard-form/UploadPhotosForm";
import SummaryComponent from "components/wizard-form/Summary";
import {useNavigate} from "react-router-dom";
import BannerComponent from "../../components/banner";

import Step1Active from "../../assets/images/icons/step1-active.png";
import Step1Filled from "../../assets/images/icons/step1-filled.png";
import Step2 from "../../assets/images/icons/step2.png";
import Step2Active from "../../assets/images/icons/step2-active.png";
import Step2Filled from "../../assets/images/icons/step2-filled.png";
import Step3 from "../../assets/images/icons/step3.png";
import Step3Active from "../../assets/images/icons/step3-active.png";

function PersonalDetails() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleStep1Submit = (data) => {
    console.log("data", data);
    setFormData((prev) => ({...prev, ...data}));
    setStep(2);
  };

  const handleStep2Submit = (data) => {
    console.log("data", data);
    // setFormData((prev) => ({
    //   ...prev,
    //   ...data,
    //   image1: data.image1[0],
    //   image2: data.image2[0],
    // }));
    setStep(3);
  };

  const handleBack = () => {
    setStep((step) => step - 1);
  };

  const confirmSubmit = () => {
    navigate("/admin/thank-you");
  };

  return (
    <section>
      <Row className="m-0 overflow-auto h-100vh">
        <Col md={6} className="bannerleft-bg">
          <BannerComponent
            type={step === 2 ? "upload-image" : "personal-details"}
          />
        </Col>
        <Col md={6} className="bannerright-bg">
          <div className="m-5">
            <div className="hstack gap-1">
              <div>
                <div
                  className={
                    step === 1 ? "active-cl round-cl" : "filled-cl round-cl"
                  }
                >
                  <img
                    src={step === 1 ? Step1Active : Step1Filled}
                    alt="icon"
                  />
                </div>
              </div>
              <div
                className={`w-100 ${
                  step !== 1 ? "active-border-dotted" : "border-dotted"
                }`}
              ></div>
              <div>
                <div
                  className={
                    step === 1
                      ? "deactive-cl round-cl"
                      : step === 2
                      ? "active-cl round-cl"
                      : "filled-cl round-cl"
                  }
                >
                  <img
                    src={
                      step === 1
                        ? Step2
                        : step === 2
                        ? Step2Active
                        : Step2Filled
                    }
                    alt="icon"
                  />
                </div>
              </div>
              <div
                className={`w-100 ${
                  step === 3 ? "active-border-dotted" : "border-dotted"
                }`}
              ></div>
              <div>
                <div
                  className={
                    step === 1 || step === 2
                      ? "deactive-cl round-cl"
                      : "active-cl round-cl"
                  }
                >
                  <img
                    src={step === 1 || step === 2 ? Step3 : Step3Active}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div className="hstack gap-1 justify-content-between">
              <div className="fs-12 rel-left-5 mt-1 activeLabel">Profile</div>
              <div
                className={`fs-12 rel-left-15 mt-1 
              ${step === 2 || step === 3 ? "activeLabel" : "grey-color-2"}`}
              >
                Upload Photos
              </div>
              <div
                className={`fs-12 rel-left-5 mt-1  ${
                  step === 3 ? "activeLabel" : "grey-color-2"
                }`}
              >
                Summary
              </div>
            </div>
            <section className="my-3">
              {step === 1 && (
                <PersonalDetailsForm
                  onSubmit={handleStep1Submit}
                  defaultValues={formData}
                />
              )}
              {step === 2 && (
                <UploadPhotosForm
                  onSubmit={handleStep2Submit}
                  onBack={handleBack}
                  defaultValues={formData}
                />
              )}
              {step === 3 && (
                <SummaryComponent
                  data={formData}
                  onBack={handleBack}
                  confirmSubmit={confirmSubmit}
                />
              )}
            </section>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default PersonalDetails;
