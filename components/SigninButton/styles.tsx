import { StyleSheet } from "react-native";

import { colors } from "@/app/utils/colors";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: '100%',
    marginTop: 20,
  },
  title: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
