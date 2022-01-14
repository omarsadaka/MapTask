import React from 'react';
import {View,Text, StyleSheet,I18nManager} from 'react-native';
import { Colors, Fonts, Dimensions } from "../theme";
import {Icon} from 'react-native-elements';

const DefaultHeader = ({onRightPress, onLeftPress,title,leftIcon, rightIcon}) => {
  return (
    <View style={styles.view}>
     <Icon
     name={leftIcon}
     type="feather"
     size={Dimensions.DEVICE_HEIGHT*0.04}
     color={Colors.white}
     onPress={()=> onLeftPress()}/>
     <Text style={styles.title}>{title}</Text>
    <Icon
    name={rightIcon}
    type="feather"
    size={Dimensions.DEVICE_HEIGHT*0.04}
    color={Colors.white}
    onPress={()=> onRightPress()}/>
 </View>
  )
        
};

const styles = StyleSheet.create({
  view:{
      height: Dimensions.DEVICE_HEIGHT*0.11,
      width: Dimensions.DEVICE_WIDTH,
      backgroundColor: Colors.secondary,
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:Dimensions.DEVICE_WIDTH*0.035,
      paddingTop: Dimensions.DEVICE_HEIGHT*0.02,
  },
  title:{
      flex:1,
      color: Colors.white,
      fontFamily:Fonts.font_B,
      fontWeight:'bold',
      fontSize: Dimensions.DEVICE_HEIGHT*0.03,
      textAlign:'center',
  }
});

export default DefaultHeader;
