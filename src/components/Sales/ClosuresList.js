import React from "react"
import { Text, View } from "react-native"

export default function ClosuresList() {
  const locales = [
    {
      id: 1,
      name: "Full Tecnobox",
      openHour: "8:59",
      sale: "1.140.940",
      deposit: "450.000",
      difference: "-2.000",
      localImage: require("../../assets/full.png"),
    },
    {
      id: 2,
      name: "Prat 1",
      openHour: "8:47",
      sale: "623.460",
      deposit: "340.000",
      difference: "+600",
      localImage: require("../../assets/prat1.png"),
    },
    {
      id: 3,
      name: "Massman",
      sale: "623.460",
      deposit: "340.000",
      difference: "+600",
      localImage: require("../../assets/prat1.png"),
    },
    {
      id: 4,
      name: "Prat 2",
      sale: "623.460",
      deposit: "340.000",
      difference: "+600",
      localImage: require("../../assets/prat1.png"),
    },
  ]
  return (
    <View>
      <Text>ClosuresList</Text>
    </View>
  )
}
