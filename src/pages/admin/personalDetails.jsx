import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import PersonalDetailsForm from "components/wizard-form/PersonalDetailsForm";
import UploadPhotosForm from "components/wizard-form/UploadPhotosForm";
import SummaryComponent from "components/wizard-form/Summary";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {essentialList} from "../../redux/Service/essentialService";
import BannerComponent from "../../components/banner";
import Step1Active from "../../assets/images/icons/step1-active.png";
import Step1Filled from "../../assets/images/icons/step1-filled.png";
import Step2 from "../../assets/images/icons/step2.png";
import Step2Active from "../../assets/images/icons/step2-active.png";
import Step2Filled from "../../assets/images/icons/step2-filled.png";
import Step3 from "../../assets/images/icons/step3.png";
import Step3Active from "../../assets/images/icons/step3-active.png";
import {notify} from "helpers/global";
import dayjs from "dayjs";
import {
  personalDetailList,
  personalDetailsApi,
  personalDetailsUpdateApi,
} from "../../redux/Service/adminService";

function PersonalDetails() {
  const [stateList, setStateList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [backStep, setBackStep] = useState(null);

  const [defaultValues, setDefaultValues] = useState([]);
  const [step, setStep] = useState(null);

  useEffect(() => {
    if (backStep) {
      setStep(backStep);
    } else {
      setStep(defaultValues?.status);
    }
  }, [defaultValues]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStep1Submit = async (data) => {
    setLoading(true);
    const firstStepData = {
      ...data,
      city: data?.city[0]?.label,
      state: data?.state[0]?.label,
      department: data?.department[0]?.label,
      state_id: data?.state[0]?.id,
      dob: dayjs(data?.dob).format("YYYY/MM/DD"),
      status: "upload",
    };
    try {
      const response = await dispatch(
        step === "completed"
          ? personalDetailsUpdateApi(firstStepData)
          : personalDetailsApi(firstStepData)
      ).unwrap();
      setStep("upload");
      setLoading(false);
      notify(response);
    } catch (error) {
      setLoading(false);
      notify(error);
    }
  };

  const handleStep2Submit = async (data) => {
    const secondStepData = {
      ...data,
      city: data?.city[0]?.label,
      state: data?.state[0]?.label,
      department: data?.department[0]?.label,
      state_id: data?.state[0]?.id,
      dob: dayjs(data?.dob).format("YYYY/MM/DD"),
      status: "summary",
    };
    setLoading(true);
    try {
      const response = await dispatch(
        step === "completed"
          ? personalDetailsUpdateApi(secondStepData)
          : personalDetailsApi(secondStepData)
      ).unwrap();
      setStep("summary");
      setLoading(false);
      notify(response);
    } catch (error) {
      setLoading(false);
      notify(error);
    }
  };

  const handleBack = () => {
    personalDetailListApi();
    setBackStep(step === "summary" ? "upload" : "basic");
  };

  const confirmSubmit = async () => {
    setLoading(true);
    try {
      const response = await dispatch(
        step === "completed"
          ? personalDetailsUpdateApi({status: "completed"})
          : personalDetailsApi({status: "completed"})
      ).unwrap();
      sessionStorage.clear();
      navigate("/admin/thank-you");
      setLoading(false);
      notify(response);
    } catch (error) {
      setLoading(false);
      notify(error);
    }
  };

  const essentialListApi = async () => {
    try {
      const response = await dispatch(essentialList()).unwrap();
      setStateList(response?.data?.states);
      setDepartmentList(response?.data?.departments);
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

  useEffect(() => {
    essentialListApi();
    personalDetailListApi();
  }, []);

  return (
    <section>
      <Row className="m-0 overflow-auto h-100vh">
        <Col md={6} className="bannerleft-bg-1">
          <BannerComponent
            type={step === "upload" ? "upload-image" : "personal-details"}
          />
        </Col>
        <Col md={6} className="bannerright-bg">
          <div className="m-5">
            <div className="hstack gap-1">
              <div>
                <div
                  className={
                    step === "basic" || step === "completed"
                      ? "active-cl round-cl"
                      : "filled-cl round-cl"
                  }
                >
                  <img
                    src={
                      step === "basic" || step === "completed"
                        ? Step1Active
                        : Step1Filled
                    }
                    alt="icon"
                  />
                </div>
              </div>
              <div
                className={`w-100 ${
                  step !== "basic" || step !== "completed"
                    ? "active-border-dotted"
                    : "border-dotted"
                }`}
              ></div>
              <div>
                <div
                  className={
                    step === "basic" || step === "completed"
                      ? "deactive-cl round-cl"
                      : step === "upload"
                      ? "active-cl round-cl"
                      : "filled-cl round-cl"
                  }
                >
                  <img
                    src={
                      step === "basic" || step === "completed"
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
                    step === "basic" ||
                    step === "completed" ||
                    step === "upload"
                      ? "deactive-cl round-cl"
                      : "active-cl round-cl"
                  }
                >
                  <img
                    src={
                      step === "basic" ||
                      step === "completed" ||
                      step === "upload"
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
              {step === "basic" && (
                <PersonalDetailsForm
                  onSubmit={handleStep1Submit}
                  defaultValues={defaultValues}
                  stateList={stateList}
                  departmentList={departmentList}
                  loading={loading}
                />
              )}
              {step === "completed" && (
                <PersonalDetailsForm
                  onSubmit={handleStep1Submit}
                  defaultValues={defaultValues}
                  stateList={stateList}
                  departmentList={departmentList}
                  loading={loading}
                />
              )}
              {step === "upload" && (
                <UploadPhotosForm
                  onSubmit={handleStep2Submit}
                  onBack={handleBack}
                  defaultValues={defaultValues}
                  loading={loading}
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
    </section>
  );
}

export default PersonalDetails;
