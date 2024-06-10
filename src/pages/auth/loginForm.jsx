import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Form, Modal} from "react-bootstrap";
import {LoginSchema} from "../../helpers/validate";
import EmailGroup from "../../assets/images/email-group.png";
import CheckedIcon from "../../assets/images/checked.png";
import NotCheckedIcon from "../../assets/images/not-checked.png";

function LoginFormComponent({loginSubmit, loading}) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "all",
    reValidateMode: "onSubmit",
  });

  const [show, setShow] = useState(false);

  const [termsShow, setTermsShow] = useState(false);
  const [termsShowCondition, setTermsShowCondition] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onFormSubmit = (formData) => {
    if (termsShow) {
      loginSubmit(formData);
    } else {
      setTermsShowCondition(true);
    }
  };

  return (
    <div>
      <div className="dark-blue fw-600 fs-26 text-center">
        Login Using your Email Address
      </div>
      <Form
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
          className="hstack gap-2"
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

        {termsShowCondition && (
          <Form.Text className="text-danger mt-3">
            You must accept the terms
          </Form.Text>
        )}

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
            <div className="fs-18 roboto-font grey-color mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              magna libero, posuere a purus eget, rutrum aliquam lorem. Vivamus
              ac dolor sit amet dui malesuada fermentum. Fusce vitae justo sit
              amet lectus volutpat eleifend. Nam fermentum felis a gravida
              semper. Sed lacus felis, ullamcorper sit amet lectus vitae,
              tincidunt mollis lacus. Duis lacus purus, finibus ut pulvinar sed,
              egestas et dui. Donec sollicitudin tortor non lectus faucibus
              commodo. Phasellus eleifend tortor nec turpis luctus faucibus.
              Nulla nec feugiat turpis. Cras scelerisque, dolor non auctor
              venenatis, sem diam egestas risus, fringilla vehicula mauris urna
              vestibulum ipsum. Etiam auctor hendrerit purus quis elementum.
            </div>
            <div className="fs-18 roboto-font grey-color mt-2">
              Sed rhoncus laoreet ante eget rhoncus. Aliquam diam quam, semper
              et maximus in, cursus vel quam. Fusce id porta quam. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Aliquam et urna vitae sem egestas ultricies quis
              non nunc. Integer sit amet facilisis ex, non placerat augue. Donec
              ut ullamcorper neque.
            </div>
            <div className="fs-18 roboto-font grey-color mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              magna libero, posuere a purus eget, rutrum aliquam lorem. Vivamus
              ac dolor sit amet dui malesuada fermentum. Fusce vitae justo sit
              amet lectus volutpat eleifend. Nam fermentum felis a gravida
              semper. Sed lacus felis, ullamcorper sit amet lectus vitae,
              tincidunt mollis lacus. Duis lacus purus, finibus ut pulvinar sed,
              egestas et dui. Donec sollicitudin tortor non lectus faucibus
              commodo. Phasellus eleifend tortor nec turpis luctus faucibus.
              Nulla nec feugiat turpis. Cras scelerisque, dolor non auctor
              venenatis, sem diam egestas risus, fringilla vehicula mauris urna
              vestibulum ipsum. Etiam auctor hendrerit purus quis elementum.
            </div>
            <div className="fs-18 roboto-font grey-color mt-2">
              Sed rhoncus laoreet ante eget rhoncus. Aliquam diam quam, semper
              et maximus in, cursus vel quam. Fusce id porta quam. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Aliquam et urna vitae sem egestas ultricies quis
              non nunc. Integer sit amet facilisis ex, non placerat augue. Donec
              ut ullamcorper neque.
            </div>
            <div className="hstack gap-3 justify-content-center mt-4">
              <Button
                className="primary-button"
                onClick={() => {
                  setTermsShow(true);
                  setTermsShowCondition(false);
                  handleClose();
                }}
              >
                I Accept
              </Button>
              <Button
                className="secondary-button"
                onClick={() => {
                  setTermsShow(false);
                  setTermsShowCondition(false);
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
