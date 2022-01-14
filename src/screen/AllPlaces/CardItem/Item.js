import React, { useState , useContext } from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
import {StyleSheet,TouchableOpacity, Image, View} from 'react-native';
import { Colors, Dimensions, Fonts } from '../../../theme';
import { DefaultText } from '../../../common';
import { useNavigation } from '@react-navigation/native';

const Item = ({
    id,
    icon,
    name,
    type,
    phone,
    coordinates
}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container}
    onPress={()=> navigation.navigate('EditPlace',{Item: {
    id,
    icon,
    name,
    type,
    phone,
    coordinates
    }})}>
     <Image source={icon} style={styles.image}/>
     <View style={{alignContent:'center',marginHorizontal: Dimensions.DEVICE_WIDTH*0.02,flex:1}}>
       <DefaultText title={name} style={styles.title}/>
     </View>
     <Icon
        name={'edit'}
        type={'feather'}
        size={Dimensions.DEVICE_WIDTH * 0.05}
        color={Colors.darkOrage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.DEVICE_WIDTH*0.9,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor: Colors.white,
    elevation:1, shadowOpacity: 0.2,
    paddingVertical: Dimensions.DEVICE_HEIGHT*0.015,
    paddingHorizontal: Dimensions.DEVICE_WIDTH*0.03,
    marginVertical: Dimensions.DEVICE_HEIGHT*0.01,
    borderRadius: Dimensions.DEVICE_WIDTH*0.02
  },
  title:{
    fontFamily: Fonts.CairoBold,
    fontSize: Dimensions.DEVICE_HEIGHT*0.025,
    color: Colors.black,
    textAlign:'left',
  },
  image:{
    width: Dimensions.DEVICE_WIDTH*0.13,
    height: Dimensions.DEVICE_WIDTH*0.13,
  },

});

export default Item;
