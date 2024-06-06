import React, {useState, useEffect} from "react";
import {MuiOtpInput} from "mui-one-time-password-input";
import {Controller, useForm} from "react-hook-form";
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {resendOtp} from "../../redux/Service/authService";
import {notify} from "helpers/global";

function OtpFormComponent({otpFormSubmit, loading, emailValue}) {
  const dispatch = useDispatch();
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
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
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

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
          {minutes === 0 && seconds === 0 ? (
            <div
              className="letter-space-1 dark-blue fw-16 mt-4 text-end fw-500 text-decoration-underline cursor"
              onClick={() => resendOtpFn()}
            >
              Resend OTP
            </div>
          ) : (
            <div className="letter-space-3 dark-blue fw-16 mt-4 text-end fw-500">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
          )}
          <div className="mt-4">
            <Button type="submit" className="primary-button" disabled={loading}>
              {loading ? "Loading..." : "Verify"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtpFormComponent;
