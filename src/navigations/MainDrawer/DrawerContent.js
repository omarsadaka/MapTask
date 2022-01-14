import React, { useEffect, useContext, useState  } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import DrawerItem from './DrawerItem';
import {Avatar} from 'react-native-elements';
import {Colors, Dimensions, Fonts} from '../../theme';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';
import UserContext from '../../hooks/UserContext';
import  AsyncStorage from '@react-native-community/async-storage';

const DrawerContent = (props) => {
  const {t} = useTranslation();
  const helper = useContext(UserContext);
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

 const logOut=()=>{
  AsyncStorage.setItem('@auth','')
  helper.setAuth('')
  // auth()
  // .signOut()
  // .then(() => {
  //   console.log('User signed out!')
  //   AsyncStorage.setItem('@auth','')
  //   helper.setAuth('')
  // });
 }
  return (
    <View {...props} style={{flex: 1}}>
      <View style={styles.header}>
      <Avatar
        containerStyle={styles.avatarContainer}
        avatarStyle={styles.avatar}
        source={require('../../assets/images/user.png')}
      />
      <Text style={styles.username}>{user.email}</Text>
      </View>
      <DrawerItem
        labal={t('app:change_lang')}
        iconName="globe"
        iconType="feather"
        onPress={()=> props.navigation.navigate('ChangeLang')}/>

      <DrawerItem
        labal={t('app:all_places')}
        iconName="home"
        iconType="feather"
        onPress={()=> props.navigation.navigate('AllPlaces')}/>   
         
      <DrawerItem
        labal={t('app:logout')}
        iconName="log-out"
        iconType="feather"
        onPress={()=> logOut()}
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
    fontSize: Dimensions.DEVICE_HEIGHT * 0.023,
    fontFamily: Fonts.CairoBold,
  },
});
export default DrawerContent;
