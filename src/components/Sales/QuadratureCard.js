import React from "react"
import { View } from "react-native"

export default function QuadratureCard() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "orange",
        marginTop: 50,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            height: 120,
            width: 250,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: -16,
              height: 60,
              width: 60,
              borderRadius: 8,
              backgroundColor: "black",
            }}
          />
        </View>
      </View>
    </View>
  )
}
