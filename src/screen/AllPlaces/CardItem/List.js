import React from 'react';
import {StyleSheet} from 'react-native';
import { DefaultList } from '../../../common';
import { Dimensions } from '../../../theme';
import Item from './Item';

const List = ({data, onRefresh, refreshing}) => {
  const renderItem = ({item}) => {
    return (
      <Item
        {...item}
      />
    );
  };

  return (
    <DefaultList
      style={{marginTop: Dimensions.DEVICE_HEIGHT*0.02}}
      data={data}
      numColumns={1}
      renderItem={renderItem}
      onRefresh={()=> onRefresh()}
      refreshing={refreshing}
      horizontal={false}
    />
  );
};

const styles = StyleSheet.create({
 
});

export default List;
