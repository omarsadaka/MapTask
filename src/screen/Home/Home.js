import React, { useState, useContext , useEffect } from 'react';
import {View, Image, StyleSheet, TouchableOpacity, StatusBar, Alert, PermissionsAndroid} from 'react-native';
import {Icon } from 'react-native-elements';
import {Colors,Dimensions,Fonts} from '../../theme';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import UserContext from '../../hooks/UserContext';
import Geolocation from "react-native-geolocation-service";
import { DefaultButton, DefaultText} from '../../common';
import {useTranslation} from 'react-i18next';
import firestore from '@react-native-firebase/firestore';
import LoadData from '../../common/LoadData';
const ASPECT_RATIO = Dimensions.DEVICE_WIDTH / Dimensions.DEVICE_HEIGHT;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const Home = ({navigation}) => {
  const {t} = useTranslation();
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const data = LoadData()
  useEffect(() => {
    requestPermissions()
    getCurrentLocation()
  }, []);

  // requestPermissions
  const requestPermissions= async()=> {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
       authorizationLevel: 'whenInUse',
     });
    }
  
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }

 // get user location
  const getCurrentLocation=()=>{
    Geolocation.getCurrentPosition(
      position => {
        console.log('setCurretLat',position.coords.latitude)
        console.log('setCurrentLon',position.coords.longitude)
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
      },
      error => {
        Alert.alert(error.message.toString());
        console.log('asd', error.message)
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      }
    );
  }
  
  const onMapPress=(e)=> {
    setLat(e.nativeEvent.coordinate.latitude)
    setLon(e.nativeEvent.coordinate.longitude)
  }
// Render map view
  const renderMap=()=>{
    return(
      <MapView
      style={{ width: '100%', height: '100%', flex: 1 }}
      onPress={e => onMapPress(e)}
      zoomEnabled
      // maxZoomLevel={3}
      followsUserLocation
      provider={PROVIDER_GOOGLE}
      region={{
          latitude: lat?lat:27.819490000000002,
          longitude: lon?lon:34.59872,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta:LONGITUDE_DELTA,
      }}>
       {data.map(marker => (
      <MapView.Marker 
        coordinate={marker.coordinates}
        onPress={()=> navigation.navigate('EditPlace',{Item: marker})}>
        <Image source={marker.icon} style={styles.logo} resizeMode='contain'/>
        {/* <Callout style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} tooltip={true}>
            <TouchableOpacity style={styles.Callout}
             onPress={()=> navigation.navigate('EditPlace',{Item: marker})}>
              <DefaultText title={marker.name} style={styles.name}/>
            </TouchableOpacity>                        
        </Callout> */}
      </MapView.Marker>
  ))}
  </MapView>
    )
  }

  const renderHeader=()=>{
    return(
       <View style={styles.header}>
         <TouchableOpacity style={styles.iconView} onPress={()=> navigation.openDrawer()}>
           <Icon name='menu' type="feather" 
               size={Dimensions.DEVICE_HEIGHT*0.03}
               color={Colors.black}
               style={styles.icon}
             />
        </TouchableOpacity>
        <DefaultText title={t('app:home')} style={styles.title}/>
       </View>
    )
  }

  const renderBtn=()=>{
    return(
    <View style={styles.btnContainer}>
      <DefaultButton title={t('app:add_place')} 
      style={{width: Dimensions.DEVICE_WIDTH*0.5}}
      onClick={()=> navigation.push('AddPlace',{
        Lat: lat,
        Lon: lon
      })}/>
    </View>
    )
  }
 
 
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle='dark-content' backgroundColor='transparent' />
      {renderMap()}
      {renderHeader()}
      {renderBtn()}
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center'
    },
    header:{
      alignItems:'center',
      flexDirection:'row',
      borderRadius: Dimensions.DEVICE_WIDTH*0.012,
      backgroundColor:Colors.red,
      width:Dimensions.DEVICE_WIDTH*0.95,
      paddingVertical: Dimensions.DEVICE_HEIGHT*0.02,
      position:'absolute',
      top: Dimensions.DEVICE_HEIGHT*0.04
    },
    icon:{
      width: Dimensions.DEVICE_WIDTH*0.08,
      height: Dimensions.DEVICE_WIDTH*0.08,
      borderRadius: Dimensions.DEVICE_WIDTH*0.08/2,
      backgroundColor: Colors.white,
      alignItems:'center', justifyContent:'center',
    },
    iconView:{
      alignSelf:'flex-start',
      marginHorizontal: Dimensions.DEVICE_WIDTH*0.03
    },
    title:{
      flex:1,
      fontSize: Dimensions.DEVICE_WIDTH*0.05,
      fontFamily: Fonts.CairoBold,
      fontWeight:'bold',
      textAlign:'left',
      marginHorizontal: Dimensions.DEVICE_WIDTH*0.05,
      color: Colors.white
    },
    btnContainer:{
      alignItems:'center',
      position:'absolute',
      bottom: Dimensions.DEVICE_HEIGHT*0.02
    },
    logo:{
      height: Dimensions.DEVICE_WIDTH*0.07,
      width:Dimensions.DEVICE_WIDTH*0.07
    },
    Callout:{
      width: Dimensions.DEVICE_WIDTH*0.3,
      backgroundColor: Colors.white,
      alignItems:'center', justifyContent:'center',
      borderRadius: 5,
      elevation:3,shadowOpacity:0.02,
      padding:5
    },
    name:{
      color: Colors.black,
      fontSize: Dimensions.DEVICE_WIDTH*0.035,
      fontFamily: Fonts.CairoBold,
      fontWeight:'bold',
    }
   
});

export default Home;
