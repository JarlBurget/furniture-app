import { colors } from "@/app/utils/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 2,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    width: 12,
    height: 9,
  },
});

export default styles;
