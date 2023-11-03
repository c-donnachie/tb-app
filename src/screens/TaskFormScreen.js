import React, { useEffect, useState } from "react"
import { Text, TextInput, TouchableOpacity } from "react-native"
import { getTask, saveTask, updateTask } from "../../api"
import Layout from "../components/Layout"

export default function TaskFormScreen({ navigation, route }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
  })

  const [editing, setEditing] = useState(false)

  const handleChange = (name, value) => setTask({ ...task, [name]: value })

  const handleSubmit = async () => {
    try {
      if (!editing) {
        await saveTask(task)
      } else {
        await updateTask(route.params.id, task)
      }
      navigation.navigate("HomeScreen")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Updating a Task" })
      setEditing(true)
      ;(async () => {
        const res = await getTask(route.params.id)
        setTask({ title: res.title, description: res.description })
      })()
    }
  }, [])

  return (
    <Layout className="gap-4">
      <TextInput
        className="w-full rounded-xl bg-white py-2 text-center"
        placeholder="Write a title"
        onChangeText={(text) => handleChange("title", text)}
        value={task.title}
      />
      <TextInput
        className="w-full rounded-xl bg-white py-2 text-center"
        placeholder="Write a description"
        onChangeText={(text) => handleChange("description", text)}
        value={task.description}
      />
      {!editing ? (
        <TouchableOpacity className="rounded-xl bg-slate-500 p-3" onPress={handleSubmit}>
          <Text className="font-normal">Save Task</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity className="rounded-xl bg-slate-500 p-3" onPress={handleSubmit}>
          <Text className="font-normal">Update task</Text>
        </TouchableOpacity>
      )}
    </Layout>
  )
}
