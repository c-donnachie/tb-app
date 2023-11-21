import React, { useState } from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import Categories from "../components/Categories"
import LayoutFull from "../components/LayoutFull"
import QuadratureCard from "../components/Sales/QuadratureCard"
import TotalCard from "../components/Sales/TotalCard"
import Search from "../components/Search"

export default function SalesScreen() {
  const categorias = [
    {
      id: 1,
      nombre: "Aperturas",
    },
    {
      id: 2,
      nombre: "Cierres",
    },
    {
      id: 3,
      nombre: "Total Mes",
    },
    {
      id: 4,
      nombre: "Total Mes",
    },
    {
      id: 5,
      nombre: "Total Mes",
    },
  ]

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)

  const handleCategorySelect = (category) => {
    setCategoriaSeleccionada(category)
  }
  return (
    <View>
      <LayoutFull
        height={280}
        firstChild={
          <SafeAreaView>
            <View className="mt-3 flex flex-row items-center justify-evenly py-4">
              <TotalCard
                name={"Total ventas"}
                total={"50.434.430K"}
                urlIcon={require("../assets/icons/money1.png")}
                iconSizeW={36.11}
                iconSizeH={32.5}
              />
              <TotalCard
                name={"Total entregas"}
                total={"32.452K"}
                urlIcon={require("../assets/icons/money2.png")}
                iconSizeW={37}
                iconSizeH={37}
              />
              <TotalCard
                name={"T. diferencias"}
                total={"-23.450"}
                urlIcon={require("../assets/icons/money3.png")}
                iconSizeW={37}
                iconSizeH={37}
              />
            </View>
            <Search search="Buscar local" urlImage={require("../assets/icons/optionsIcon.png")} />
          </SafeAreaView>
        }
        secondChild={
          <SafeAreaView>
            <Categories categories={categorias} onCategorySelect={handleCategorySelect} />

            {/* Renderizar contenido específico según la categoría seleccionada */}
            {categoriaSeleccionada && (
              <View className="mx-4 mt-6 flex items-center">
                <Text style={styles.categoryTitle}>
                  {/* Información de {categoriaSeleccionada.nombre} */}
                </Text>
                <QuadratureCard />
              </View>
            )}
          </SafeAreaView>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
})
