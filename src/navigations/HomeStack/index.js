import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import styles from '../styles';
import Intro from '../../screen/Intro/Intro';
import Home from '../../screen/Home/Home';
import Source from '../../screen/Source/Source';
import Destination from '../../screen/destination/Destination';


const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {

  return (
    <Stack.Navigator initialRouteName='Intro'>
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerShown: false,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          title: '',
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerShown: false,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          title: '',
        }}
      />
       <Stack.Screen
        name="Source"
        component={Source}
        options={{
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerShown: false,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          title:'',
        }}
      />
      <Stack.Screen
        name="Destination"
        component={Destination}
        options={{
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerShown: false,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          title:'',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
