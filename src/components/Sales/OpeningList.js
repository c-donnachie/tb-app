import React from "react"
import { SafeAreaView, ScrollView, View } from "react-native"
import OpeningItem from "./OpeningItem"

export default function OpeningList() {
  const locales = [
    {
      id: 1,
      name: "Full Tecnobox",
      openHour: "8:59",
      start: "26.940",
      sale: "0",
      difference: "+10",
      localImage: require("../../assets/full.png"),
    },
    {
      id: 2,
      name: "Prat 1",
      openHour: "8:59",
      start: "34.230",
      sale: "0",
      difference: "0",
      localImage: require("../../assets/prat1.png"),
    },
    {
      id: 3,
      name: "Prat 2",
      // start: "0",
      // sale: "0",
      // difference: "0",
      localImage: require("../../assets/full.png"),
    },
    {
      id: 4,
      name: "Massman",
      openHour: "8:59",
      start: "27.540",
      sale: "0",
      difference: "0",
      localImage: require("../../assets/full.png"),
    },
  ]

  return (
    <ScrollView className="mb-28 mt-2 flex h-screen w-screen" showsVerticalScrollIndicator={true}>
      <SafeAreaView className="mb-80 flex items-center">
        {locales.map((local) => (
          <View key={local.id}>
            <OpeningItem
              localName={local.name}
              hour={local.openHour}
              start={local.start}
              sale={local.sale}
              difference={local.difference}
              localImage={local.localImage}
            />
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  )
}
