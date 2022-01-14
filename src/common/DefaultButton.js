import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { Colors, Fonts, Dimensions } from "../theme";
import {Icon, Button } from 'react-native-elements';

const DefaultButton = ({style,title,loading,onClick}) => {
  return  <Button
    buttonStyle={{height: Dimensions.DEVICE_HEIGHT*0.07,backgroundColor: Colors.red  }}
    style={style}
    containerStyle={[styles.btn_style,style]}
    title={title}
    titleStyle={styles.btn}
    loading={loading}
    onPress={()=> onClick()}
   />
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
  btn_style:{
    width:Dimensions.DEVICE_WIDTH*0.9,
    marginTop:Dimensions.DEVICE_HEIGHT*0.05,
    borderRadius: Dimensions.DEVICE_HEIGHT*0.015,
  },
  btn:{
    color: Colors.white,
    fontSize: Dimensions.DEVICE_HEIGHT * 0.022,
    fontFamily: Fonts.font_B,
    fontWeight: 'bold',
  },
});

export default DefaultButton;
