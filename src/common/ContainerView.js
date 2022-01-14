import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Colors from '../theme/Colors';

const ContainerView = ({style, children}) => {
  return <View style={[styles.contanier, style]}>
    <StatusBar translucent  barStyle='light-content' backgroundColor='transparent'/>
    {children}</View>;
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default ContainerView;
