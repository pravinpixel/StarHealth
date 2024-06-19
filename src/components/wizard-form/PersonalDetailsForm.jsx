import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {PersonalInformationSchema} from "helpers/validate";
import {Typeahead} from "react-bootstrap-typeahead";
import DatePicker from "react-multi-date-picker";
import CalenderIcon from "../../assets/images/calendar.png";
import "react-bootstrap-typeahead/css/Typeahead.css";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutApi} from "../../redux/Service/authService";
import {notify} from "helpers/global";

function PersonalDetailsForm({onSubmit, defaultValues, stateList, loading}) {
  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(PersonalInformationSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {defaultValues},
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function CustomInput({onFocus, value, onChange, openCalendar}) {
    return (
      <div className="hstack calenderInput">
        <input
          onFocus={onFocus}
          value={value}
          onChange={onChange}
          placeholder="YYYY/MM/DD"
        />
        <div onClick={openCalendar} className="cursor">
          <img src={CalenderIcon} alt="c" width={20} />
        </div>
      </div>
    );
  }

  const handleKeyDown = (e) => {
    // Allow numbers, backspace, delete, and arrow keys
    if (!/[\d\b]/.test(e.key) && e.key.length === 1) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  return (
    <section>
      <div>
        <div className="fs-28 fw-600 dark-blue">Welcome,</div>
        <div className="fs-18 grey-color roboto-font">
          To get started, please enter the following details.
        </div>
      </div>
      <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="fs-22 fw-600 dark-blue my-3">Personal Details</div>
          <Row className="innerform-ctr loginform-ctr roboto-font row-gap-4">
            <Col xs={12} sm={12} md={12} lg={6}>
              <Form.Group>
                <Controller
                  name="employee_name"
                  control={control}
                  render={({field}) => {
                    return (
                      <Form.Control
                        type="text"
                        className={errors.employee_name ? "error-input" : ""}
                        placeholder="Enter Your Name"
                        {...field}
                      />
                    );
                  }}
                />
                {errors.employee_name && (
                  <Form.Text className="text-danger">
                    {errors.employee_name.message}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <Controller
                name="mobile_number"
                control={control}
                render={({field}) => {
                  return (
                    <div className="input-group">
                      <span
                        className="input-group-text bg-transparent dark-blue fw-600"
                        id="basic-addon1"
                      >
                        + 91
                      </span>
                      <Form.Control
                        type="text"
                        className={errors.mobile_number ? "error-input" : ""}
                        placeholder="Enter Your Mobile Number"
                        {...field}
                        maxLength="10"
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                  );
                }}
              />
              {errors.mobile_number && (
                <Form.Text className="text-danger">
                  {errors.mobile_number.message}
                </Form.Text>
              )}
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <Controller
                name="dob"
                control={control}
                className="customeDateField"
                render={({field}) => {
                  return (
                    <DatePicker
                      {...field}
                      maxDate={new Date()}
                      render={<CustomInput />}
                    />
                  );
                }}
              />
              {errors.dob && (
                <Form.Text className="text-danger">
                  {errors.dob.message}
                </Form.Text>
              )}
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <Form.Group>
                <Controller
                  name="employee_code"
                  control={control}
                  render={({field}) => {
                    return (
                      <Form.Control
                        type="text"
                        className={errors.employee_code ? "error-input" : ""}
                        placeholder="Enter Your Employee Code"
                        {...field}
                      />
                    );
                  }}
                />
                {errors.employee_code && (
                  <Form.Text className="text-danger">
                    {errors.employee_code.message}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <Controller
                name="department"
                control={control}
                render={({field}) => {
                  return (
                    <Form.Control
                      type="text"
                      className={errors.employee_name ? "error-input" : ""}
                      placeholder="Enter Your Department"
                      {...field}
                    />
                  );
                }}
              />
              {errors.department && (
                <Form.Text className="text-danger">
                  {errors.department.message}
                </Form.Text>
              )}
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <Controller
                name="designation"
                control={control}
                render={({field}) => {
                  return (
                    <Form.Control
                      type="text"
                      className={errors.employee_name ? "error-input" : ""}
                      placeholder="Enter Your Designation"
                      {...field}
                    />
                  );
                }}
              />
              {errors.designation && (
                <Form.Text className="text-danger">
                  {errors.designation.message}
                </Form.Text>
              )}
            </Col>
          </Row>
          <div className="fs-22 fw-600 dark-blue my-3">Location Details</div>
          <Row className="innerform-ctr loginform-ctr roboto-font row-gap-4">
            <Col xs={12} sm={12} md={12} lg={6}>
              <Controller
                name="state"
                control={control}
                render={({field}) => {
                  return (
                    <Form.Group className="w-100" controlId="state">
                      <Typeahead
                        id="state"
                        labelKey="label"
                        placeholder="Select State"
                        options={stateList}
                        selected={field.value}
                        onChange={(e) => {
                          field.onChange(e);
                        }}
                        positionFixed={true}
                      />
                    </Form.Group>
                  );
                }}
              />
              {errors.state && (
                <Form.Text className="text-danger">
                  {errors.state.message}
                </Form.Text>
              )}
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <Controller
                name="city"
                control={control}
                render={({field}) => {
                  return (
                    <Form.Control
                      type="text"
                      className={errors.employee_name ? "error-input" : ""}
                      placeholder="Enter Your City"
                      {...field}
                    />
                  );
                }}
              />
              {errors.city && (
                <Form.Text className="text-danger">
                  {errors.city.message}
                </Form.Text>
              )}
            </Col>
          </Row>
        </div>

        <div className="my-5 text-center">
          <Button className="primary-button" type="sumbit" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default PersonalDetailsForm;
