import React from "react"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function Search({ search = "sin texto", urlImage, value, onChangeText, icon }) {
  const deleteSearchTerm = () => {
    onChangeText("")
  }

  const searchTermTrue = value !== ""

  return (
    <View className="h-[58] w-[315] flex-row items-center justify-center self-center rounded-2xl bg-[#313131]">
      <View
        className={`absolute right-2 z-10 flex h-[46] w-[46] items-center justify-center rounded-xl bg-[#4ECB71] ${
          icon ? "block" : "hidden"
        }`}
      >
        <Image className={`h-6 w-6`} source={urlImage} icon={icon} />
      </View>
      <Image
        className={`-mt-1 inline h-6 w-6 transition duration-300`}
        source={require("../assets/icons/searchIcon.png")}
      />
      <TextInput
        className="mx-2 h-[58]  w-[240] self-start rounded-2xl text-[#989898]"
        autoCorrect={false}
        placeholder={search}
        placeholderTextColor={"#989898"}
        value={value}
        onChangeText={onChangeText}
      />
      {searchTermTrue && (
        <TouchableOpacity className="absolute right-20 z-50" onPress={deleteSearchTerm}>
          <Text className="text-xl text-[#989898]">X</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
