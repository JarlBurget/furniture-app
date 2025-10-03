import React from "react";
import { Image, Text, View } from "react-native";
import SigninButton from "../../../components/SigninButton/index";
import SignupButton from '../../../components/SignupButton/index';

import { styles } from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={require("../../../assets/images/Splash.png")} style={styles.image}/>
      <Text style={styles.title}>You'll find </Text>
      <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
      <Text style={styles.title}> Here!</Text>

      <SignupButton title='Sign Up'/>
      <SigninButton title="Sign In" />

    </View>
  );
};

export default Splash;