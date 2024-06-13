import * as yup from "yup";

export const emailRegExp1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z^\s]{2,})+$/;
export const emailRegExp = (/([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(starhealth|starinsurance)([\.])in|(pixel-studios)([\.])com/g);
export const phoneRegExp = /^[0-9]{10}$/;
export const nameRegExp = /^[ A-Za-z0-9_@./#&+-]*$/

export const FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg'];

const LoginSchema = yup.object().shape({
  email: yup.string().max(255).required("Enter Your Email Id").matches(emailRegExp1, "Enter Valid Email Id").matches(emailRegExp, "Enter Your official Mail Id"),
});

const PersonalInformationSchema = yup.object().shape({
  employee_name: yup.string().max(255).required("Enter Your Name").matches(nameRegExp, 'Allow Alpha & Special character only'),
  mobile_number: yup.string().required("Enter your Mobile Number").matches(phoneRegExp, 'Enter 10 Digit Mobile Number'),
  dob: yup.string().max(255).required("Select Your DOB"),
  employee_code: yup.string().max(255).required("Enter Employee code"),
  designation: yup.string(255).required("Enter your Designation").matches(nameRegExp, 'Allow Alpha & Special character only'),
  department: yup.string(255).required("Enter your Department").matches(nameRegExp, 'Allow Alpha & Special character only'),
  state: yup.array().required("Enter your state").typeError().test("validate", "Enter your state", (value) => {
    if (value?.length !== 0) {
      return true
    }
  }),
  city: yup.string(255).required("Enter your city"),
  // city: yup.array().required("Enter Your city").typeError().test("validate", "Enter Your city", (value) => {
  //   if (value?.length !== 0) {
  //     return true
  //   }
  // }),
});

const UploadImagesSchema = yup.object().shape({
  passport_photo: yup.mixed().required("Upload Headshot image").test(
    'fileSize',
    'File size is too large. Maximum size is 5MB.',
    value => value && value.size <= FILE_SIZE
  )
    .test(
      'fileFormat',
      'Unsupported Format. Only PNG, JPEG, and JPG are allowed.',
      value => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  profile_photo: yup.mixed().required("upload Full sized photo").test(
    'fileSize-1',
    'File size is too large. Maximum size is 5MB.',
    value => value && value.size <= FILE_SIZE
  )
    .test(
      'fileFormat',
      'Unsupported Format. Only PNG, JPEG, and JPG are allowed.',
      value => value && SUPPORTED_FORMATS.includes(value.type)
    ),
})

export {
  LoginSchema,
  PersonalInformationSchema,
  UploadImagesSchema
};