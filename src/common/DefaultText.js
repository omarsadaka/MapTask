import React from 'react';
import {Text, StyleSheet} from 'react-native';

const DefaultText = ({style, title, maxLine}) => {
  return <Text style={[style]} numberOfLines={maxLine}>
    {title}
    </Text>;
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
});

export default DefaultText;
