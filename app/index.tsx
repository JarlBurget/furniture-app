import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Splash from './(tabs)/Splash/index'

export default function index () {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Splash/>
    </SafeAreaView>
  )
}