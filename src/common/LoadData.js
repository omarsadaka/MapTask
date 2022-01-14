import React, { useState , useEffect, useContext } from 'react';
import firestore from '@react-native-firebase/firestore';
import UserContext from '../hooks/UserContext';
const LoadData =()=>{
    const helper = useContext(UserContext);
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        getData()
      }, []);
    // get data from firestore firbase
  const getData= async()=>{
    const array=[]
    await firestore().collection(helper.auth).orderBy('name', 'asc').get().then((querySnapshot) => {
      querySnapshot.forEach(snapshot => {
          let data = snapshot.data();
          console.log('dataaaa', snapshot.id)
          const obj={
            id: snapshot.id,
            type: data.type,
            name: data.name,
            phone: data.phone,
            coordinates:{
              latitude: data.latitude,
              longitude: data.longitude
            },
            icon: data.type=='home'? require('../assets/images/house.png')
            :data.type=='park'? require('../assets/images/park.png')
            :require('../assets/images/restaurant.png')
          }
          array.push(obj)
      }
    )
    console.log('array', array)
    setPlaces(array)
  })
  }
    return places
}
export default LoadData;