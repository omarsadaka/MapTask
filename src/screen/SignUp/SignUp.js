
import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, StyleSheet , TouchableOpacity } from "react-native";
import { ContainerView, DefaultText } from '../../common';
import { Dimensions, Fonts, Colors } from '../../theme';
import { DefaultHeader , DefaultInput, DefaultButton} from '../../common';
import {useTranslation} from 'react-i18next';
import  {signUpValidationSchema} from './validationSignUp';
import RenderForm from './RenderForm';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { showSuccess, showError, showInfo } from '../../common/LocalAlerts';
 const SignUp = ({navigation}) => {
  const {t} = useTranslation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
   }, []);

   const onSubmit = (values,action) => {
    console.log('values', JSON.stringify(values))
    setLoading(true)
    auth()
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(() => {
      setLoading(false)
      console.log('User account created');
      action.resetForm()
      showSuccess(t('app:account_created'))
    })
    .catch(error => {
      setLoading(false)
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        showError(t('app:already_in_use'))
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        showError(t('app:email_invalid'))
      }
      console.error(error);
  });
  };
    return (
     <ContainerView style={styles.container}>
       <DefaultHeader title={t('app:signUp')} />
       <Image source={require('../../assets/images/place.png')} style={styles.logo}/>
       <View style={{}}>
        <Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values, action) => {
          onSubmit(values,action)
        }}
        validationSchema={signUpValidationSchema}>
				{({handleChange, handleBlur, handleSubmit, values, errors, isValid, touched}) => (
			    <RenderForm
           handleChange={handleChange}
           handleBlur={handleBlur}
           handleSubmit={handleSubmit}
           values={values}
           errors={errors}
           isValid={isValid}
           touched={touched}
           loading={loading}
          />
				)}
			</Formik>
       </View>
       <View style={[styles.row_contaier,{marginTop: Dimensions.DEVICE_HEIGHT*0.05,}]}>
         <DefaultText title={t('app:have_account')} style={[styles.text,{color:Colors.grayColorText}]}/>
         <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
           <DefaultText title={t('app:login')} style={[styles.text,{color:Colors.red}]}/>
         </TouchableOpacity>
       </View>
     </ContainerView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: Dimensions.DEVICE_WIDTH*0.03
    },
    row_contaier:{
      alignItems:'center',
      flexDirection:'row',
      paddingHorizontal: Dimensions.DEVICE_WIDTH*0.02
    },
    text:{
      fontSize: Dimensions.DEVICE_WIDTH*0.033,
      fontFamily: Fonts.font_LI,
      textAlign:'center',marginHorizontal:1
    },
    logo:{
      width: Dimensions.DEVICE_WIDTH*0.2,
      height: Dimensions.DEVICE_WIDTH*0.2,
      marginTop: Dimensions.DEVICE_HEIGHT*0.05
    }
  });
  export default SignUp