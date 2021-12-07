import React, {useEffect, useState, useContext} from 'react';
import {LogBox, View, I18nManager,Platform} from 'react-native';
// import Splash from './src/screen/Splash';
import Navigation from './src/navigations';
import UserContext from './src/hooks/UserContext';
import useCachedResources from './src/hooks/useCachedResources';
LogBox.ignoreAllLogs()
const App = () => {
  I18nManager.allowRTL(false);
  const{
    name, setName,
		lat, setLat,
		lon, setLon,
		dname, setDname,
		dlat, setDlat,
		dlon, setDlon
   }= useCachedResources()
  

  return (
    <View style={{flex: 1}}>
      <UserContext.Provider
       value={{
        name, setName,
        lat, setLat,
        lon, setLon,
        dname, setDname,
        dlat, setDlat,
        dlon, setDlon
        }}>
        <Navigation/>
      </UserContext.Provider>
    </View>
  );
};

export default App;
