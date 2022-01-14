
import React, { useEffect } from 'react';
import { StyleSheet , I18nManager } from "react-native";
import { ContainerView, DefaultHeader } from '../../common';
import { Dimensions, Fonts, Colors } from '../../theme';
import {useTranslation} from 'react-i18next';
import List from './CardItem/List';
import Loading from '../../common/Loading';
import LoadData from '../../common/LoadData';

 const AllPlaces = ({navigation}) => {
  const {t} = useTranslation();
  const data = LoadData()
  useEffect(() => {
   }, []);

    return (
     <ContainerView style={styles.container}>
       <DefaultHeader title={t('app:all_places')}
       rightIcon={I18nManager.isRTL?'chevron-left':'chevron-right'}
       onRightPress={()=> navigation.goBack()}
       leftIcon={'menu'}
       onLeftPress={()=> navigation.openDrawer()}/>
       {!data? <Loading/>:
       <List data={data} onRefresh={()=> LoadData} refreshing={data? false: true}/>
      }
     </ContainerView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: Dimensions.DEVICE_WIDTH*0.03
    },
  });
  export default AllPlaces