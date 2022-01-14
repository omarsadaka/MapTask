import { t } from 'i18next';
import React from 'react';
import {FlatList, StyleSheet, View, Text, RefreshControl} from 'react-native';
import { Fonts, Dimensions, Colors } from '../theme';
import {useTranslation} from 'react-i18next';

const DefaultList = ({
    data,
    renderItem, 
    style,
    numColumns,
    onEndReach,
    loadingMore,
    onRefresh,
    refreshing,
    horizontal
  }) => {
  const {t} = useTranslation();
  return  <FlatList
  style={style}
  data={data}
  nestedScrollEnabled
  horizontal={horizontal}
  numColumns={numColumns}
  showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item, index) => item.id}
  renderItem={renderItem}
  refreshControl={
    <RefreshControl
      colors={[Colors.blueColor, Colors.skyColor]}
      refreshing={refreshing}
      onRefresh={()=> onRefresh()} />
    }
  ListEmptyComponent={() => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={styles.text}>
        {t('app:no_item')}
      </Text>
    </View>
  )}
/>
};

const styles = StyleSheet.create({
  text:{
    fontFamily: Fonts.CairoBold,
    color: Colors.grayColorText,
    fontWeight:'bold',
    marginTop: Dimensions.DEVICE_HEIGHT*0.2,
    fontSize: Dimensions.DEVICE_HEIGHT*0.025,
    marginVertical: Dimensions.DEVICE_HEIGHT*0.03
  }
});

export default DefaultList;
