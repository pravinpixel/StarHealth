import * as yup from "yup";

export const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z^\s]{2,})+$/;
const phoneRegExp = /^[0-9]{10}$/;

const LoginSchema = yup.object().shape({
  email: yup.string().max(255).required("Email is required").matches(emailRegExp, "Please enter valid email"),
});

const PersonalInformationSchema = yup.object().shape({
  employee_name: yup.string().max(255).required("Required"),
  mobile_number: yup.string().required("Required").matches(phoneRegExp, 'Phone number is not valid'),
  dob: yup.string().max(255).required("Required"),
  employee_code: yup.string().max(255).required("Required"),
  designation: yup.array().required("Required").typeError().test("validate", "Required", (value) => {
    if (value?.length !== 0) {
      return true
    }
  }),
  department: yup.array().required("Required").typeError().test("validate", "Required", (value) => {
    if (value?.length !== 0) {
      return true
    }
  }),
  state: yup.array().required("Required").typeError().test("validate", "Required", (value) => {
    if (value?.length !== 0) {
      return true
    }
  }),
  city: yup.array().required("Required").typeError().test("validate", "Required", (value) => {
    if (value?.length !== 0) {
      return true
    }
  }),
});

const UploadImagesSchema = yup.object().shape({
  passport_photo: yup.mixed().required("Required"),
  profile_photo: yup.mixed().required("Required"),
})

export {
  LoginSchema,
  PersonalInformationSchema,
  UploadImagesSchema
};