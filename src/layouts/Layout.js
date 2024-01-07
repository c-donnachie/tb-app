import { StatusBar } from "expo-status-bar"
import React from "react"
import { View } from "react-native"

export default function Layout({ children }) {
  return (
    <View className="flex flex-1 items-center bg-zinc-900 p-10">
      <StatusBar backgroundColor="white" />
      {children}
    </View>
  )
}
