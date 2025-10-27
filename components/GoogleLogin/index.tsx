import React from "react";
import { Image, Pressable } from "react-native";
import { styles } from "./styles";


const GoogleLogin = () => {
    return (
        <Pressable style={styles.container}>
            <Image source={require("@/assets/icons/Gmail.png")} style={styles.image} />
        </Pressable>
    );
};

export default GoogleLogin;