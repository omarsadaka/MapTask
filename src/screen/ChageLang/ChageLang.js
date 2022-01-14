
import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, I18nManager, ScrollView } from "react-native";
import {useTranslation} from 'react-i18next';
import { Dimensions, Fonts, Colors } from "../../theme";
import { DefaultHeader, DefaultText, DefaultButton } from '../../common';
import i18n from 'i18next';
import RNRestart from 'react-native-restart';


const ChangeLang = ({navigation}) => {
  const {t} = useTranslation();
  const [clicked, setClicked] = useState(I18nManager.isRTL?2:1);

  const ChangeLanguge = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
      I18nManager.allowRTL(i18n.language === 'ar');
      RNRestart.Restart();
    });
  };

  const onClick=(index)=>{
        if(index==1){
            I18nManager.isRTL ? ChangeLanguge() : null
        }else{
            I18nManager.isRTL ? null : ChangeLanguge()
        }
  }

   const custumRadioButton=(index)=>{
       return(
           <TouchableOpacity style={styles.radio} disabled={true}>
             {
                 clicked==index?
                   <View style={styles.checked}>
                   </View>
                 :null
             }
          </TouchableOpacity>
       )
   }
    return (
     <View style={styles.container}>
       <DefaultHeader title={t('app:change_lang')} 
        rightIcon={I18nManager.isRTL?'chevron-left':'chevron-right'}
        onRightPress={()=> navigation.goBack()}
        leftIcon={'menu'}
        onLeftPress={()=> navigation.openDrawer()}/>
       <View style={styles.view}>
        <DefaultText title={t('app:language')} style={[styles.text,{width: Dimensions.DEVICE_WIDTH*0.93}]}/>
        
         <TouchableOpacity style={styles.row}
          onPress={()=> setClicked(2)}>
           <Image source={require('../../assets/images/ar.png')} style={styles.image}/>   
           <DefaultText title={'العربية'} style={[styles.text,{flex:1}]}/>
           {custumRadioButton(2)}
         </TouchableOpacity>

         <TouchableOpacity style={styles.row}
          onPress={()=> setClicked(1)}>
              <Image source={require('../../assets/images/en.png')} style={styles.image}/> 
           <DefaultText title={'English'} style={[styles.text,{flex:1}]}/>
           {custumRadioButton(1)}
         </TouchableOpacity>
       </View>
       <DefaultButton title={t('app:done')} onClick={()=> onClick(clicked)}/>
        <View style={{height:7}}/>
     </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      flexDirection:'column',
    },
    view: {
        flex: 1,
        alignItems: "center",
        paddingTop: Dimensions.DEVICE_HEIGHT*0.05,
      },
    text:{
        color: Colors.black,
        fontFamily: Fonts.Ubuntu_B,
        fontWeight:'bold',
        fontSize: Dimensions.DEVICE_WIDTH*0.035,
        marginHorizontal: Dimensions.DEVICE_WIDTH*0.02,
        textAlign:'left'
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        width: Dimensions.DEVICE_WIDTH*0.93,
        marginTop: Dimensions.DEVICE_HEIGHT*0.03,
        backgroundColor: Colors.grayLight,
        padding: Dimensions.DEVICE_HEIGHT*0.02,
        borderRadius: Dimensions.DEVICE_HEIGHT*0.02,
        elevation:1, shadowOpacity:0.2
    },
    radio:{
        width:20,
        height:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor: Colors.white,
        borderColor: Colors.green,
        borderWidth:1
    },
    checked:{
        width:15,
        height:15,
        alignItems:'center',
        borderRadius:15/2,
        backgroundColor: Colors.green,
    },
    image:{
        width: Dimensions.DEVICE_WIDTH*0.08,
        height: Dimensions.DEVICE_WIDTH*0.08
    }
  });
  
  export default ChangeLang;