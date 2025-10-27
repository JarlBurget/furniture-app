import AuthHeader from "@/components/AuthHeader";
import GoogleLogin from "@/components/GoogleLogin";
import Input from "@/components/Input";
import Separator from "@/components/Separator";
import SignupButton from "@/components/SignupButton";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" />
      <Input label="Email" placeholder="mart@example.com" />
      <Input label="Password" placeholder="********" isPassword />

      <SignupButton title="Sign In" />

      <Separator text="Or sign in with" />
      <GoogleLogin />

      <Text style={styles.footerText}>
        Don’t have an account?
        <Text style={styles.footerLink}> Sign Up</Text>
      </Text>
    </View>
  );
};

export default SignIn;
