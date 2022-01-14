
import React, { useContext, useEffect, useState } from 'react';
import { View, Image, StyleSheet , TouchableOpacity } from "react-native";
import { ContainerView, DefaultText } from '../../common';
import { Dimensions, Fonts, Colors } from '../../theme';
import { DefaultHeader} from '../../common';
import {useTranslation} from 'react-i18next';
import  {loginValidationSchema} from './validationLogin';
import RenderForm from './RenderForm';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { showSuccess, showError, showInfo } from '../../common/LocalAlerts';
import  AsyncStorage from '@react-native-community/async-storage';
import UserContext from '../../hooks/UserContext';

 const Login = ({navigation}) => {
  const {t} = useTranslation();
  const helper = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   }, []);

   const onSubmit = (values, action) => {
    console.log('values', JSON.stringify(values))
    setLoading(true)
    auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then((user) => {
      setLoading(false)
      console.log('signed in!',user);
      action.resetForm()
      showSuccess(t('app:login_success'))
      AsyncStorage.setItem('@auth',user.user.uid)
      helper.setAuth(user.user.uid)
    })
    .catch(error => {
      setLoading(false)
      if (error.code === 'auth/user-not-found') {
        showError(t('app:user_not_found'))
      }
      if (error.code === 'auth/wrong-password') {
        showError(t('app:wrong_password'))
      }
      console.error(error);
  });
  };
    return (
     <ContainerView style={styles.container}>
       <DefaultHeader title={t('app:login')}/>
       <Image source={require('../../assets/images/place.png')} style={styles.logo}/>
       <View style={{}}>
        <Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values, action) => {
          onSubmit(values, action)
        }}
        validationSchema={loginValidationSchema}>
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
         <DefaultText title={t('app:no_account')} style={[styles.text,{color:Colors.grayColorText}]}/>
         <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
           <DefaultText title={t('app:create_account')} style={[styles.text,{color:Colors.red}]}/>
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
  export default Login