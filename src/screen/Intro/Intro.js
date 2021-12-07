import React, {useEffect,useContext} from 'react';
import {StyleSheet, Image,View} from 'react-native';
import {Colors, Dimensions,Fonts} from '../../theme';
import { Button } from 'react-native-elements';

const Intro = ({navigation}) => {

  const renderBtn=()=>{
    return(
      <View style={styles.btnView}>
       <Button
        buttonStyle={styles.btnStyle}
        title={'GET STARTED'}
        titleStyle={styles.btnText}
        loading={null}
        onPress={()=> {
           navigation.navigate('Home')
        }}/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      {renderBtn()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.DEVICE_WIDTH * 0.7,
    height: Dimensions.DEVICE_HEIGHT * 0.35,
    resizeMode: 'contain',
  },
  btnView:{
    height: Dimensions.DEVICE_HEIGHT*0.15,
    width: Dimensions.DEVICE_WIDTH,
    alignItems:'center',justifyContent:'center',
    backgroundColor: Colors.green,
    position:'absolute',
    bottom:0,
    borderTopRightRadius: Dimensions.DEVICE_WIDTH*0.1,
    borderTopLeftRadius: Dimensions.DEVICE_WIDTH*0.1
  },
  btnStyle:{
    width:Dimensions.DEVICE_WIDTH*0.5,
    borderRadius: Dimensions.DEVICE_WIDTH*0.012,
  },
  btnText:{
    color: Colors.white,
    fontSize: Dimensions.DEVICE_HEIGHT * 0.023,
    fontFamily: Fonts.CairoBold,
    fontWeight: 'bold',
  },
});

export default Intro;
