import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Checkbox = ( {checked, onCheck}: {checked: boolean; onCheck:(value: boolean) => void}) => {
  return (
    <TouchableOpacity activeOpacity={0.6}  style={styles.container} onPress={() => onCheck(!checked)}>
      {checked ? (
        <View style= {styles.innerContainer}>
            <Image style={styles.checkIcon} source={require('@/assets/icons/checkbox_checked.png')} />
        </View>
      ) : null}
        
    </TouchableOpacity>
  );                    
};

export default Checkbox;
