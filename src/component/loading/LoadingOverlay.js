import React from 'react';
import {View , ActivityIndicator, StyleSheet} from 'react-native';
import {Colors} from '../../theme';

const LoadingOverlay =()=>{
    return (
      <View style={styles.container}>
          <ActivityIndicator style={styles.indicator} size="small" color={Colors.lightOrage}/>
      </View>
    );
}
const styles= StyleSheet.create({
  container: {
    zIndex: 3000,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator:{}
});
export default LoadingOverlay;
