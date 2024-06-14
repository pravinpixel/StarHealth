import React, {useState, useRef, useEffect} from "react";
import {MuiOtpInput} from "mui-one-time-password-input";
import {Controller, useForm} from "react-hook-form";
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {notify} from "helpers/global";
import {resendOtp} from "../../redux/Service/authService";

function OtpFormComponent({otpFormSubmit, loading, emailValue, sessionToken}) {
  const dispatch = useDispatch();
  const otpLoader = useSelector((state) => state.auth.resendOtp.loading);

  const [loadingOtp, setLoadingOtp] = useState(false);
  const [time, setTime] = useState(60);
  const intervalRef = useRef(null);

  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const resendOtpFn = async () => {
    reset();
    setTime(60);
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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((prevSecondsRemaining) => {
        if (prevSecondsRemaining > 0) {
          return prevSecondsRemaining - 1;
        } else {
          setLoadingOtp(true);
          clearInterval(intervalRef.current);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [loadingOtp]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secondsLeft
      .toString()
      .padStart(2, "0")}`;
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
                <MuiOtpInput
                  {...field}
                  length={4}
                  TextFieldsProps={{
                    type: "number",
                    inputProps: {
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                    },
                  }}
                />
                {fieldState.invalid ? (
                  <Form.Text className="text-danger t-3">
                    Enter the OTP which is recieved in your Inbox
                  </Form.Text>
                ) : null}
              </div>
            )}
            name="otp"
          />

          <div>
            {loadingOtp ? (
              <div
                className="letter-space-1 dark-blue fw-16 mt-4 text-end fw-500 text-decoration-underline cursor"
                onClick={() => !otpLoader && resendOtpFn()}
              >
                {otpLoader ? "Loading..." : "Resend OTP"}
              </div>
            ) : (
              <div className="letter-space-1 dark-blue fw-16 mt-4 text-end fw-500 ">
                {formatTime(time)}
              </div>
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
