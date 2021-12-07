import React, { useState, useContext , useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, StatusBar, Alert, PermissionsAndroid} from 'react-native';
import {Icon , Button  , Input} from 'react-native-elements';
import {Colors,Dimensions,Fonts} from '../../theme';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import UserContext from '../../hooks/UserContext';
import Modal from 'react-native-modal';
import {getDistance} from 'geolib';
import Geolocation from "react-native-geolocation-service";
// import Geolocation from '@react-native-community/geolocation';
import LoadingOverlay from '../../component/loading/LoadingOverlay';

const Home = ({navigation}) => {
  const helper = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [distace, setDistance] = useState(null);
  const [unit, setUnit] = useState(null);
  const [currentLat, setCurretLat] = useState(null);
  const [currentLon, setCurrentLon] = useState(null);
  
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
    setLoading(true)
    Geolocation.getCurrentPosition(
      position => {
        console.log('setCurretLat',position.coords.latitude)
        console.log('setCurrentLon',position.coords.longitude)
        setCurretLat(position.coords.latitude)
        setCurrentLon(position.coords.longitude)
        setLoading(false)
      },
      error => {
        Alert.alert(error.message.toString());
        console.log('asd', error.message)
        setLoading(false)
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      }
    );
  }
  // Calculate distance
  const loadDistance=()=>{
    var dis = getDistance(
      {latitude: helper.lat, longitude: helper.lon},
      {latitude: helper.dlat, longitude: helper.dlon},
      );
      console.log('distace',dis)
      if(dis>=1000){
        setDistance(dis/1000)
        setUnit('KM')
      }else{
        setDistance(dis)
        setUnit('M')
      }
  }
// Render map view
  const renderMap=()=>{
    return(
      <MapView
      style={{ width: '100%', height: '100%', flex: 1 }}
      onRegionChange={e => console.log('region change: ', e)}
      zoomEnabled
      maxZoomLevel={6}
      // zoomControlEnabled
      // followsUserLocation
      provider={PROVIDER_GOOGLE}
      region={{
          latitude: currentLat?currentLat:27.819490000000002,
          longitude: currentLon?currentLon:34.59872,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
      }}>
       <Marker
        coordinate={{
          latitude: currentLat?currentLat:27.819490000000002,
          longitude: currentLon?currentLon:34.59872,
        }}>
    </Marker> 
  </MapView>
    )
  }

  // Render source input and destination
  const renderInput=()=>{
    return(
       <View style={styles.inputView}>
         <TouchableOpacity style={styles.iconView}
         onPress={()=> navigation.openDrawer()}>
           <Icon name='menu' type="feather" 
               size={Dimensions.DEVICE_HEIGHT*0.03}
               color={Colors.black}
               style={styles.icon}
             />
        </TouchableOpacity>
           <TouchableOpacity style={styles.input}
           onPress={()=> navigation.navigate('Source')}>
            <Text style={[styles.label_style,{color: helper.lat? Colors.black: Colors.textSubtitle}]}> {helper.name? helper.name : 'Your Location'} </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.input}
          onPress={()=> navigation.navigate('Destination')}>
            <Text style={[styles.label_style,{color: helper.dlat? Colors.black: Colors.textSubtitle}]}> { helper.dname? helper.dname : 'Destination'} </Text>
          </TouchableOpacity>
       </View>
    )
  }
 // Render request button
  const renderBtn=()=>{
    return(
       <View style={styles.btnView}>
      <Button
      buttonStyle={styles.btnStyle}
      title={'REQUEST RD'}
      titleStyle={styles.btnText}
      loading={null}
      onPress={()=> {
        loadDistance()
        setModalVisible(true)
      }}
     />
       </View>
    )
  }

  // Render popup model
  const renderModel=()=>{
    return(
        <Modal
                style={{ flex: 1 }}
                isVisible={modalVisible}
                animationInTiming={1000}
                animationOutTiming={1000}
                backdropTransitionInTiming={1000}
                backdropTransitionOutTiming={1000}>
                <KeyboardAvoidingView enabled style={styles.model}>
                    <TouchableOpacity style={{alignItems:'flex-start',width:'95%',marginTop:Dimensions.DEVICE_HEIGHT*0.01}}
                    onPress={()=> setModalVisible(false)}>
                     <Icon name='x-circle' type="feather" size={Dimensions.DEVICE_HEIGHT*0.04} color={Colors.black}/>
                    </TouchableOpacity>
                    <View style={styles.modelCard}>
                      {helper.lat&& helper.dlat?
                        <View>
                         <Text style={[styles.alertText,{fontSize: Dimensions.DEVICE_WIDTH*0.03}]}>{'The distance between the source and destination is:'}</Text>
                         <Text style={styles.alertText}>{distace} {unit}</Text>
                        </View>
                      :
                         <Text style={styles.alertText}>{'Please select source/destination'}</Text>
                      }
                    </View>
                </KeyboardAvoidingView>
            </Modal>
    )
}
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle='dark-content' backgroundColor='transparent' />
      {renderMap()}
      {renderInput()}
      {renderBtn()}
      {renderModel()}
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center'
    },
    inputView:{
      alignItems:'center',
      borderRadius: Dimensions.DEVICE_WIDTH*0.012,
      backgroundColor:Colors.grayLight,
      width:Dimensions.DEVICE_WIDTH*0.88,
      paddingVertical: Dimensions.DEVICE_HEIGHT*0.02,
      position:'absolute',
      top: Dimensions.DEVICE_HEIGHT*0.05
    },
    btnView:{
      position:'absolute',
      bottom: Dimensions.DEVICE_HEIGHT*0.03
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
    input:{
      width:Dimensions.DEVICE_WIDTH*0.8,
      height:Dimensions.DEVICE_HEIGHT*0.06,
      marginTop: Dimensions.DEVICE_HEIGHT*0.01,
      backgroundColor:Colors.white,
      borderRadius:6,
      alignItems:'flex-start'
    },
    label_style:{
      fontSize: Dimensions.DEVICE_HEIGHT * 0.02,
      fontFamily: Fonts.CairoBold,
      fontWeight: '200',
      height: Dimensions.DEVICE_HEIGHT*0.06,
      textAlign: 'left',
      textAlignVertical:'center',
      marginHorizontal: Dimensions.DEVICE_WIDTH*0.015
    },
    icon:{
      width: Dimensions.DEVICE_WIDTH*0.08,
      height: Dimensions.DEVICE_WIDTH*0.08,
      borderRadius: Dimensions.DEVICE_WIDTH*0.08/2,
      backgroundColor: Colors.white,
      alignItems:'center', justifyContent:'center',
    },
    iconView:{
      alignItems:'flex-start',
      width:Dimensions.DEVICE_WIDTH*0.8
    },
    model:{
      height: Dimensions.DEVICE_HEIGHT / 4, 
      backgroundColor: Colors.white, 
      alignItems: 'center',
      borderRadius: Dimensions.DEVICE_WIDTH*0.04
    },
    modelCard:{
      width: '100%',
      alignItems: 'center',
      marginTop: Dimensions.DEVICE_HEIGHT*0.01
    },
    alertText:{
      color: Colors.black,
      fontSize: Dimensions.DEVICE_HEIGHT * 0.025,
      fontFamily: Fonts.CairoBold,
      fontWeight: 'bold',
      textAlign:'center',
      marginTop: Dimensions.DEVICE_HEIGHT*0.02
    },
});

export default Home;
