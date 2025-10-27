import { colors } from "@/app/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  footerText: {
    color: colors.blue,
    textAlign: "center",
    marginBottom: 56,
  },
  footerLink: {
    fontWeight: "bold",
  },
});
