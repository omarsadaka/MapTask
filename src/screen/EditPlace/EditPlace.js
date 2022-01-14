
import React, { useContext, useEffect, useState } from 'react';
import { View, Image, StyleSheet , TouchableOpacity, I18nManager } from "react-native";
import { ContainerView, DefaultText } from '../../common';
import { Dimensions, Fonts, Colors } from '../../theme';
import { DefaultHeader } from '../../common';
import {useTranslation} from 'react-i18next';
import { Formik } from 'formik';
import RenderForm from './RenderForm';
import { editPlaceValidationSchema } from './validationEditPlace';
import firestore from '@react-native-firebase/firestore';
import { showSuccess, showError, showInfo } from '../../common/LocalAlerts';
import UserContext from '../../hooks/UserContext';

 const EditPlace = ({navigation, route}) => {
  const {Item } = route.params;
  const helper = useContext(UserContext);
  const {t} = useTranslation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
   }, []);
  
   const onSubmit = (values, action) => {
    console.log('values', JSON.stringify(values))
    setLoading(true)
    firestore()
    .collection(helper.auth)
    .doc(Item.id)
    .update({
      type: values.type,
      name: values.name,
      phone: values.phone,
      latitude: values.latitude,
      longitude: values.logitude
    })
    .then(() => {
      console.log('User updated!');
      setLoading(false)
      showSuccess(t('app:place_updated'))
      navigation.push('Home')
    });
   };

    return (
     <ContainerView style={styles.container}>
       <DefaultHeader title={t('app:edit_place')} 
        rightIcon={I18nManager.isRTL?'chevron-left':'chevron-right'}
        onRightPress={()=> navigation.goBack()}
        leftIcon={'menu'}
        onLeftPress={()=> navigation.openDrawer()}/>
       <View style={{}}>
        <Formik
				initialValues={{ type: Item.type, name: Item.name, phone: Item.phone, latitude: Item.coordinates.latitude, logitude: Item.coordinates.longitude }}
				onSubmit={(values, action) => {
          onSubmit(values, action)
        }}
        validationSchema={editPlaceValidationSchema}>
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
  export default EditPlace