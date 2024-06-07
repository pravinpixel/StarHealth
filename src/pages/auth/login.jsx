import React, {useState} from "react";
import {Row, Col} from "react-bootstrap";
import LoginFormComponent from "./loginForm";
import OtpFormComponent from "./otpForm";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authLogin, authOtpVerify} from "../../redux/Service/authService";
import {notify} from "helpers/global";
import BannerComponent from "../../components/banner";

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
        <Col md={6} className="bannerleft-bg position-relative">
          <BannerComponent />
        </Col>
        <Col
          md={6}
          className="bannerright-bg d-flex align-items-center justify-content-center bannerright-auth"
        >
          {formStateValue === "login" ? (
            <div className="authright-side">
              <LoginFormComponent loginSubmit={loginSubmit} loading={loading} />
            </div>
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
