

import React from 'react';
import {View, StyleSheet,I18nManager, Text} from 'react-native';
import { Colors, Fonts, Dimensions } from "../theme";
import {Icon , Input} from 'react-native-elements';

const DefaultInput = ({
    value, secure, onChange, onSecure,
    hint, iconName, editable,isRightIcon,
    style, isLeftIcon,rightIconName,keyboardType,
}) => {
  return <View style={[styles.input,style]}>
  <Input
    placeholder={hint}
    underlineColorAndroid="transparent"
    inputContainerStyle={{borderBottomWidth:0}}
    containerStyle={{height:Dimensions.DEVICE_HEIGHT*0.07}}
    defaultValue={value}
    secureTextEntry={secure}
    keyboardType={keyboardType}
    editable={editable}
    style={[styles.label_style,{ color: editable?Colors.black:Colors.grayColorText}]}
    leftIcon={
      isLeftIcon?
      <Icon
      name={iconName}
      type="feather"
      size={Dimensions.DEVICE_HEIGHT*0.025}
      color={Colors.black}/>
      :null
   }
   rightIcon={ 
    isRightIcon?
    <Icon
     name={rightIconName}
     type="ionicon"
     size={Dimensions.DEVICE_HEIGHT*0.03}
     color={Colors.black}
     onPress={()=> onSecure()}/>
      :
     null
  }
   onChangeText={onChange}/>
 </View>
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
  input:{
    width:Dimensions.DEVICE_WIDTH*0.9,
    height:Dimensions.DEVICE_HEIGHT*0.07,
    backgroundColor:Colors.white,
    borderRadius:Dimensions.DEVICE_HEIGHT*0.015,
    borderColor:Colors.grayLight,borderWidth:1,
    alignItems:'center',
    marginTop: Dimensions.DEVICE_HEIGHT*0.01,
    elevation:1,
    shadowOpacity:0.2
  },
  label_style:{
    fontSize: Dimensions.DEVICE_HEIGHT * 0.02,
    fontFamily: Fonts.font_LI,
    height: Dimensions.DEVICE_HEIGHT*0.07,
    textAlign: I18nManager.isRTL?'right':'left',
  },
  code:{
    fontSize: Dimensions.DEVICE_HEIGHT * 0.02,
    fontFamily: Fonts.font_B,
    fontWeight:'bold',
    color: Colors.grayColorText,
    textAlign: 'center',textAlignVertical:'center'
  },
  spacer:{
    height: Dimensions.DEVICE_HEIGHT*0.04,
    backgroundColor: Colors.grayColorText,
    width:1,
    marginHorizontal: Dimensions.DEVICE_WIDTH*0.02
  }
});

export default DefaultInput;

