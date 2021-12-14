import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import footImg1 from '../static/1.png';
import footImg2 from '../static/2.png';
import footImg3 from '../static/3.png';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image style={styles.image} source={footImg1} />
      <Image style={styles.image} source={footImg2} />
      <Image style={styles.image} source={footImg3} />
      <Image style={styles.image} source={footImg2} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    height: 70,
    width: 70,
  },
});

export default Footer;
