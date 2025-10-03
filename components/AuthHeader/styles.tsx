import { colors } from "@/app/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 24,
  },
  image: {
    width: 18,
    height: 18,
    
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    color: colors.blue,
    paddingHorizontal: 16,
  },
});