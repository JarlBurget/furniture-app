import { colors } from "@/app/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkgrey,
    borderRadius: 14,
    width: '45%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    marginBottom: 50,
  },
  image: {
    width: 60,
    height: 60,
  },
});