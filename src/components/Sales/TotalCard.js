import React from "react"
import { Image, Text, View } from "react-native"

export default function TotalCard({ name, total, urlIcon, iconSizeH, iconSizeW }) {
  return (
    <View>
      <View className="flex h-[70] w-[92]  items-center justify-center rounded-xl bg-white">
        <Image
          className={`absolute -top-4`}
          style={{ height: iconSizeH, width: iconSizeW }}
          source={urlIcon}
        />
        <Text className="mt-4 text-xs">{name}</Text>
        <Text className="text-xs font-bold">{total}</Text>
      </View>
    </View>
  )
}
