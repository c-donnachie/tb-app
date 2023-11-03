import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"

export default function TaskItem({ task, handleDelete }) {
  const navigation = useNavigation()

  return (
    <View className="m-2 flex-row justify-between rounded-xl bg-gray-200 p-4">
      <TouchableOpacity
        onPress={() => navigation.navigate("taskFormScreen", { id: task.id })}
        className="rounded-lg bg-slate-300 p-3"
      >
        <Text>{task.title}</Text>
        <Text>{task.description}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleDelete(task.id)}
        className="m-2 flex h-6 w-14 items-center justify-center rounded-md bg-red-600"
      >
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}
