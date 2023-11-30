import { View, Text } from "react-native"
import React, { useState } from "react"
import { OptionsModal } from "../OptionsModal"

export default function OptionsModalSales({ state, toggle }) {
  const [modalVisible, setModalVisible] = useState(false)

  const toggleSwitch = () => {
    setModalVisible((previousState) => !previousState)
  }
  return (
    <View>
      <OptionsModal state={modalVisible} toggle={toggleSwitch}>
        <Text>{modalVisible}</Text>
        <Text>Hoalsd</Text>
      </OptionsModal>
    </View>
  )
}
