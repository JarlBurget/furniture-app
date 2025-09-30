import { StyleSheet } from "react-native";

import { colors } from "@/app/utils/colors";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: colors.blue,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: '100%',
    marginTop: 60,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  loginContainer: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    borderRadius: 8,
    width: '100%',
    marginTop: 0,
   
  },
  loginTitle: {
    color: '#4F63AC',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
