import React from "react"
import { Image, Text, View, TouchableWithoutFeedback, Button } from "react-native"

export default function OpeningItem({
  localName = "Local name",
  hour = "cerrado",
  start = "-",
  sale = "-",
  difference = "-",
  localImage = require("../../assets/full.png"),
  onPress,
  item,
}) {
  const hourTextStyle = hour === "cerrado" ? {} : {}
  const hourBgColor = hour === "cerrado" ? "bg-red-500" : "bg-[#4ECB71]"
  const hourText = hour === "cerrado" ? "" : "✓"
  const hourLocalImage = hour === "cerrado" ? "opacity-25" : ""
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="relative rounded-xl px-4 py-2">
        <View className="relative ml-6 h-28 w-[310] rounded-2xl bg-white">
          <View className="absolute -left-8 top-6 h-[65] w-[65] rounded-2xl bg-white" />
          <Image
            className={`absolute -left-8 top-6 h-[65] w-[65] rounded-2xl ${hourLocalImage}`}
            source={localImage}
          />

          <View className="ml-12 flex flex-row py-3">
            <Text className="text-lg font-semibold">{localName}</Text>
            <View
              className={`absolute right-4 top-4 flex h-4 flex-row items-center justify-center space-x-1 rounded-2xl px-2 ${hourBgColor}`}
            >
              <Text style={hourTextStyle} className="text-xs">
                {hour}
              </Text>
              <Text>{hourText}</Text>
            </View>
          </View>
          <View className="ml-8 flex flex-row justify-around py-1">
            <View className="flex items-center">
              <Text className="text-sm font-semibold">{start}</Text>
              <Text>Inicio</Text>
            </View>
            <View className="flex items-center">
              <Text className="text-sm font-semibold">{sale}</Text>
              <Text>Ventas</Text>
            </View>
            <View className="flex items-center">
              <Text className="text-sm font-semibold">{difference}</Text>
              <Text>Diferencia</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
