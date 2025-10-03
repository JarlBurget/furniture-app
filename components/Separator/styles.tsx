import { colors } from "@/app/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  text: {
    color: colors.blue,
    fontWeight: '500',
  },
  line: {
    height: 1,
    backgroundColor: colors.lightGrey,
    flex: 1,
    marginHorizontal: 8,
  },
  
});