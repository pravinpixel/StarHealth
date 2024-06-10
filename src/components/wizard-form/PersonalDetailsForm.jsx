import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {PersonalInformationSchema} from "helpers/validate";
import DatePicker from "react-datepicker";
import {useDispatch} from "react-redux";
import {notify} from "helpers/global";
import {Typeahead} from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-datepicker/dist/react-datepicker.css";
import {cityListByID} from "../../redux/Service/essentialService";

function PersonalDetailsForm({
  onSubmit,
  defaultValues,
  stateList,
  departmentList,
  loading,
}) {
  const {
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(PersonalInformationSchema),
    mode: "all",
    reValidateMode: "onSubmit",
    defaultValues: {defaultValues},
  });
  const dispatch = useDispatch();
  const stateValue = watch("state");
  const [cityList, setCityList] = useState([]);

  const essentialListApi = async () => {
    try {
      const response = await dispatch(cityListByID(stateValue[0]?.id)).unwrap();
      setCityList(response?.data?.cites);
    } catch (error) {
      notify(error);
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (stateValue?.length === 0) {
      setValue("city", []);
    }

    if (stateValue) {
      essentialListApi();
    }
  }, [stateValue]);

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
      <Form onSubmit={handleSubmit(onSubmit)}>
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
                        type="number"
                        className={errors.mobile_number ? "error-input" : ""}
                        placeholder="Enter Your Phone Number"
                        {...field}
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
                render={({field}) => {
                  return (
                    <DatePicker
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                      selected={field.value}
                      dateFormat="dd-MM-yyyy"
                      placeholderText="Select Your Date of Birth"
                      className={`form-control`}
                      autoComplete="off"
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      maxDate={new Date()}
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
                    <Form.Group className="w-100" controlId="department">
                      <Typeahead
                        id="department"
                        labelKey="label"
                        allowNew
                        placeholder="Select Your Department"
                        options={departmentList}
                        selected={field.value}
                        onChange={(e) => {
                          field.onChange(e);
                        }}
                      />
                    </Form.Group>
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
                    <Form.Group className="w-100" controlId="department">
                      <Typeahead
                        id="department"
                        labelKey="label"
                        allowNew
                        placeholder="Select Your Designation"
                        options={departmentList}
                        selected={field.value}
                        onChange={(e) => {
                          field.onChange(e);
                        }}
                      />
                    </Form.Group>
                  );
                }}
              />
              {errors.department && (
                <Form.Text className="text-danger">
                  {errors.department.message}
                </Form.Text>
              )}
              {/* <Form.Group>
                <Controller
                  name="designation"
                  control={control}
                  render={({field}) => {
                    return (
                      <Form.Control
                        type="text"
                        className={errors.designation ? "error-input" : ""}
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
              </Form.Group> */}
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
                        placeholder="Enter State"
                        options={stateList}
                        selected={field.value}
                        onChange={(e) => {
                          field.onChange(e);
                        }}
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
                    <Form.Group className="w-100" controlId="city">
                      <Typeahead
                        id="city"
                        labelKey="label"
                        placeholder="Enter City"
                        options={cityList}
                        selected={field.value}
                        onChange={(e) => {
                          field.onChange(e);
                        }}
                      />
                    </Form.Group>
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
