import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Swiper from 'react-native-swiper';

const Carouse = props => {
  const {images} = props;
  return (
    <Swiper horizontal={true} showsButtons={true}>
      {images.map(image => {
        return (
          <View
            style={{backgroundColor: `${image}`, height: '100%', width: '100%'}}
          />
        );
      })}
    </Swiper>
  );
};

export default Carouse;
