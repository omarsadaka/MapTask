import React, { useState } from 'react';
import {View,Text,StyleSheet,I18nManager, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors , Dimensions, Fonts} from '../theme';
import ModalDropdown from 'react-native-modal-dropdown';

const ModalPicker = ({data, hint, defaultColor, onSelect, height}) => {
    const [color, setColor] = useState(defaultColor);
  return(
    <View style={styles.spinner}>
    <ModalDropdown
     options={data}
     style={{flex:1,marginHorizontal: Dimensions.DEVICE_WIDTH*0.02}}
     textStyle={[styles.spiner_text,{color: color}]}
     defaultValue={hint}
     dropdownStyle={styles.dropdown_style}
     dropdownTextStyle={styles.label_style}
     dropdownTextHighlightStyle={styles.label_style}
     adjustFrame={()=>{return {width: '100%', position:'absolute', bottom: 0,height: height}}}
     renderRow={(option,index, isSelected)=>{
        return (<View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',backgroundColor:Platform.OS=='android'?Colors.white: null}}>
          {option.logo ? <Image source={option.logo} style={styles.img} resizeMode='contain' />:null}
          <Text style={styles.spiner_label}>{option.name}</Text>
          {isSelected ? <Icon style={{margin: 12}} name="check" size={24} color="#49A0E3" />: null}
        </View>
      )
     }}
     renderButtonText={(rowData) => rowData.name}// ba3d ma t5tar
     onSelect={(index,value) => {
      onSelect(value)
      setColor(Colors.black)
    }}
   /> 
    <Icon
     name="chevron-down"
     type='feather'
     size={Dimensions.DEVICE_WIDTH*0.04}
     color={Colors.black}/>
   </View>
  )
}

const styles = StyleSheet.create({
    label_style:{
      fontSize: Dimensions.DEVICE_HEIGHT * 0.02,
      fontFamily: Fonts.font_B,
      fontWeight: '200',
      height: Dimensions.DEVICE_HEIGHT*0.07,
      textAlign: I18nManager.isRTL?'right':'left',
    },
    spiner_text:{
      fontSize: Dimensions.DEVICE_HEIGHT * 0.02,
      fontFamily: Fonts.CairoBold,
      fontWeight: '200',
      textAlign: I18nManager.isRTL?'left':'right',
    },
    spinner:{
      alignItems:'center',
      width:'100%',
      flexDirection:'row',
      height:'100%',
      borderRadius: Dimensions.DEVICE_HEIGHT*0.01,
      paddingHorizontal: Dimensions.DEVICE_HEIGHT*0.012,
      backgroundColor:  Colors.white,
      elevation:1, shadowOpacity: 0.2,
      borderColor: Colors.grayLight,
      borderWidth:1
    },
    dropdown_style:{
      borderTopLeftRadius:Dimensions.DEVICE_WIDTH*0.08,
      borderTopRightRadius:Dimensions.DEVICE_WIDTH*0.08,
      backgroundColor:Colors.white,
      borderTopColor: Colors.grayColorText,
      borderStartColor: Colors.grayColorText,
      borderEndColor: Colors.grayColorText,
      borderWidth:2,
      elevation:5, 
      shadowOpacity:0.3,
      shadowColor: Colors.black,
      overflow: 'hidden',
      paddingVertical:Dimensions.DEVICE_HEIGHT*0.02
    },
    spiner_label:{
      flex:1,
      fontSize: 16, fontFamily: Fonts.Ubuntu_B,
      marginVertical: Dimensions.DEVICE_HEIGHT*0.015,
      marginHorizontal: Dimensions.DEVICE_HEIGHT*0.02,
      textAlign:'left',
    },
    img:{
      width: Dimensions.DEVICE_WIDTH*0.07,
      height: Dimensions.DEVICE_WIDTH*0.07,
      marginHorizontal: Dimensions.DEVICE_HEIGHT*0.02, 
    }
      
  });
  export default ModalPicker;
