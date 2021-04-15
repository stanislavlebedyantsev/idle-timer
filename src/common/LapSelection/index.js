import React from 'react';
import {Text} from 'react-native';
import moment from 'moment';

import { styles } from './styles';


const LapSelection = ({index, lapValue}) => {
  return (
    <Text style={styles.selectorText}>
      {`Lap ${index + 1} ${moment(lapValue).format('mm:ss')}.${
        moment(lapValue).milliseconds() / 10
      }`}
    </Text>
  );
};



export default LapSelection;
