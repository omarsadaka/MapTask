import React,{useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Colors, Dimensions, Fonts} from '../../theme';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../hooks/UserContext';
const Item = ({
  name,
  country,
  latitude,
  longitude,
  isDestination
}) => {
  const navigation = useNavigation(); 
  const helper = useContext(UserContext);
  return (
    <TouchableOpacity style={styles.container}
    onPress={()=> {
        if(isDestination){
           helper.setDname(name+' '+country)
           helper.setDlat(latitude)
           helper.setDlon(longitude)
           navigation.navigate('Home')
        }else{
          helper.setName(name)
          helper.setLat(latitude)
          helper.setLon(longitude)
          navigation.navigate('Home')
        }
    }}>
       <Text style={styles.name}>{name} {country? country :null}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.DEVICE_WIDTH * 0.9,
    alignItems:'center',
    backgroundColor: Colors.grayLight,
    paddingVertical: Dimensions.DEVICE_HEIGHT*0.02,
    borderRadius: Dimensions.DEVICE_WIDTH*0.015,
    marginVertical: Dimensions.DEVICE_HEIGHT*0.01
  },
  name: {
    width: Dimensions.DEVICE_WIDTH*0.88,
    color: Colors.black,
    fontSize: Dimensions.DEVICE_HEIGHT * 0.018,
    paddingHorizontal: Dimensions.DEVICE_WIDTH * 0.02,
    fontFamily: Fonts.CairoBold,
    textAlign: 'left',
  },
 
});

export default Item;
