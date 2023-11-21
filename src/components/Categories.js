import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Categories({ categories, onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
    }
  }, [categories, selectedCategory, onCategorySelect]);

  const selectCategory = (category) => {
    setSelectedCategory(category);
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <ScrollView className="max-h-16" horizontal={true} showsHorizontalScrollIndicator={false}>
      <View className="flex-row gap-4 px-6 justify-between">
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => selectCategory(category)}
          >
            <View
              className={`flex justify-center items-center rounded-2xl bg-white px-6 h-[38] ${
                selectedCategory && selectedCategory.id === category.id ? "bg-[#4ECB71]" : ""
              }`}
            >
              <Text className={`${
                selectedCategory && selectedCategory.id === category.id ? "text-white font-bold" : "text-black"
              }`}>{category.nombre}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
