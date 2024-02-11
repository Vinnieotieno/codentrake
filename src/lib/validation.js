import * as Yup from 'yup'
export const contactUsSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  surname: Yup.string().required("Surname is required"),
  email: Yup.string().email("Invalid Email address").required("Email is required"),
  mobileNumber: Yup.string().required("Mobile number is required!").min(8, "Mobile number is too short").max(15, "Mobile number is too long"),
  message: Yup.string().required("This field is required"),
  capVal: Yup.string().required("This field is required"),
});