import React, { useState } from "react"
import { Modal, Switch, Text, TouchableOpacity, View } from "react-native"

export const OptionsModal = ({ visible, onClose }) => {
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
  }
  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      {/* bg */}
      <View
        className="flex-1 items-center justify-center bg-[#00000080]"
        // onPress={onClose}
      >
        {/* container */}
        <View className="flex h-72 w-72 rounded-xl bg-white p-[20]">
          {/* content */}

          {/* <View>
            <Text>Contenido del Modal</Text>
          </View> */}
          <View className="mt-2 flex flex-col gap-6 py-2">
            <Text>Solo locales Abiertos: {isEnabled ? "ON" : "OFF"}</Text>
            <Switch
              // trackColor={{ false: "#767577", true: "#81b0ff" }}
              // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View className="flex flex-grow justify-evenly pt-4">
            <Text className="">Switch State: {isEnabled ? "ON" : "OFF"}</Text>
            <Switch
              className=""
              // trackColor={{ false: "#767577", true: "#81b0ff" }}
              // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <TouchableOpacity className="absolute right-2" onPress={onClose}>
            <Text className="text-2xl">X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
