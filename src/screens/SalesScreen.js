import { motify } from "moti"
import React, { useEffect, useState } from "react"
import { SafeAreaView, View } from "react-native"
import Categories from "../components/Categories"
import LayoutFull from "../components/LayoutFull"
import OpeningList from "../components/Sales/OpeningList"
import TotalCard from "../components/Sales/TotalCard"
import Search from "../components/Search"

const MotiView = motify(View)()

export default function SalesScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sizeScreen, setSizeScreen] = useState("24%")
  const [layoutFullKey, setLayoutFullKey] = useState(0)

  const handleSearchRealTime = (text) => {
    setSearchTerm(text)
  }

  ventas = [
    {
      id: 1,
      name: "Total ventas",
      value: "50.434.430K",
      icon: require("../assets/icons/money1.png"),
    },
    {
      id: 2,
      name: "Total entregas",
      value: "32.452K",
      icon: require("../assets/icons/money2.png"),
    },
    {
      id: 3,
      name: "T. diferencia",
      value: "-23.450",
      icon: require("../assets/icons/money3.png"),
    },
  ]

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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
  }

  // useEffect para cargar la categoría inicial al inicializar la aplicación
  useEffect(() => {
    if (!selectedCategory) {
      // Si no hay ninguna categoría seleccionada, establece la primera categoría
      setSelectedCategory(categorias[0])
    }
  }, [selectedCategory, categorias])

  const imagePaths = {
    1: { path: require("../assets/icons/money1.png"), width: 37, height: 37 },
    2: { path: require("../assets/icons/money2.png"), width: 37, height: 37 },
    3: { path: require("../assets/icons/money3.png"), width: 36.11, height: 32.5 },
  }

  const ChangeScreen = () => {
    if (sizeScreen === "24%") {
      setSizeScreen("8%")
      console.log("17")
    } else {
      setSizeScreen("24%")
      console.log("24")
    }

    setLayoutFullKey((prevKey) => prevKey + 1)
  }

  return (
    <View>
      <LayoutFull
        height={sizeScreen}
        sizeButton={ChangeScreen}
        firstChild={
          <SafeAreaView>
            <MotiView transition={{ duration: 100 }}>
              <View
                className={`mt-1 flex flex-row items-center justify-evenly py-4 ${
                  sizeScreen === "8%" ? "mt-20" : ""
                }`}
              >
                {ventas.map((item) => {
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
                })}
              </View>
              <Search
                search="Buscar local..."
                urlImage={require("../assets/icons/optionsIcon.png")}
                icon={true}
                value={searchTerm}
                onChangeText={handleSearchRealTime}
              />
            </MotiView>
          </SafeAreaView>
        }
        secondChild={
          <View>
            <Categories categories={categorias} onCategorySelect={handleCategorySelect} />

            {selectedCategory && (selectedCategory.nombre === "Aperturas" ? <OpeningList /> : null)}
          </View>
        }
      />
    </View>
  )
}
