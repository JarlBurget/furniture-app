import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Signup from './(auth)/Signup'

export default function index () {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Signup/>
    </SafeAreaView>
  )
}