import React, {useState} from "react";
import {MuiOtpInput} from "mui-one-time-password-input";
import {Controller, useForm} from "react-hook-form";
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {notify} from "helpers/global";
import OtpTimer from "otp-timer";
import {resendOtp} from "../../redux/Service/authService";

function OtpFormComponent({otpFormSubmit, loading, emailValue, sessionToken}) {
  const dispatch = useDispatch();
  const [loadingOtp, setLoadingOtp] = useState(false);

  const {control, handleSubmit} = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const resendOtpFn = async () => {
    setLoadingOtp(true);
    try {
      const response = await dispatch(
        resendOtp({
          email: emailValue,
          token: sessionToken,
        })
      ).unwrap();
      setLoadingOtp(false);
      notify(response);
    } catch (error) {
      setLoadingOtp(false);
      notify(error);
    }
  };

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
        <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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

          <div className="letter-space-3 dark-blue fw-16 mt-4 text-end fw-500 otpCtr">
            {loadingOtp ? (
              <div
                className="letter-space-1 dark-blue fw-16 mt-4 text-end fw-500 text-decoration-underline cursor"
                onClick={() => resendOtpFn()}
              >
                Resend OTP
              </div>
            ) : (
              <OtpTimer
                seconds={59}
                minutes={0}
                text={" "}
                ButtonText="Resend OTP"
                resend={() => resendOtpFn()}
              />
            )}
          </div>
          <div className="mt-4">
            <Button type="submit" className="primary-button" disabled={loading}>
              {loading ? "Loading..." : "Verify"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default OtpFormComponent;
