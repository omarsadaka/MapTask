/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {Dimensions, Fonts, Colors} from '../../theme';
import LoadingOverlay from '../loading/LoadingOverlay';
import Item from './Item';

const List = ({data, isDestination, onEndReach,loadingMore}) => {
  const renderItem = ({item}) => {
    return (
      <Item
        {...item} isDestination={isDestination}
      />
    );
  };

  return (
    <FlatList
      style={{marginTop:Dimensions.DEVICE_HEIGHT*0.02}}
      data={data}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => item.id}
      renderItem={renderItem}
      onEndReachedThreshold={0.3}
      onEndReached={()=> onEndReach()}
      ListFooterComponent={loadingMore?<LoadingOverlay/>:null }
      ListFooterComponentStyle={{marginVertical: Dimensions.DEVICE_HEIGHT*0.03}}
      ListEmptyComponent={() => (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={styles.text}>
            {'No Result Found!'}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  text:{
    fontFamily: Fonts.CairoBold,
    color: Colors.grayColorText,
    fontSize: Dimensions.DEVICE_HEIGHT*0.025,
    marginVertical: Dimensions.DEVICE_HEIGHT*0.03
  }
});

export default List;
