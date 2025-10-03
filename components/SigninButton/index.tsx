import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';

type ButtonProps = {
  title: string;
};

const SigninButton = ({ title }: ButtonProps) => {
  const handlePress = () => {
    console.warn('You pressed the button!');
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default SigninButton;
