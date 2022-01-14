import * as yup from 'yup';
import { I18nManager } from 'react-native';

  export const editPlaceValidationSchema = yup.object().shape({
    type: yup
      .string()
      .required(I18nManager.isRTL?'  النوع مطلوب': 'Type is required'),
    name: yup
      .string()
      .min(4, ({ min }) => I18nManager.isRTL?` الإسم يجب ان تكون ${min} على الأقل`:`Name must be at least ${min} characters`)
      .required(I18nManager.isRTL?'  الإسم مطلوب':'Name is required'),
    phone: yup
      .string()
      .matches(/(\d)\b/, I18nManager.isRTL?'أدخل رقم هاتف صحيح':'Enter valid phone number')
      .min(8, ({ min }) => I18nManager.isRTL?` رقم الهاتف يجب ان يكون ${min} على الأقل`:`Phone number must be at least ${min} numbers`)
      .required(I18nManager.isRTL?' رقم الهاتف مطلوب':'Phone number is required'),
    latitude: yup
      .string()
      .matches(/^-?\d*(\.\d+)?$/, I18nManager.isRTL?'أدخل رقم صحيح':'Enter valid number')
      .required(I18nManager.isRTL?'  هذا الحقل مطلوب':'Latitude is required'),
    logitude: yup
      .string()
      .matches(/^-?\d*(\.\d+)?$/, I18nManager.isRTL?'أدخل رقم صحيح':'Enter valid number')
      .required(I18nManager.isRTL?' هذا الحقل مطلوب':'Longitude is required'),
  })

