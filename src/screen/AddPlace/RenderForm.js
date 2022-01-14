import React from 'react';
import { View, StyleSheet } from "react-native";
import { DefaultText, ModalPicker} from '../../common';
import { Dimensions, Fonts, Colors } from '../../theme';
import { DefaultInput, DefaultButton} from '../../common';
import {useTranslation} from 'react-i18next';

const RenderForm=({
  handleChange,
  handleBlur,
  handleSubmit,
  values, errors,
  isValid, touched,
  loading,
  setFieldValue
  })=>{
    const {t} = useTranslation();
    const data=[
      {name: t('app:house'), value:'home', logo: require('../../assets/images/house.png')},
      {name: t('app:rerstaurant'), value:'restaurant', logo: require('../../assets/images/restaurant.png')},
      {name: t('app:park'), value:'park', logo: require('../../assets/images/park.png')}
      ]

    return(
      <View style={{marginTop: Dimensions.DEVICE_HEIGHT*0.1}}>
         <View style={styles.spinner}>
            <ModalPicker 
              data={data} 
              hint={t('app:type')}
              defaultColor={Colors.grayColorText} 
              onSelect={(value)=> {
                console.log(value)
                setFieldValue('type', value.value)
                }}/>
        </View>
        {(errors.type && touched.type) &&
        <DefaultText title={errors.type} style={styles.errorText}/>
        }
        <DefaultInput
        hint={t('app:name')}
        value={values.name}
        isLeftIcon={false}
        isRightIcon={false}
        secure={false}
        editable={true}
        onChange={handleChange('name')}
       />
       {(errors.name && touched.name) &&
       <DefaultText title={errors.name} style={styles.errorText}/>
       }
       <DefaultInput
       hint={t('app:phone')}
       value={values.phone}
       keyboardType={'phone-pad'}
       isLeftIcon={false}
       isRightIcon={true}
       editable={true}
       onChange={handleChange('phone')}
       onSecure={()=> setSecure(!secure)}
      />
      {(errors.phone && touched.phone) &&
      <DefaultText title={errors.phone} style={styles.errorText}/>
      }
     <DefaultButton title={t('app:add')} onClick={handleSubmit} loading={loading}/>
     </View>
    )
}
const styles = StyleSheet.create({
    errorText:{
        fontSize: Dimensions.DEVICE_WIDTH*0.026,
        fontFamily: Fonts.font_LI,
        textAlign:'left',
        color: Colors.red
      },
      spinner:{
        width: Dimensions.DEVICE_WIDTH*0.9,
        height: Dimensions.DEVICE_HEIGHT*0.07,
        marginTop: Dimensions.DEVICE_HEIGHT*0.015
      },
  });
export default RenderForm;