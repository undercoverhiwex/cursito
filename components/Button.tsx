import React from 'react';
import {
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({onPress, children, ...rest}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

Button.Icon = Icon;

const Label = ({children, style, ...rest}: TextProps) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

Button.Label = Label;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff7675',
    borderRadius: 20,
    marginBottom: 30,
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    color: '#dfe6e9',
  },
});

export default Button;
