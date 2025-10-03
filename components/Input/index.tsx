import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/app/utils/colors";

type InputProps = {
  label: string;
  placeholder?: string;
  isPassword?: boolean;
};

const Input: React.FC<InputProps> = ({ label, placeholder, isPassword }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholderTextColor={colors.lightGrey}
        />
        {
            isPassword ? (
            <Pressable onPress={onEyePress} >
                <Image style={styles.eye} source={isPasswordVisible ? require('@/assets/icons/eye.png') : require('@/assets/icons/eye_closed.png')} />
            </Pressable>
        ) : null
        }
      </View>
    </View>
  );
}
export default Input;