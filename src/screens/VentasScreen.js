import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"
import { StatusBar, StyleSheet, Text, View } from "react-native"
import Categories from "../components/Categories/Categories"
import Search from "../components/Search/Search"

const VentasScreen = () => {
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

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const handleCategorySelect = (category) => {
        setCategoriaSeleccionada(category);
    };

    return (
        <View className="flex-1">
            <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
            <LinearGradient
                colors={["#131313", "#313131"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                className="h-80"
            >
                <View className="mt-56">
                    <Search search="Buscar local"/>
                </View>
            </LinearGradient>
            <View className="-mt-4 h-screen rounded-2xl bg-[#F9F9F9]">
                <Categories categories={categorias} onCategorySelect={handleCategorySelect} />
                
                {/* Renderizar contenido específico según la categoría seleccionada */}
                {categoriaSeleccionada && (
                    <View style={styles.contentContainer}>
                        <Text style={styles.categoryTitle}>
                            Información de {categoriaSeleccionada.nombre}
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
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
});

export default VentasScreen;
