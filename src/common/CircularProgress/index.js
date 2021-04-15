import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import { styles } from './styles';

const CircularProgress = ({fill, text}) => {
  return (
    <AnimatedCircularProgress
      size={120}
      width={3}
      fill={fill}
      tintColor="#00e0ff"
      backgroundColor="#3d5875">
      {fill => <Text style={styles.timerText}>{`${Math.trunc(fill)}${text}`}</Text>}
    </AnimatedCircularProgress>
  );
};



export default CircularProgress;
