import { LinearGradient } from "expo-linear-gradient"
import { motify } from "moti"
import "nativewind"
import React from "react"
import { TouchableOpacity, View } from "react-native"

const MotiView = motify(View)()

const LayoutFull = ({ firstChild, secondChild, height, sizeButton }) => {
  return (
    <View>
      <MotiView
        from={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -30 }}
        transition={{ type: "timing", duration: 500 }}
      >
        <LinearGradient
          colors={["#131313", "#313131"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ height: height }}
        >
          {firstChild}
        </LinearGradient>
        <View className="relative -mt-4 h-screen rounded-2xl bg-[#F9F9F9] pt-5">
          <TouchableOpacity className="z-600 -mt-8 mb-2 p-2" onPress={sizeButton}>
            <View className="h-[6] self-center rounded-xl bg-[#313131] px-8"></View>
          </TouchableOpacity>

          {secondChild}
        </View>
      </MotiView>
    </View>
  )
}

export default LayoutFull
