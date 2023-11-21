import { LinearGradient } from "expo-linear-gradient";
import "nativewind";
import React from "react";
import { View } from "react-native";

export default function LayoutFull({ firstChild, secondChild, height }) {
  return (
    <View>
      <LinearGradient
        colors={["#131313", "#313131"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        // className={`h-${height}`}
        style={{height: height}}
          >
        {firstChild}
      </LinearGradient>
      <View className="-mt-4 h-screen rounded-2xl bg-[#F9F9F9] pt-5">
        {secondChild}
      </View>
    </View>
  );
}
