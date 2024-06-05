import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import SingleImage from "../../assets/images/single.png";
import FullImage from "../../assets/images/full.png";
import FamilyImage from "../../assets/images/family.png";

function SummaryComponent({data, onBack, confirmSubmit}) {
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
              <div className="fs-20">John Doe</div>
            </div>
          </Col>
          <Col md={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Phone Number</div>
              <div className="fs-20">+91 98765 43210</div>
            </div>
          </Col>
          <Col md={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Date of Birth</div>
              <div className="fs-20">03-01-1998</div>
            </div>
          </Col>
          <Col md={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Employee Code</div>
              <div className="fs-20">SHAI96633</div>
            </div>
          </Col>
          <Col md={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Department</div>
              <div className="fs-20">Insurance Claims</div>
            </div>
          </Col>
          <Col md={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">Designation</div>
              <div className="fs-20">Sr. Claims Manager</div>
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
              <div className="fs-20">Tamilnadu</div>
            </div>
          </Col>
          <Col md={4}>
            <div className="vstack gap-1">
              <div className="fs-12 grey-color">City</div>
              <div className="fs-20">Chennai</div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-4">
        <div className="fs-28 fw-600 dark-blue mb-2">Uploaded Photos</div>
        <div className="hstack uploadimages-ctr gap-3">
          <div>
            <img src={SingleImage} alt="passport-size" />
          </div>
          <div>
            <img src={FullImage} alt="full-size" />
          </div>
          <div>
            <img src={FamilyImage} alt="family-image" />
          </div>
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
      {/* <button onClick={onBack}>Back</button> */}
    </section>
  );
}

export default SummaryComponent;
