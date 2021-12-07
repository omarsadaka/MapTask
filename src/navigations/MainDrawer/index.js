/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Colors, Dimensions} from '../../theme';
import DrawerContent from './DrawerContent';
import {I18nManager} from 'react-native';
import HomeStack from '../HomeStack';

const Drawer = createDrawerNavigator();

const MainDrawer = ({navigation}) => {
  
  return (
    <Drawer.Navigator
      drawerType='front'
      drawerPosition={I18nManager.isRTL ? 'right' : 'left'}
      drawerStyle={{
        backgroundColor: Colors.background,
        width: Dimensions.DEVICE_WIDTH * 0.7,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
      >
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}}/>
    </Drawer.Navigator>
  );
};

export default MainDrawer;
