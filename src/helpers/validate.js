import * as yup from "yup";

export const emailRegExp1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z^\s]{2,})+$/;
export const emailRegExp = (/([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(starhealth|starinsurance)([\.])in|(pixel-studios)([\.])com/g);
export const phoneRegExp = /^[0-9]{10}$/;
export const nameRegExp = /^[ A-Za-z_@./#&+-]*$/

export const FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg'];

const LoginSchema = yup.object().shape({
  email: yup.string().max(255).required("Enter Your Email Id").matches(emailRegExp1, "Enter Valid Email Id").matches(emailRegExp, "Enter Your official Mail Id"),
});

const PersonalInformationSchema = yup.object().shape({
  employee_name: yup.string().max(255).required("Enter Your Name").matches(nameRegExp, 'Enter Alpha and special characters'),
  mobile_number: yup.string().required("Enter your Mobile Number").matches(phoneRegExp, 'Enter 10 Digit Mobile Number'),
  dob: yup.string().max(255).required("Select Your DOB"),
  employee_code: yup.string().max(255).required("Enter Employee code").matches(/^[a-zA-Z0-9]+$/, "Enter only alpha characters"),
  designation: yup.string(255).required("Enter your Designation").matches(/^[aA-zZ\s]+$/, "Enter only alpha characters"),
  department: yup.string(255).required("Enter your Department").matches(/^[aA-zZ\s]+$/, "Enter only alpha characters"),
  state: yup.array().required("Enter your state").typeError().test("validate", "Enter your state", (value) => {
    if (value?.length !== 0) {
      return true
    }
  }),
  city: yup.string(255).required("Enter your city").matches(/^[aA-zZ\s]+$/, "Enter only alpha characters"),
  // city: yup.array().required("Enter Your city").typeError().test("validate", "Enter Your city", (value) => {
  //   if (value?.length !== 0) {
  //     return true
  //   }
  // }),
});

const UploadImagesSchema = yup.object().shape({
  passport_photo: yup.mixed().required("Upload Headshot image").test('fileSize',
    'File too large, it should be less than 5MB',
    (value) => {
      if (typeof value === "string") {
        return true
      }
      if (typeof value === "object" && value && value.size <= FILE_SIZE) {
        return true
      }
    }).test(
      'fileFormat',
      'Unsupported Format. Only PNG, JPEG, and JPG are allowed.',
      (value) => {
        if (typeof value === "string") {
          return true
        }
        if (typeof value === "object" && value && SUPPORTED_FORMATS.includes(value.type)) {
          return true
        }
      }
    ),
  profile_photo: yup.mixed().required("Upload Full sized photo").test('fileSize',
    'File too large, it should be less than 5MB',
    (value) => {
      if (typeof value === "string") {
        return true
      }
      if (typeof value === "object" && value && value.size <= FILE_SIZE) {
        return true
      }
    }).test(
      'fileFormat',
      'Unsupported Format. Only PNG, JPEG, and JPG are allowed.',
      (value) => {
        if (typeof value === "string") {
          return true
        }
        if (typeof value === "object" && value && SUPPORTED_FORMATS.includes(value.type)) {
          return true
        }
      }
    ),
  family_photo: yup.mixed().nullable(true).test('fileSize',
    'File too large, it should be less than 5MB',
    (value) => {
      if (value === null) {
        return true
      }
      if (typeof value === "string") {
        return true
      }
      if (typeof value === "object" && value && value.size <= FILE_SIZE) {
        return true
      }
    }).test(
      'fileFormat',
      'Unsupported Format. Only PNG, JPEG, and JPG are allowed.',
      (value) => {
        if (value === null) {
          return true
        }
        if (typeof value === "string") {
          return true
        }
        if (typeof value === "object" && value && SUPPORTED_FORMATS.includes(value.type)) {
          return true
        }
      }
    ),
})

export {
  LoginSchema,
  PersonalInformationSchema,
  UploadImagesSchema
};