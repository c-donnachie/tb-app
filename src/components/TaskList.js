import { useIsFocused } from "@react-navigation/native"
import React, { useState } from "react"
import { FlatList, RefreshControl, TextInput, View } from "react-native"
import { deleteTask } from "../../api"
import useTasks from "../hooks/useTasks"
import TaskItem from "./TaskItem"

export default function TaskList() {
  const [refreshing, setRefreshing] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const isFocused = useIsFocused()

  const { tasks, setTasks, loadTasks } = useTasks(isFocused)

  const handleSearchRealTime = (text) => {
    setSearchTerm(text)
    if (text === "") {
      loadTasks()
    } else {
      const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(text.toLowerCase())
      )
      setTasks(filteredTasks)
    }
  }

  const handleDelete = async (id) => {
    await deleteTask(id)
    await loadTasks()
  }

  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete} />
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await loadTasks()
    setRefreshing(false)
  })

  return (
    <View className="w-full flex-1 items-center gap-4">
      <TextInput
        className="w-40 rounded-lg bg-white p-2"
        placeholder="Buscar"
        value={searchTerm}
        onChangeText={handleSearchRealTime} // Utiliza handleSearchRealTime para búsqueda en tiempo real
      />
      <FlatList
        className="w-full"
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  )
}
