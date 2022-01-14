/* eslint-disable prettier/prettier */
import React, { useEffect , useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainDrawer from './MainDrawer';
import Login from '../screen/Login/Login';
import SignUp from '../screen/SignUp/SignUp';
import '../i18n';
import UserContext from '../hooks/UserContext';


const Stack = createStackNavigator();

const Main = () => {
  const helper = useContext(UserContext);

  return (
    <NavigationContainer>
      {helper.auth?
      <RootNavigator/>:<AuthNavigator />
      }
    
    </NavigationContainer>
  );

  function RootNavigator() {
    return (
      <Stack.Navigator 
        screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen name="Root" component={MainDrawer}/>
      </Stack.Navigator>
    );
  }
  
  function AuthNavigator() {
    return (
      <Stack.Navigator 
        screenOptions={{
        headerShown: false
        }}>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="SignUp" component={SignUp}/>
      </Stack.Navigator>
    );
  }
};

export default Main;
