import React from "react";
import {MuiOtpInput} from "mui-one-time-password-input";
import {Controller, useForm} from "react-hook-form";
import {Button, Form} from "react-bootstrap";

function OtpFormComponent({otpFormSubmit, loading}) {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data) => {
    otpFormSubmit(data);
  };
  return (
    <div>
      <div className="dark-blue fw-600 fs-26 text-center mb-4">
        OTP Verification
      </div>
      <div className="grey-color fs-14 text-center roboto-font">
        Please enter the OTP you have received in your email
      </div>
      <div className="optform-ctr text-center d-flex justify-content-center mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            rules={{validate: (value) => value.length === 4}}
            render={({field, fieldState}) => (
              <div>
                <MuiOtpInput {...field} length={4} />
                {fieldState.invalid ? (
                  <Form.Text className="text-danger t-3">OTP invalid</Form.Text>
                ) : null}
              </div>
            )}
            name="otp"
          />
          <div className="mt-5">
            <Button type="submit" className="primary-button" disabled={loading}>
              {loading ? "Loading" : "Verify"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtpFormComponent;
