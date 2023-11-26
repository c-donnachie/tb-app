import { useIsFocused } from "@react-navigation/native"
import { MotiView, View } from "moti"
import React, { useState } from "react"
import { Dimensions, FlatList, RefreshControl } from "react-native"
import { deleteTask } from "../../api"
import useTasks from "../hooks/useTasks"
import Search from "./Search"
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

  const renderItem = ({ item, index }) => {
    return (
      <MotiView
        from={{ opacity: 1 }}
        animate={{ opacity: item.isDeleting ? 0 : 1 }}
        transition={{ duration: 300 }}
      >
        <TaskItem task={item} handleDelete={handleDelete} />
      </MotiView>
    )
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await loadTasks()
    setRefreshing(false)
  })

  return (
    <View className="w-full flex-1 items-center gap-4">
      <MotiView transition={{ duration: 600 }}>
        <Search
          search="Buscar"
          value={searchTerm}
          onChangeText={handleSearchRealTime}
          urlImage={require("../assets/icons/optionsIcon.png")}
          icon={true}
        />
      </MotiView>
      <FlatList
        style={{ width: Dimensions.get("window").width / 1 - 20 }}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <MotiView
            from={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 20 + index * 100 }} // Usar index para aplicar el retraso
          >
            <TaskItem task={item} handleDelete={handleDelete} />
          </MotiView>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  )
}
