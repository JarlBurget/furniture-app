import AuthHeader from "@/components/AuthHeader";
import Checkbox from "@/components/Checkbox";
import GoogleLogin from "@/components/GoogleLogin";
import Input from "@/components/Input";
import Separator from "@/components/Separator";
import SignupButton from "@/components/SignupButton";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const Signup = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <AuthHeader
        title="Sign Up"
      />
      <Input label="Name" placeholder="Mart Haamer" />
      <Input label="Email" placeholder="mart@example.com" />
      <Input label="Password" placeholder="********" isPassword />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms & Conditions</Text></Text>
      </View>
      <SignupButton title="Sign Up" />
      <Separator text="Or sign up with" />
      <GoogleLogin />
      <Text style={styles.footerText}>Already have an account?
        <Text style={styles.footerLink}> Sign In</Text>
      </Text>
    </View>
  );
}
export default Signup;
