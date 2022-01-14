
import React, { useContext, useEffect, useState } from 'react';
import { View, Image, StyleSheet , TouchableOpacity, I18nManager } from "react-native";
import { ContainerView, DefaultText } from '../../common';
import { Dimensions, Fonts, Colors } from '../../theme';
import { DefaultHeader } from '../../common';
import {useTranslation} from 'react-i18next';
import { Formik } from 'formik';
import RenderForm from './RenderForm';
import { addPlaceValidationSchema } from './validationAddPlace';
import firestore from '@react-native-firebase/firestore';
import { showSuccess } from '../../common/LocalAlerts';
import UserContext from '../../hooks/UserContext';

 const AddPlace = ({navigation, route}) => {
  const helper = useContext(UserContext);
  const { Lat, Lon } = route.params;
  const {t} = useTranslation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
   }, []);


   const onSubmit = (values, action) => {
    console.log('values', JSON.stringify(values))
    setLoading(true)
    firestore()
    .collection(helper.auth)
    .add({
      type: values.type,
      name: values.name,
      phone: values.phone,
      latitude: Lat,
      longitude: Lon
    })
    .then(() => {
      console.log('Place added!');
      setLoading(false)
      showSuccess(t('app:place_added'))
      action.resetForm()
      navigation.push('Home')
    });
   };
    return (
     <ContainerView style={styles.container}>
        <DefaultHeader title={t('app:add_place')} 
        rightIcon={I18nManager.isRTL?'chevron-left':'chevron-right'}
        onRightPress={()=> navigation.goBack()}
        leftIcon={'menu'}
        onLeftPress={()=> navigation.openDrawer()}/>

       <View style={{}}>
        <Formik
				initialValues={{ type:'', name: '', phone: '', latitude: Lat , logitude: Lon }}
				onSubmit={(values, action) => {
          onSubmit(values, action)
        }}
        validationSchema={addPlaceValidationSchema}>
				{({handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, isValid, touched}) => (
			    <RenderForm
           handleChange={handleChange}
           handleBlur={handleBlur}
           handleSubmit={handleSubmit}
           values={values}
           errors={errors}
           isValid={isValid}
           touched={touched}
           loading={loading}
           setFieldValue={setFieldValue}
          />
				)}
			</Formik>
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
  });
  export default AddPlace