import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Form, Modal} from "react-bootstrap";
import {LoginSchema} from "../../helpers/validate";
import EmailGroup from "../../assets/images/email-group.png";
import CheckedIcon from "../../assets/images/checked.png";
import NotCheckedIcon from "../../assets/images/not-checked.png";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function LoginFormComponent({loginSubmit, loading}) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [termsShow, setTermsShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onFormSubmit = (formData) => {
    if (termsShow) {
      loginSubmit(formData);
    } else {
      toast.error("Enable Your Terms & Conditions", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <div className="dark-blue fw-600 fs-26 text-center">
        Login Using your Email Address
      </div>
      <Form
        autoComplete="off"
        onSubmit={handleSubmit(onFormSubmit)}
        className="loginform-ctr mt-5 roboto-font"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="input-group mb-1">
            <span className="input-group-text bg-transparent" id="basic-addon1">
              <img src={EmailGroup} alt="group" />
            </span>
            <Form.Control
              type="text"
              className={errors.email ? "error-input" : ""}
              placeholder="Enter Official Email Address"
              {...register("email", {required: true})}
            />
          </div>
          {errors.email && (
            <Form.Text className="text-danger mt-3">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>

        <div
          className="hstack gap-2 ps-1"
          onClick={() => {
            handleShow();
          }}
        >
          <div>
            {termsShow ? (
              <img src={CheckedIcon} alt="icon" width={15} height={15} />
            ) : (
              <img src={NotCheckedIcon} alt="icon" />
            )}
          </div>
          <div className="cursor grey-color terms-condition">
            By checking the box, you agree to our{" "}
            <span className="fw-500 text-decoration-underline">
              Terms & Conditions
            </span>
          </div>
        </div>

        <div className="text-center my-4">
          <Button className="primary-button" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Generate OTP"}
          </Button>
        </div>
      </Form>

      {/* Modal terms and condition */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="termsand-condotion-popup"
      >
        <Modal.Body className="pt-4 pb-5">
          <div>
            <div className="fs-26 dark-blue text-center fw-600 mb-3">
              Terms & Conditions
            </div>
            <div className="fs-18 roboto-font grey-color mt-2 text-justify">
              In consideration of my voluntary participation in the production
              of a video, film, audio recording or still photographs in
              connection with my employment, I, the undersigned employee, hereby
              consent to my image being photographed, filmed or videotaped
              and/or my voice or sounds being recorded. I hereby authorize Star
              Health (“The Company’) to use or cause to be used still
              photographs or motion picture footage, recordings of my voice and
              my name for advertising, publicity, commercial or other business
              purposes. I authorize the Company to print, reproduce, or cause to
              be reproduced and used, my name, photograph, film or video
              containing my image and/or audio recordings of my voice or sounds.
            </div>
            <div className="fs-18 roboto-font grey-color mt-2 text-justify">
              Further, I hereby release the Company, their respective directors,
              officers, agents, employees, and customers from all claims,
              judgments, fees, damages or actions of any kind on account of such
              use, including, without limitation, any claim for additional
              compensation related to such use. I waive and relinquish all
              rights, if any, that I have in any photographs, motion picture
              footage or audio recordings produced by me, or containing my image
              or voice in connection with my voluntary participation in the
              production and agree that they shall constitute “works for hire.”
              I further agree that all rights, title and interest in and to such
              material shall be solely and exclusively owned by the Company, and
              I shall neither have, nor claim any rights, title or interest
              therein. I have read and understood this consent and release.
            </div>
            <div className="fs-18 roboto-font grey-color mt-2">
              This consent is in perpetuity and can be revoked at any time for
              future campaigns and not in retrospect by the employee, if he/she
              wishes to do so, through a written request sent to{" "}
              <Link
                to="mailto:corpcomm@starhealth.in"
                target="_blank"
                className="dark-blue"
              >
                corpcomm@starhealth.in
              </Link>
            </div>
            <div className="hstack gap-3 justify-content-center mt-4">
              <Button
                className="primary-button"
                onClick={() => {
                  setTermsShow(true);
                  handleClose();
                }}
              >
                I Accept
              </Button>
              <Button
                className="secondary-button"
                onClick={() => {
                  navigate("/");
                  setTermsShow(false);
                  handleClose();
                }}
              >
                I Decline
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LoginFormComponent;
