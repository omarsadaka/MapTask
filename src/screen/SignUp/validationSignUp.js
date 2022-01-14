import * as yup from 'yup';
import { I18nManager } from 'react-native';

  export const signUpValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required(I18nManager.isRTL?' البريد الإلكترونى مطلوب': 'Email is required')
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,I18nManager.isRTL?'البريد الإلكترونى غير صالح':'Invalid email' ),
    password: yup
      .string()
      .min(8, ({ min }) => I18nManager.isRTL?`كلمة المرور يجب ان تكون ${min} على الأقل`:`Password must be at least ${min} characters`)
      .required(I18nManager.isRTL?'كلمة المرور مطلوبة':'Password is required'),
  })


  // fullName: yup
  //   .string()
  //   .matches(/(\w.+\s).+/, 'Enter at least 2 names')
  //   .required('Full name is required'),
  // phoneNumber: yup
  //   .string()
  //   .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
  //   .required('Phone number is required'),
  // email: yup
  //   .string()
  //   .email("Please enter valid email")
  //   .required('Email is required'),
  // password: yup
  //   .string()
  //   .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
  //   .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
  //   .matches(/\d/, "Password must have a number")
  //   .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
  //   .min(8, ({ min }) => `Password must be at least ${min} characters`)
  //   .required('Password is required'),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref('password')], 'Passwords do not match')
  //   .required('Confirm password is required'),
