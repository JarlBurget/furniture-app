import { StyleSheet } from "react-native";

import { colors } from "@/app/utils/colors";

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 209,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline'
  },
  container: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: colors.white
  },
  titlecontainer: {
    marginVertical: 54,
  }
});
