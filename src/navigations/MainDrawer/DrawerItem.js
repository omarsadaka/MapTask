import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors, Dimensions, Fonts} from '../../theme';

const DrawerItem = ({labal, iconName, iconType, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <Icon
        name={iconName}
        type={iconType}
        size={Dimensions.DEVICE_HEIGHT * 0.022}
        color={Colors.darkOrage}
      />
      <Text style={styles.labal}>{labal}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginStart: Dimensions.DEVICE_WIDTH * 0.05,
    marginTop: Dimensions.DEVICE_HEIGHT * 0.03,
  },
  labal: {
    color: Colors.blackSecondary,
    fontFamily: Fonts.CairoBold,
    fontWeight:'800',
    marginStart: Dimensions.DEVICE_WIDTH * 0.04,
    fontSize: Dimensions.DEVICE_HEIGHT * 0.016,
  },
});

export default DrawerItem;
