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
    auth, setAuth,
		lat, setLat,
		lon, setLon,
   }= useCachedResources()
   const [show, setShow] = useState(false);

   useEffect(() => {
    clearTimeout(timeout);
    let timeout = setTimeout(() => {
    setShow(true)
    }, 200);
  }, []);

  return (
    <View style={{flex: 1}}>
      <UserContext.Provider
       value={{
        auth, setAuth,
        lat, setLat,
        lon, setLon,
        }}>
        {show? <Navigation/>:null}
      </UserContext.Provider>
    </View>
  );
};

export default App;
