import React from "react"
import { Image, TextInput, View } from "react-native"

export default function Search({search="sin texto", urlImage}) {
    return (
        <View className="bg-[#313131] w-[315] h-[58] self-center rounded-2xl justify-center">
            <View className="flex justify-center items-center right-2 absolute z-10 bg-[#4ECB71] w-[46] h-[46] rounded-xl">
            <Image className="w-6 h-6" source={urlImage}/>
            </View>
            <TextInput className="mx-4 text-[#989898]  w-[240] h-[52] self-start rounded-2xl"
            autoCorrect={false}
            placeholder={search + " 🔍"}
            placeholderTextColor={"#989898"}
            />
        </View>
  )
}
