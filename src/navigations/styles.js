import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors,Dimensions, Fonts} from '../theme';

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontFamily: Fonts.CairoBold,
    fontSize: Dimensions.DEVICE_HEIGHT * 0.018,
    fontWeight:'600',
    color:Colors.blackSecondary
  },
  headerStyle: {
    shadowOpacity: 0,
    backgroundColor:Colors.background
  },

});

export default styles;
