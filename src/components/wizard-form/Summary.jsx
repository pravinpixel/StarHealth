import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {personalDetailList} from "../../redux/Service/adminService";
import {notify} from "helpers/global";
import dayjs from "dayjs";

function SummaryComponent({onBack, confirmSubmit}) {
  const [summaryList, setSummaryList] = useState(null);
  const dispatch = useDispatch();
  const personalDetailListApi = async () => {
    try {
      const response = await dispatch(personalDetailList()).unwrap();
      setSummaryList(response?.data);
    } catch (error) {
      notify(error);
      console.log("error", error);
    }
  };

  useEffect(() => {
    personalDetailListApi();
  }, []);

  return (
    <section>
      <div className="vstack gap-2">
        <div className="fs-28 fw-600 dark-blue">Summary</div>
        <div className="fs-18 grey-color roboto-font">
          Please verify your details before submitting
        </div>
      </div>
      <div className="mt-4">
        <div className="fs-28 fw-600 dark-blue mb-2">Personal Details</div>
        <Row className="row-gap-3 roboto-font">
          <Col xs={6} sm={6} md={6} lg={6} xl={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Name</div>
              <div className="fs-20">{summaryList?.employee_name}</div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Phone Number</div>
              <div className="fs-20">+91 {summaryList?.mobile_number}</div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Date of Birth</div>
              <div className="fs-20">
                {dayjs(summaryList?.dob).format("DD-MM-YYYY")}
              </div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Employee Code</div>
              <div className="fs-20">{summaryList?.employee_code}</div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Department</div>
              <div className="fs-20">{summaryList?.department}</div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Designation</div>
              <div className="fs-20">{summaryList?.designation}</div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-4">
        <div className="fs-28 fw-600 dark-blue mb-2">Location Details</div>
        <Row className="row-gap-3 roboto-font">
          <Col xs={6} sm={6} md={6} lg={6} xl={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">State</div>
              <div className="fs-20">{summaryList?.state[0]?.label}</div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">City</div>
              <div className="fs-20">{summaryList?.city}</div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-4">
        <div className="fs-28 fw-600 dark-blue mb-2">Uploaded Photos</div>
        <div className="hstack uploadimages-ctr gap-3 flex-wrap">
          {summaryList?.passport && (
            <div>
              <img src={summaryList?.passport} alt="passport-size" />
            </div>
          )}
          {summaryList?.profile && (
            <div>
              <img src={summaryList?.profile} alt="full-size" />
            </div>
          )}
          {summaryList?.family && (
            <div>
              <img src={summaryList?.family} alt="family" />
            </div>
          )}
        </div>
      </div>
      <div className="my-5 hstack gap-4 justify-content-between">
        <Button onClick={() => onBack()} className="secondary-button">
          Edit Information
        </Button>
        <Button className="primary-button" onClick={() => confirmSubmit()}>
          Confirm & Submit
        </Button>
      </div>
    </section>
  );
}

export default SummaryComponent;
