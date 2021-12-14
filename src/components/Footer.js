import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import footImg1 from '../static/table.png';
import footImg2 from '../static/book.png';
import footImg1Ed from '../static/tabled.png';
import footImg2Ed from '../static/booked.png';

const Footer = () => {
  const [clicked, setClicked] = useState([true, ...Array(3).fill(false)]);
  const handleTouch = () => {
    console.warn(111);
  };
  return (
    <View style={styles.footerContainer}>
      <View style={styles.imageContainer} onTouchStart={handleTouch}>
        <Image style={styles.image} source={footImg1} />
        <Text>主页</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={footImg2} />
        <Text>课程</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={footImg1} />
        <Text>工具</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={footImg2} />
        <Text>我的</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    marginBottom: -10,
  },
});

export default Footer;
