import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import LayoutFull from "../components/LayoutFull"
import Search from "../components/Search"

export default function TestScreen() {
  return (
    <View>
      <LayoutFull
        height="300"
        firstChild={
          <SafeAreaView>
            <Search search={"Test buscar"} />
          </SafeAreaView>
        }
        secondChild={
          <SafeAreaView>
            <Text>Contenido 2</Text>
            <Text>Contenido 2</Text>
          </SafeAreaView>
        }
      />
    </View>
  )
}
