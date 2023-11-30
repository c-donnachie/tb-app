import React, { useState } from "react"
import { Modal, Switch, Text, TouchableOpacity, View } from "react-native"

export const OptionsModal = ({ visible, onClose, children }) => {
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

          <View>{children}</View>

          <TouchableOpacity className="absolute right-2" onPress={onClose}>
            <Text className="text-2xl">X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
