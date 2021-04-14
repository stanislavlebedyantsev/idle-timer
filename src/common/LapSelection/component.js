import React from 'react';
import {Text, StyleSheet} from 'react-native';
import moment from 'moment';

const LapSelection = ({index, lapValue}) => {
  return (
    <Text style={styles.selectorText}>
      {`Lap ${index + 1} ${moment(lapValue).format('mm:ss')}.${
        moment(lapValue).milliseconds() / 10
      }`}
    </Text>
  );
};

const styles = StyleSheet.create({
  selectorText: {
    fontSize: 24,
  },
});

export default LapSelection;
