import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {personalDetailList} from "../../redux/Service/adminService";
import {notify} from "helpers/global";

function SummaryComponent({onBack, confirmSubmit, loading}) {
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
          <Col md={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Name</div>
              <div className="fs-20">{summaryList?.employee_name}</div>
            </div>
          </Col>
          <Col md={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Phone Number</div>
              <div className="fs-20">+91 {summaryList?.mobile_number}</div>
            </div>
          </Col>
          <Col md={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Date of Birth</div>
              <div className="fs-20">{summaryList?.dob}</div>
            </div>
          </Col>
          <Col md={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Employee Code</div>
              <div className="fs-20">{summaryList?.employee_code}</div>
            </div>
          </Col>
          <Col md={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Department</div>
              <div className="fs-20">{summaryList?.department[0]?.label}</div>
            </div>
          </Col>
          <Col md={4}>
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
          <Col md={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">State</div>
              <div className="fs-20">{summaryList?.state[0]?.label}</div>
            </div>
          </Col>
          <Col md={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">City</div>
              <div className="fs-20">{summaryList?.city[0]?.label}</div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-4">
        <div className="fs-28 fw-600 dark-blue mb-2">Uploaded Photos</div>
        <div className="hstack uploadimages-ctr gap-3">
          <div>
            <img src={summaryList?.passport_photo} alt="passport-size" />
          </div>
          <div>
            <img src={summaryList?.profile_photo} alt="full-size" />
          </div>
          {summaryList?.family_photo && (
            <div>
              <img src={summaryList?.family_photo} alt="family-image" />
            </div>
          )}
        </div>
      </div>
      <div className="my-5 hstack gap-4 justify-content-between">
        <Button onClick={() => onBack()} className="secondary-button">
          Edit Information
        </Button>
        <Button
          className="primary-button"
          onClick={() => confirmSubmit()}
          disabled={loading}
        >
          {loading ? "Loading..." : "Confirm & Submit"}
        </Button>
      </div>
      {/* <button onClick={onBack}>Back</button> */}
    </section>
  );
}

export default SummaryComponent;
