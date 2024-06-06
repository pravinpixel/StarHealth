import React, {useState} from "react";
import {Row, Col} from "react-bootstrap";
import LoginFormComponent from "./loginForm";
import BannerComponent from "../../components/banner";
import OtpFormComponent from "./otpForm";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authLogin, authOtpVerify} from "../../redux/Service/authService";
import {notify} from "helpers/global";
import authLeftImage from "../../assets/images/authLeft.png";

function LoginComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formStateValue, setFormStateValue] = useState("login");
  const [emailValue, setEmailValue] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginSubmit = async (formdata) => {
    setLoading(true);
    try {
      const response = await dispatch(authLogin(formdata)).unwrap();
      setEmailValue(formdata?.email);
      setLoading(false);
      setFormStateValue("otp");
      notify(response);
    } catch (error) {
      setLoading(false);
      notify(error);
    }
  };

  const otpFormSubmit = async (data) => {
    const formData = {
      ...data,
      email: emailValue,
    };
    setLoading(true);
    try {
      const response = await dispatch(authOtpVerify(formData)).unwrap();
      setLoading(false);
      sessionStorage.setItem("token", response?.data?.access_token);
      navigate("/admin/personal-details");
      notify(response);
    } catch (error) {
      setLoading(false);
      notify(error);
    }
  };

  return (
    <section>
      <Row className="m-0">
        <Col md={6} className="p-0">
          <img src={authLeftImage} alt="img" className="w-100 h-100vh" />
        </Col>
        {/* <Col md={6} className="bannerleft-bg-1">
          <BannerComponent />
        </Col> */}
        <Col
          md={6}
          className="bannerright-bg d-flex align-items-center justify-content-center"
        >
          {formStateValue === "login" ? (
            <LoginFormComponent loginSubmit={loginSubmit} loading={loading} />
          ) : formStateValue === "otp" ? (
            <OtpFormComponent
              otpFormSubmit={otpFormSubmit}
              loading={loading}
              emailValue={emailValue}
            />
          ) : null}
        </Col>
      </Row>
    </section>
  );
}

export default LoginComponent;
