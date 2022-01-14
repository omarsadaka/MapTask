import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import styles from '../styles';
import Home from '../../screen/Home/Home';
import AddPlace from '../../screen/AddPlace/AddPlace'
import EditPlace from '../../screen/EditPlace/EditPlace';
import ChangeLang from '../../screen/ChageLang/ChageLang';
import AllPlaces from '../../screen/AllPlaces/AllPlaces';
import {useTranslation} from 'react-i18next';


const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName='Intro'>
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
        name="AddPlace"
        component={AddPlace}
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
        name="EditPlace"
        component={EditPlace}
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
        name="ChangeLang"
        component={ChangeLang}
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
        name="AllPlaces"
        component={AllPlaces}
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
    </Stack.Navigator>
  );
};

export default HomeStack;
