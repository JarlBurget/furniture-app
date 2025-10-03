import React from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './styles';

type ButtonProps = {
  title: string;
};

const SignupButton = ({ title }: ButtonProps) => {
  const handlePress = () => {
    console.warn('You pressed the signup button!');
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
      ]}
      onPress={handlePress}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default SignupButton;
