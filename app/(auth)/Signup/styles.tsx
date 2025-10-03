import { colors } from "@/app/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    backgroundColor: '#fff',  
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    marginHorizontal: 14,
    color: colors.blue,
  },
  agreeTextBold: {
    fontWeight: 'bold',
  },
});
