import React from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './styles';

type ButtonProps = {
  title: string;
};

const LoginButton = ({ title }: ButtonProps) => {
  const handlePress = () => {
    console.warn('You pressed the login button!');
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.loginContainer,
        pressed && { backgroundColor: '#e6e6e6' }, // pressed effect
      ]}
      onPress={handlePress}
    >
      <Text style={styles.loginTitle}>{title}</Text>
    </Pressable>
  );
};

export default LoginButton;
