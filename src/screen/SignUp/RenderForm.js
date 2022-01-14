import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, StyleSheet , TouchableOpacity } from "react-native";
import { ContainerView, DefaultText } from '../../common';
import { Dimensions, Fonts, Colors } from '../../theme';
import { DefaultInput, DefaultButton} from '../../common';
import {useTranslation} from 'react-i18next';

const RenderForm=({
  handleChange,
  handleBlur,
  handleSubmit,
  values, errors,
  isValid,
  touched,loading
})=>{
    const {t} = useTranslation();
    const [secure, setSecure] = useState(true);

    return(
      <View style={{marginTop: Dimensions.DEVICE_HEIGHT*0.1}}>
        <DefaultInput
        hint={t('app:email')}
        value={values.email}
        isLeftIcon={false}
        isRightIcon={false}
        secure={false}
        editable={true}
        onChange={handleChange('email')}
       />
       {(errors.email && touched.email) &&
       <DefaultText title={errors.email} style={styles.errorText}/>
       }
       <DefaultInput
       hint={t('app:password')}
       value={values.password}
       rightIconName={secure?'eye-off-outline':'eye-outline'}
       isLeftIcon={false}
       isRightIcon={true}
       secure={secure}
       editable={true}
       onChange={handleChange('password')}
       onSecure={()=> setSecure(!secure)}
      />
      {(errors.password && touched.password) &&
      <DefaultText title={errors.password} style={styles.errorText}/>
      }
     <DefaultButton title={t('app:register')} onClick={handleSubmit} loading={loading}/>
     </View>
    )
}
const styles = StyleSheet.create({
    errorText:{
        fontSize: Dimensions.DEVICE_WIDTH*0.026,
        fontFamily: Fonts.font_LI,
        textAlign:'left',
        color: Colors.red
      }
  });
export default RenderForm;