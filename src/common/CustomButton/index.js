import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

const CustomButton = ({onPress, title, disabled = false}) => {
  return (
    <TouchableOpacity
      style={disabled ? styles.buttonDisabled : styles.buttonActive}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
