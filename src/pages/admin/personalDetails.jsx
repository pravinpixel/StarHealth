import React, {useEffect, useState} from "react";
import {Button, Col, Modal, Row} from "react-bootstrap";
import PersonalDetailsForm from "components/wizard-form/PersonalDetailsForm";
import UploadPhotosForm from "components/wizard-form/UploadPhotosForm";
import SummaryComponent from "components/wizard-form/Summary";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {notify} from "helpers/global";
import dayjs from "dayjs";
import {essentialList} from "../../redux/Service/essentialService";
import BannerComponent from "../../components/banner";
import LogoutIcon from "../../assets/images/icons/logout.png";
import Step1Active from "../../assets/images/icons/step1-active.png";
import Step1Filled from "../../assets/images/icons/step1-filled.png";
import Step2 from "../../assets/images/icons/step2.png";
import Step2Active from "../../assets/images/icons/step2-active.png";
import Step2Filled from "../../assets/images/icons/step2-filled.png";
import Step3 from "../../assets/images/icons/step3.png";
import Step3Active from "../../assets/images/icons/step3-active.png";
import {
  personalDetailList,
  personalDetailsApi,
  personalDetailsUpdateApi,
} from "../../redux/Service/adminService";
import {logoutApi} from "../../redux/Service/authService";

