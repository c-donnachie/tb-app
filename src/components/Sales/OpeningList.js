import React, { useState, useEffect } from "react"
import { SafeAreaView, ScrollView, View } from "react-native"
import OpeningItem from "./OpeningItem"
import { preCierres } from "../../mocks/preCierres"

export default function OpeningList({ onPressItem, searchTerm }) {
  const [filteredApertura, setFilteredApertura] = useState([])

  const apertura = preCierres

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredApertura(apertura)
    } else {
      const searchTermsArray = searchTerm.trim().toLowerCase().split(/\s+/)

      const filteredItems = apertura.filter((item) => {
        return (
          item.nombre !== undefined &&
          searchTermsArray.some((term) =>
            item.nombre.replace(/\s+/g, "").toLowerCase().includes(term)
          )
        )
      })

      setFilteredApertura(filteredItems)
    }
  }, [searchTerm, apertura])

  return (
    <ScrollView className="mb-28 mt-2 flex h-screen w-screen" showsVerticalScrollIndicator={false}>
      <SafeAreaView className="mb-80 flex items-center">
        {filteredApertura.map((item) => (
          <View key={item.id}>
            <OpeningItem
              localName={item.nombre}
              hour={item.hora}
              start={item.inicio}
              sale={item.totalVenta}
              difference={item.TotalDiferencia}
              localImage={item.imagen}
              onPress={() => onPressItem(item)}
            />
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  )
}
