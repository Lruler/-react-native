import React from 'react';
import {View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

const Carouse = props => {
  const {images} = props;
  const imgStyle = image => {
    let styles = StyleSheet.create({
      height: '100%',
      width: '100%',
      backgroundColor: `${image}`,
    });
    return styles;
  };
  return (
    <Swiper horizontal={true} showsButtons={true}>
      {images.map(image => {
        return <View style={imgStyle(image)} />;
      })}
    </Swiper>
  );
};

export default Carouse;
