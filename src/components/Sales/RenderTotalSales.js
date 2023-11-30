import { View, Text } from "react-native"
import React from "react"
import TotalCard from "./TotalCard"

export default function RenderTotalSales() {
  sales = [
    {
      id: 1,
      name: "Total ventas",
      value: "50.434.430K",
      icon: require("../../assets/icons/money1.png"),
    },
    {
      id: 2,
      name: "Total entregas",
      value: "32.452K",
      icon: require("../../assets/icons/money2.png"),
    },
    {
      id: 3,
      name: "T. diferencia",
      value: "-23.450",
      icon: require("../../assets/icons/money3.png"),
    },
  ]

  const imagePaths = {
    1: { path: require("../../assets/icons/money1.png"), width: 37, height: 37 },
    2: { path: require("../../assets/icons/money2.png"), width: 37, height: 37 },
    3: { path: require("../../assets/icons/money3.png"), width: 36.11, height: 32.5 },
  }

  return sales.map((item) => {
    return (
      <View key={item.id}>
        <TotalCard
          name={item.name}
          total={item.value}
          urlIcon={imagePaths[item.id].path}
          iconSizeW={imagePaths[item.id].width}
          iconSizeH={imagePaths[item.id].height}
        />
      </View>
    )
  })
}
