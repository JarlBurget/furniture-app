import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type AuthHeaderProps = {
  title: string;
  onBackPress?: () => void;
};

const AuthHeader = ({ title, onBackPress }: AuthHeaderProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress} style={styles.title}>
        <Image
          source={require("../../assets/icons/back.png")}
          style={styles.image}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;