function PersonalDetails() {
  const [stateList, setStateList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const location = useLocation();
  const [backStep, setBackStep] = useState(null);
  const [defaultValues, setDefaultValues] = useState([]);
  const [step, setStep] = useState(null);
  const [updateApiStatus, setUpdateApiStaus] = useState(null);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutBtn = () => {
    setLogoutModal(true);
  };

  const logoutBtnClose = () => {
    setLogoutModal(false);
  };

  const handleStep1Submit = async (data) => {
    setLoading(true);
    const firstStepData = {
      ...data,
      state: data?.state[0]?.label,
      state_id: data?.state[0]?.id,
      dob: dayjs(data?.dob).format("YYYY/MM/DD"),
      status: "upload",
    };
    try {
      const response = await dispatch(
        updateApiStatus === "completed"
          ? personalDetailsUpdateApi(firstStepData)
          : personalDetailsApi(firstStepData)
      ).unwrap();
      updateApiStatus === "completed" && setUpdateApiStaus("completed");
      setStep("upload");
      setLoading(false);
      notify(response);
      navigate("/upload-images");
    } catch (error) {
      setLoading(false);
      notify(error);
    }
  };

  const handleStep2Submit = async (data) => {
    const secondStepData = {
      family_photo: data?.family_photo,
      passport_photo: data?.passport_photo,
      profile_photo: data?.profile_photo,
      status: "summary",
    };
    setLoading(true);
    try {
      const response = await dispatch(
        updateApiStatus === "completed"
          ? personalDetailsUpdateApi(secondStepData)
          : personalDetailsApi(secondStepData)
      ).unwrap();
      updateApiStatus === "completed" && setUpdateApiStaus("completed");
      setStep("summary");
      setLoading(false);
      notify(response);
      navigate("/summary");
    } catch (error) {
      setLoading(false);
      notify(error);
    }
  };

  const handleStep2BackSubmit = async (data) => {
    setImageLoading(true);
    const secondStepData = {
      ...data,
      status: "summary",
    };
    try {
      await dispatch(
        updateApiStatus === "completed"
          ? personalDetailsUpdateApi(secondStepData)
          : personalDetailsApi(secondStepData)
      ).unwrap();
      updateApiStatus === "completed" && setUpdateApiStaus("completed");
      setImageLoading(false);
      personalDetailListApi();
      setBackStep(step === "summary" ? "upload" : "basic");
    } catch (error) {
      notify(error);
      setImageLoading(false);
    }
  };

  const handleBack = (values) => {
    if (step === "upload") {
      handleStep2BackSubmit(values);
      setBackStep(step === "summary" ? "upload" : "basic");
      step === "summary"
        ? navigate("/upload-images")
        : navigate("/personal-details");
    } else {
      personalDetailListApi();
      essentialListApi();
      setBackStep(step === "summary" ? "upload" : "basic");
      step === "summary"
        ? navigate("/upload-images")
        : navigate("/personal-details");
    }
  };

  const logoutFn = async () => {
    try {
      await dispatch(logoutApi()).unwrap();
      sessionStorage.clear();
    } catch (error) {
      notify(error);
      console.log("error", error);
    }
  };

  const confirmSubmit = async () => {
    setLoading(true);
    try {
      const response = await dispatch(
        updateApiStatus === "completed"
          ? personalDetailsUpdateApi({status: "completed"})
          : personalDetailsApi({status: "completed"})
      ).unwrap();
      navigate("/thank-you");
      setLoading(false);
      notify(response);
      logoutFn();
    } catch (error) {
      setLoading(false);
      notify(error);
    }
  };

  const essentialListApi = async () => {
    try {
      const response = await dispatch(essentialList()).unwrap();
      setStateList(response?.data?.states);
    } catch (error) {
      notify(error);
      console.log("error", error);
    }
  };

  const personalDetailListApi = async () => {
    try {
      const response = await dispatch(personalDetailList()).unwrap();
      setDefaultValues(response?.data);
    } catch (error) {
      notify(error);
      console.log("error", error);
    }
  };

  const logoutFnModal = async () => {
    setLogoutLoading(true);
    try {
      const response = await dispatch(logoutApi()).unwrap();
      sessionStorage.clear();
      setLogoutModal(false);
      navigate("/");
      notify(response);
    } catch (error) {
      notify(error);
      console.log("error", error);
    } finally {
      setLogoutLoading(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/personal-details") {
      navigate("/personal-details");
      setBackStep("basic");
    } else if (location.pathname === "/upload-images") {
      navigate("/upload-images");
      setBackStep("upload");
    } else if (location.pathname === "/summary") {
      navigate("/summary");
      setBackStep("summary");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (backStep) {
      setStep(backStep);
    } else {
      setStep(defaultValues?.status);
      setUpdateApiStaus(defaultValues?.status);
    }
  }, [defaultValues]);

  useEffect(() => {
    essentialListApi();
    personalDetailListApi();
  }, []);

  return (
    <section>
      <Row className="m-0 overflow-auto h-100vh">
        <Col md={6} className="bannerleft-bg-1 position-relative">
          <BannerComponent
            type={
              step === "upload"
                ? "upload-image"
                : step === "summary"
                ? "summary"
                : "personal-details"
            }
          />
        </Col>
        <Col md={6} className="bannerright-bg banner-rightamin">
          <div className="my-3 m-5">
            <div
              className="hstack gap-3 mb-2 justify-content-end cursor dnone-xs dnone-sm"
              onClick={() => logoutBtn()}
            >
              <div>
                <img src={LogoutIcon} alt="logout" />
              </div>
              <div className="roboto-font grey-color fs-14">Logout</div>
            </div>
            <div className="hstack gap-1">
              <div>
                <div
                  className={
                    step === "basic"
                      ? "active-cl round-cl"
                      : step === "completed"
                      ? "active-cl round-cl"
                      : "filled-cl round-cl"
                  }
                >
                  <img
                    src={
                      step === "basic"
                        ? Step1Active
                        : step === "completed"
                        ? Step1Active
                        : Step1Filled
                    }
                    alt="icon"
                  />
                </div>
              </div>
              <div
                className={`w-100 ${
                  step === "upload"
                    ? "active-border-dotted"
                    : step === "summary"
                    ? "active-border-dotted"
                    : "border-dotted"
                }`}
              ></div>
              <div>
                <div
                  className={
                    step === "basic"
                      ? "deactive-cl round-cl"
                      : step === "completed"
                      ? "deactive-cl round-cl"
                      : step === "upload"
                      ? "active-cl round-cl"
                      : "filled-cl round-cl"
                  }
                >
                  <img
                    src={
                      step === "basic"
                        ? Step2
                        : step === "completed"
                        ? Step2
                        : step === "upload"
                        ? Step2Active
                        : Step2Filled
                    }
                    alt="icon"
                  />
                </div>
              </div>
              <div
                className={`w-100 ${
                  step === "summary" ? "active-border-dotted" : "border-dotted"
                }`}
              ></div>
              <div>
                <div
                  className={
                    step === "basic"
                      ? "deactive-cl round-cl"
                      : step === "completed"
                      ? "deactive-cl round-cl"
                      : step === "upload"
                      ? "deactive-cl round-cl"
                      : "active-cl round-cl"
                  }
                >
                  <img
                    src={
                      step === "basic"
                        ? Step3
                        : step === "completed"
                        ? Step3
                        : step === "upload"
                        ? Step3
                        : Step3Active
                    }
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div className="hstack gap-1 justify-content-between">
              <div className="fs-12 rel-left-5 mt-1 activeLabel">Profile</div>
              <div
                className={`fs-12 rel-left-15 mt-1 
              ${
                step === "upload" || step === "summary"
                  ? "activeLabel"
                  : "grey-color-2"
              }`}
              >
                Upload Photos
              </div>
              <div
                className={`fs-12 rel-left-5 mt-1  ${
                  step === "summary" ? "activeLabel" : "grey-color-2"
                }`}
              >
                Summary
              </div>
            </div>
            <section className="my-3">
              {(step === "basic" || step === "completed") && (
                <PersonalDetailsForm
                  onSubmit={handleStep1Submit}
                  defaultValues={defaultValues}
                  stateList={stateList}
                  loading={loading}
                />
              )}
              {step === "upload" && (
                <UploadPhotosForm
                  onSubmit={handleStep2Submit}
                  onBack={handleBack}
                  defaultValues={defaultValues}
                  loading={loading}
                  imageLoading={imageLoading}
                />
              )}
              {step === "summary" && (
                <SummaryComponent
                  onBack={handleBack}
                  confirmSubmit={confirmSubmit}
                  loading={loading}
                />
              )}
            </section>
          </div>
        </Col>
      </Row>

      <Modal
        show={logoutModal}
        onHide={logoutBtnClose}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="logout-modal"
      >
        <div className="vstack gap-4 modal-ctr-logout">
          <div className="text-center">
            <div className="fs-20 fw-600">
              Are you sure you want to sign out?
            </div>
            <div className="fs-20 fw-600">
              Your information will not be saved
            </div>
          </div>
          <div className="hstack align-items-center justify-content-center gap-4">
            <Button
              className="secondary-button"
              onClick={() => logoutBtnClose()}
            >
              Go Back
            </Button>
            <Button
              className="primary-button"
              disabled={logoutLoading}
              onClick={() => logoutFnModal()}
            >
              {logoutLoading ? "Loading..." : " Yes, Sign Out"}
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default PersonalDetails;
