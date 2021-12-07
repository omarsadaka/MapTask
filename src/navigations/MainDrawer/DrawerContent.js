import React, { useEffect  } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import DrawerItem from './DrawerItem';
import {Avatar} from 'react-native-elements';
import {Colors, Dimensions, Fonts} from '../../theme';

const DrawerContent = (props) => {
  useEffect(() => {
   
  }, []);

 
  return (
    <View {...props} style={{flex: 1}}>
      <View style={styles.header}>
      <Avatar
        containerStyle={styles.avatarContainer}
        avatarStyle={styles.avatar}
        source={require('../../assets/images/user.png')}
      />
      <Text style={styles.username}>{'Omar Sadaka'}</Text>
      </View>
      <DrawerItem
        labal={'Account'}
        iconName="person-outline"
        iconType="matrial"
        onPress={()=>{}}/>
         
      <DrawerItem
        labal={'Setting'}
        iconName="setting"
        iconType="ant-design"
        onPress={()=>{}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  header:{
    height: Dimensions.DEVICE_HEIGHT*0.2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: Colors.green,
    marginBottom: Dimensions.DEVICE_HEIGHT*0.02
  },
  avatarContainer: {
    height: Dimensions.DEVICE_WIDTH * 0.2,
    width: Dimensions.DEVICE_WIDTH * 0.2,
    padding: 3,
    borderWidth: 0.5,
    borderColor: Colors.lightOrage,
    borderRadius: Dimensions.DEVICE_WIDTH * 0.06,
  },
  avatar: {
    borderRadius: Dimensions.DEVICE_WIDTH * 0.06,
    borderWidth: 1,
    borderColor: Colors.darkOrage,
  },
  username: {
    color: Colors.black,
    fontSize: Dimensions.DEVICE_HEIGHT * 0.021,
    fontFamily: Fonts.Cairo,
  },
});
export default DrawerContent;
