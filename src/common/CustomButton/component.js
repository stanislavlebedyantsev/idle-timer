import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = ({onPress, title, disabled = false}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    width: '40%',
    height: '50%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 36,
  },
});

export default CustomButton;
