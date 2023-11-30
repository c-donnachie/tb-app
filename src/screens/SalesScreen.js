import { motify } from "moti"
import React, { useEffect, useState, useRef, useCallback } from "react"
import {
  SafeAreaView,
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native"
import Categories from "../components/Categories"
import LayoutFull from "../components/LayoutFull"
import { OptionsModal } from "../components/OptionsModal"
import OpeningList from "../components/Sales/OpeningList"
import Search from "../components/Search"
import MyBottomSheet from "../components/MyBottomSheet"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import RenderTotalSales from "../components/Sales/RenderTotalSales"
import OptionsModalSales from "../components/Sales/OptionsModalSales"
import OpeningBottomSheet from "../components/Sales/salesBottomSheet/OpeningBottomSheet"

const MotiView = motify(View)()

export default function SalesScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sizeScreen, setSizeScreen] = useState("24%")
  const [layoutFullKey, setLayoutFullKey] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
  }

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const handleSearchRealTime = (text) => {
    setSearchTerm(text)
  }

  const categorias = [
    {
      id: 1,
      nombre: "Aperturas",
    },
    {
      id: 2,
      nombre: "Ventas",
    },
    {
      id: 3,
      nombre: "Cierres",
    },
    {
      id: 4,
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

  const bottomSheetRef = useRef(null)
  const { height } = useWindowDimensions()

  const pressHandle = useCallback(() => {
    bottomSheetRef.current.expand()
  }, [])

  const closeHandle = useCallback(() => {
    bottomSheetRef.current.close()
  }, [])

  const [selectedItem, setSelectedItem] = useState()

  const handleOpeningListItemPress = (item) => {
    setSelectedItem(item)
    pressHandle()
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "black" }}>
      <LayoutFull
        height={sizeScreen}
        sizeButton={ChangeScreen}
        firstChild={
          <SafeAreaView className="">
            <MotiView transition={{ duration: 100 }}>
              <View
                className={`mt-1 flex flex-row items-center justify-evenly py-4 ${
                  sizeScreen === "8%" ? "mt-20" : ""
                }`}
              >
                <RenderTotalSales />
              </View>
              <Search
                search="Buscar local..."
                urlImage={require("../assets/icons/optionsIcon.png")}
                icon={true}
                value={searchTerm}
                onChangeText={handleSearchRealTime}
                onPress={openModal}
              />
            </MotiView>
          </SafeAreaView>
        }
        secondChild={
          <View>
            <Categories categories={categorias} onCategorySelect={handleCategorySelect} />

            {selectedCategory &&
              (selectedCategory.nombre === "Aperturas" ? (
                <OpeningList onPressItem={handleOpeningListItemPress} searchTerm={searchTerm} />
              ) : null)}
          </View>
        }
      />

      <MyBottomSheet
        activeHeight={height * 0.5}
        ref={bottomSheetRef}
        backDropColor="black"
        backgroundColor="white"
      >
        {selectedItem && (
          <>
            <OpeningBottomSheet data={selectedItem} />
          </>
        )}
      </MyBottomSheet>

      <OptionsModal visible={modalVisible} onClose={closeModal}>
        {/* Container */}
        <View className="flex items-center">
          {/* Columna 1 */}
          <View className="flex">
            <Text>Solo mis locales</Text>
            <Switch />
          </View>
        </View>
      </OptionsModal>
    </GestureHandlerRootView>
  )
}
{
  /* <TouchableOpacity className="tm-8 absolute pl-80" onPress={closeHandle}>
  <Text className="text-2xl font-semibold text-gray-400">X</Text>
</TouchableOpacity> */
}
