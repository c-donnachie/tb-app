import React from "react"
import { Image, Text, View } from "react-native"

export default function TotalCard({ name, total, urlIcon, iconSizeH, iconSizeW }) {
  return (
    <View>
      <View className="items-center h-[70] w-[92]  rounded-xl flex justify-center bg-white">
        <Image className={`absolute -top-4`} style={{height: iconSizeH, width: iconSizeW}} source={urlIcon} />
        <Text className="text-xs mt-4">{name}</Text>
        <Text className="font-bold text-xs">{total}</Text>
      </View>
    </View>
  )
}
